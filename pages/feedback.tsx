import React, { useReducer } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { postFeedback } from 'components/Feedback/FeedbackFetch'
import { defaultFormState, formReducer } from 'components/Feedback/FormReducers'
import { logException } from 'components/global/analytics'
import { StyledContainer } from 'components/global/Container/Container.styled'
import { getLocalStoredName, storageKey, StorageKeys } from 'components/utils/storageKey'
import { useDeviceId } from 'components/utils/useDeviceId'
import { useForm } from 'components/utils/useForm'
import { fetchSessions } from 'components/utils/useSessions'
import { Session } from 'config/types'
import { Main } from 'layouts/main'
import { useConfig } from 'Context/Config'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'

interface FeedbackFormState {
  name: string | undefined
  sessionId: string | undefined
  rating: string | undefined
  likes: string | undefined
  improvementIdeas: string | undefined
}

interface FeedbackProps {
  sessions: Session[]
}

const Feedback: NextPage<FeedbackProps> = () => {
  const { conference, appConfig } = useConfig()
  const { deviceId } = useDeviceId(conference.Instance)
  const [, dispatch] = useReducer(formReducer, defaultFormState)

  const formSubmitHandler = async () => {
    dispatch('submitting')
    try {
      localStorage.setItem(storageKey<StorageKeys>(conference.Instance, StorageKeys.FEEDBACK_GIVER), values.name)
    } catch (err) {
      // well, we tried
    }

    try {
      await postFeedback<FeedbackFormState>({
        deviceId,
        feedbackUrl: appConfig.feedbackUrl,
        values,
        formName: 'Session feedback',
      })
        .then(() => {
          dispatch('submitted')
          resetForm()
          setTimeout(() => dispatch('reset'), 3000 /* 3 seconds */)
        })
        .catch(() => {
          dispatch('error')
        })
    } catch (e) {
      logException('Error when submitting session feedback', e, { deviceId })
      dispatch('error')
    }
  }

  const { values, resetForm } = useForm<FeedbackFormState>(formSubmitHandler, {
    improvementIdeas: '',
    likes: '',
    name: getLocalStoredName(conference.Instance),
    rating: '',
    sessionId: undefined,
  })

  return (
    <Main title="Feedback" description={`${conference.Name} ${conference.Instance} session feedback.`}>
      <StyledContainer>
        <h1>
          {conference.Name} {conference.Instance} session feedback
        </h1>
        <p>
          Please use{' '}
          <a href="https://forms.gle/7p8AapfBquDd4q9z6">this form to provide feedback on individual session feedback</a>
          .
        </p>
        <p>&nbsp;</p>
        <p>
          If you would like to leave feedback about the conference as a whole, please use{' '}
          <a href="https://forms.gle/PVyfhcaKgzX9cACT9">this form</a>.
        </p>
      </StyledContainer>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)

  if (!dates.AcceptingFeedback) {
    return { redirect: { destination: '/', permanent: false } }
  }

  const sessions = await fetchSessions(process.env.NEXT_PUBLIC_GET_AGENDA_URL)

  return {
    props: {
      sessions: sessions ? sessions : [],
    },
  }
}

export default Feedback
