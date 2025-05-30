import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { FaqList } from 'components/FAQList/FaqList'
import Conference from 'config/conference'
import getFaqs from 'config/faqs'
import { TicketPurchasingOptions, TicketsProvider } from 'config/types'
import { Tito } from 'components/Tickets/Tito'
import { Main } from 'layouts/main'
import { Eventbrite } from 'components/Tickets/Eventbrite'
import { Text } from 'components/global/text'
import { useConfig } from 'Context/Config'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'

const TicketPage: NextPage = () => {
  const { conference, dates } = useConfig()
  const faqs = getFaqs(dates)

  return (
    <Main title="Tickets" description={`Purchase tickets for ${conference.Name}`}>
      <h1>Tickets</h1>

      {/* The logic here isn't quite right as it hides the tito link? */}
      {/* {conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen && ( */}
      <Text>
        Tickets have sold out, but we are asking people to add themselves to the waitlist just in case any tickets
        become available.
      </Text>
      {/* )} */}

      <FaqList faqs={faqs.filter((f) => f.Category === 'tickets')} />

      {conference.TicketsProviderId === TicketsProvider.Eventbrite && (
        <Eventbrite eventId={conference.TicketsProviderEventId} />
      )}
      {conference.TicketsProviderId === TicketsProvider.Tito && dates.RegistrationOpen && (
        <Tito accountId={conference.TicketsProviderAccountId} eventId={conference.TicketsProviderEventId} />
      )}
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)
  if (!dates.RegistrationOpen && Conference.TicketPurchasingOptions !== TicketPurchasingOptions.WaitListOpen) {
    return { notFound: true }
  }

  return { props: {} }
}

export default TicketPage
