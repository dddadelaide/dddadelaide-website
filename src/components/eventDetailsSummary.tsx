import React, { StatelessComponent } from 'react'
import { Action, Conference, Dates, TicketPurchasingOptions } from '../config/types'
import ActionButton from './actionButton'

export interface EventDetailsSummaryProps {
  conference: Conference
  primaryAction: Action
  pagePath: string
  dates: Dates
}

const EventDetailsSummary: StatelessComponent<EventDetailsSummaryProps> = ({
  conference,
  primaryAction,
  pagePath,
  dates,
}) => (
  <div className="event-details">
    <h2>
      <span>{!dates.IsComplete ? 'Next event' : 'Previous event'}</span> {dates.Display}
    </h2>
    <ul>
      {conference.TicketPurchasingOptions === TicketPurchasingOptions.SoldOut && (
        <li>
          <strong>SOLD OUT</strong>
        </li>
      )}
      {conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen && (
        <li>
          <strong>WAITLIST OPEN</strong>
        </li>
      )}
      {conference.SellingPoints.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
      <li>Only {conference.TicketPrice}</li>
    </ul>
    {pagePath !== primaryAction.Url && <ActionButton action={primaryAction} />}
  </div>
)

export default EventDetailsSummary
