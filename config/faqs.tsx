import React, { Fragment } from 'react'
import { SafeLink } from 'components/global/safeLink'
import { StyledList } from 'components/global/text'
import Conference from './conference'
import { Dates, FAQ, TicketPurchasingOptions } from './types'
import { formatInTimeZone } from 'date-fns-tz'

export default function getFaqs(dates: Dates): FAQ[] {
  const Faqs: FAQ[] = []

  const hasAfterparty = Conference.Venue.Afterparty !== null

  if (!Conference.HideDate) {
    const afterpartyBlurb = ` followed by the afterparty ${
      Conference.HideAfterpartyVenue ? '' : ' at ' + Conference.Venue.Afterparty
    }`

    Faqs.push({
      Question: 'When and where is it?',
      Answer: `The event ${dates.IsComplete ? 'was' : 'will be'} held on ${dates.Display}${
        Conference.HideVenue ? '' : ' at ' + Conference.Venue.Name
      }.
          Doors ${dates.IsComplete ? 'opened' : 'will open'} at ${Conference.DoorsOpenTime} and ${
        dates.IsComplete ? 'we finished' : "we'll finish"
      } at ${Conference.FinishTime}${hasAfterparty ? afterpartyBlurb : ''}.`,
    })
  }

  Faqs.push({
    Question: 'How much does it cost to attend?',
    Answer: `${Conference.TicketPrice} covers your entry, food and coffee all day${
      hasAfterparty ? ' and access to the afterparty' : ''
    }! Amazing value right!?
      We are able to keep the ticket price so low thanks to our generous sponsors.
      ${
        Conference.Name
      } is a non profit event and any excess will be kept as part of a fund for future events and/or donated to charity.`,
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'Is this just for software developers?',
    Answer:
      'No! While our name implies we are just about devs, our events are aimed at all professionals in the software industry - developers, testers, designers, analysts, managers, etc.',
  })

  Faqs.push({
    Question: 'How is the agenda chosen?',
    Answer:
      'DDD Adelaide is a community driven event with core values of inclusion and democratic engagement. Proposed sessions are anonymised and voted for by the public, but some curation is inevitably required to produce an agenda that meets our inclusion goals. We aim to maximise the impact of every vote in the process, and always look to the community first in our decision making.',
  })

  Faqs.push({
    Question: 'Will refreshments be provided?',
    Answer:
      'Yes, attendees will receive lunch and snacks throughout the day and we will have a coffee cart operating all day.',
  })

  Faqs.push({
    Question: 'What about swag?',
    Answer:
      'Yes, there will be swag! Each attendee will be able to collect their swag from the check-in table as they check in, which will come in a small DDD tote bag. Along with this, our sponsors usually have a collection of shiny things at their booths - make sure to stop by for a chat!',
  })

  if (Conference.Venue && Conference.Venue.Wifi !== null) {
    Faqs.push({
      Question: 'Will there be wifi?',
      Answer: Conference.Venue.Wifi,
    })
  }

  if (Conference.ChildcarePrice !== null) {
    Faqs.push({
      Question: 'Will childcare be available?',
      Answer: `Yes! We will be providing childcare at this year’s conference. It will be available for the duration of the main conference (not including the afterparty) and will cost ${Conference.ChildcarePrice}. You will be required to provide food for your child for the day. If you would like to book your child in then please purchase an additional ‘Childcare’ ticket when purchasing your ticket. Spots are limited!`,
      Category: 'tickets',
    })
  }

  Faqs.push({
    Question: 'When does registration open?',
    Answer: (
      <Fragment>
        {dates.RegistrationOpen ? (
          <Fragment>
            Now! Go to <a href="/tickets">the tickets page</a> to register.
          </Fragment>
        ) : Conference.TicketPurchasingOptions === TicketPurchasingOptions.SoldOut ? (
          <Fragment>The conference is now sold out.</Fragment>
        ) : Conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen ? (
          <Fragment>The conference has an open waitlist for tickets.</Fragment>
        ) : dates.RegistrationClosed ? (
          <Fragment>Ticket sales have closed.</Fragment>
        ) : (
          <Fragment>
            Registration opens on{' '}
            {formatInTimeZone(Conference.RegistrationOpenFrom, Conference.TimeZone, dates.DateDisplayFormat)} at{' '}
            {formatInTimeZone(Conference.RegistrationOpenFrom, Conference.TimeZone, dates.TimeDisplayFormat)}.
          </Fragment>
        )}
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Can I pay by cheque, invoice, cash?',
    Answer: (
      <Fragment>
        Payments can be made with credit card using Tito via our tickets page when registrations are open. Companies
        that want to buy bulk tickets (&gt; 10) can{' '}
        <a className="maillink" href={'mailto:' + Conference.ContactEmail}>
          contact us
        </a>{' '}
        to pay by invoice (<abbr title="Electronic funds transfer">EFT</abbr>).
      </Fragment>
    ),
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'Can I cancel/give my ticket to someone else?',
    Answer: <Fragment>You are welcome to send someone else in your place. Please do this through Tito.</Fragment>,
    Category: 'tickets',
  })

  Faqs.push({
    Question: `What is the hashtag for ${Conference.Name}?`,
    Answer: (
      <Fragment>
        The Twitter hashtag is{' '}
        <SafeLink href={'https://twitter.com/search?q=%23' + Conference.HashTag} target="_blank">
          #{Conference.HashTag}
        </SafeLink>
        .
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Will I be photographed or filmed?',
    Answer: (
      <Fragment>
        Media personnel authorised by {Conference.Name} will be in attendance. These media personnel will respect the
        photo policy as defined in the <a href="code-of-conduct#photo-policy">Code of Conduct</a>.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'I want to be involved. Can I help?',
    Answer: (
      <Fragment>
        We are always looking for volunteers and sometimes looking for organisers! It takes a lot of effort to organise
        a volunteer-run conference like {Conference.Name}. Shoot us an email at{' '}
        <a className="maillink" href={'mailto:' + Conference.ContactEmail}>
          {Conference.ContactEmail}
        </a>{' '}
        and we can work with you to figure out the best way to assist.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'How can I contact the organisers?',
    Answer: (
      <Fragment>
        We can be contacted via email at{' '}
        <a className="maillink" href={'mailto:' + Conference.ContactEmail}>
          {Conference.ContactEmail}
        </a>
        {Conference.Socials.Twitter.Name !== null ? (
          <Fragment>
            {' '}
            and Twitter at{' '}
            <SafeLink href={'https://twitter.com/' + Conference.Socials.Twitter.Name} target="_blank">
              @{Conference.Socials.Twitter.Name}
            </SafeLink>
            . See also the other Social Media accounts at the footer of this page.
          </Fragment>
        ) : (
          '. Also, see our various social media accounts at the footer of this page.'
        )}
      </Fragment>
    ),
  })

  Faqs.push({
    Question: `How can I sponsor ${Conference.Name}?`,
    Answer: (
      <Fragment>
        {Conference.Name} will be heavily publicised in the community and we believe offers a unique marketing and
        recruiting opportunity based on being attended by people that don't normally get to go to conferences. It's also
        a great chance to give back and support the local software community. We have various levels of sponsorship
        available with various benefits and price points. We have a sponsorship prospectus that will be provided on
        request that explains detailed benefits and impact of sponsorship and the difference between the various levels;
        if you would like a copy{' '}
        <a className="maillink" href={'mailto:' + Conference.SponsorshipEmail}>
          please contact us
        </a>
        .
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'How can I go to this kind of thing more often?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>
          Adelaide has a growing, diverse software community. Consider attending one of the meetups/conferences such as:
        </p>
        <StyledList>
          <li>
            <SafeLink href="https://www.meetup.com/en-AU/Adelaide-dotNET/" target="_blank">
              Adelaide .NET User Group
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/en-AU/Front-End-Developers-Adelaide-FEDA/" target="_blank">
              Front-End Developers Adelaide
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/en-AU/Amazon-Web-Services-User-Group-Adelaide/" target="_blank">
              Amazon Web Services User Group Adelaide
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/en-AU/Adelaide-Azure-User-Group/" target="_blank">
              Adelaide Azure User Group
            </SafeLink>
          </li>
        </StyledList>
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Who are the organisers?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>
          {Conference.Name} {Conference.Instance} has been organized by Andrew Best, Claire Webber, David Gardiner,
          Harnoor Bandesh, Isaac Mann, and Will Turner, with support from the broader DDD Australia community including
          Melbourne, Sydney, Brisbane, and Perth.
        </p>
        <StyledList>
          <li>
            <SafeLink href="https://twitter.com/_andrewb" target="_blank">
              Andrew Best
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/ClaireLWebber" target="_blank">
              Claire Webber
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/davidrgardiner" target="_blank">
              David Gardiner
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/HBandesh" target="_blank">
              Harnoor Bandesh
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://twitter.com/imann04" target="_blank">
              Isaac Mann
            </SafeLink>
          </li>
          <li>Will Turner</li>
        </StyledList>
        <p>Furthermore, we have many others who volunteer and assist with organization.</p>
      </Fragment>
    ),
  })

  return Faqs
}
