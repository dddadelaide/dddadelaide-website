import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'
import { Conference, Dates } from 'config/types'

interface AllAgendasProps {
  dates: Dates
  conference: Conference
  conferenceInstance: string
}

const AllAgendas = ({ conference, conferenceInstance, dates }: AllAgendasProps): JSX.Element => (
  <Fragment>
    <h2 className="text-center">All Agendas</h2>
    <p className="text-center">
      {conference.PreviousInstances.map((instance, i) => (
        <Fragment key={instance}>
          {instance === conferenceInstance ? (
            instance
          ) : (
            <Link href={'/agenda/' + instance}>
              <a>{instance}</a>
            </Link>
          )}
          {i > 0 && i < conference.PreviousInstances.length ? ' | ' : null}
        </Fragment>
      ))}
      {dates.AgendaPublished && conference.PreviousInstances.length > 0 && ' | '}
      {dates.AgendaPublished && conferenceInstance !== conference.Instance && (
        <Link href="/agenda">
          <a>{conference.Instance}</a>
        </Link>
      )}
      {dates.AgendaPublished && conferenceInstance === conference.Instance && (
        <Fragment>{conference.Instance}</Fragment>
      )}
    </p>
  </Fragment>
)

export default AllAgendas
