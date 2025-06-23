import React from 'react'
import AllAgendas from 'components/allAgendas'
import { Sponsors } from 'components/Sponsors/sponsors'
import { Conference2024 } from 'config/2024'
import { Session, SponsorType } from 'config/types'
import { Main } from 'layouts/agendaWide'
import { GetStaticProps, NextPage } from 'next'
import { formatInTimeZone } from 'date-fns-tz'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import getConferenceDates from 'config/dates'
import { Agenda2024 } from 'components/2024agenda'
import data from 'public/static/agenda/2024.json'

interface AgendaPageProps {
  sessions?: Session[]
  sessionId?: string
}

const AgendaPage: NextPage<AgendaPageProps> = ({ sessions, sessionId }) => {
  const [currentDate] = React.useState(dateTimeProvider.now())
  const dates = getConferenceDates(Conference2024, currentDate)

  return (
    <Main title="Agenda" description={Conference2024.Name + ' agenda.'}>
      <div className="container">
        <h1>{dates.IsComplete && Conference2024.Instance} Agenda</h1>

        {!dates.AgendaPublished && (
          <p>
            The agenda has not yet been finalised; please come back on{' '}
            {formatInTimeZone(Conference2024.AgendaPublishedFrom, Conference2024.TimeZone, dates.DateDisplayFormat)}{' '}
            {formatInTimeZone(Conference2024.AgendaPublishedFrom, Conference2024.TimeZone, dates.TimeDisplayFormat)}. In
            the meantime, check out our previous agendas below.
          </p>
        )}
        {dates.AgendaPublished && (
          <Agenda2024
            date={Conference2024.Date}
            sessions={sessions}
            sponsors={Conference2024.Sponsors}
            acceptingFeedback={dates.AcceptingFeedback}
            feedbackLink={Conference2024.SessionFeedbackLink}
            selectedSessionId={sessionId}
          />
        )}
        {Conference2024.Handbook && (
          <React.Fragment>
            <h2>Handbook</h2>
            <p>
              <a className="btn btn-pdf" href={'/static/docs/' + Conference2024.Handbook}>
                Download handbook (PDF)
              </a>
            </p>
          </React.Fragment>
        )}
        <Sponsors
          show={!Conference2024.HideSponsors}
          hideUpsell={Conference2024.HideSponsorshipUpsell}
          sponsors={Conference2024.Sponsors.filter(
            (s) => s.type === SponsorType.Gold || s.type === SponsorType.Platinum,
          )}
        />
        <AllAgendas conference={Conference2024} conferenceInstance={Conference2024.Instance} dates={dates} />
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      sessions: data,
      sessionId: '',
    },
  }
}

export default AgendaPage
