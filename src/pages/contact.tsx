import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="Contact Us"
    description={'How to contact ' + props.pageMetadata.conference.Name + '.'}
  >
    <h1>Contact Us</h1>
    <ul>
      <li>
        <strong>General enquiries:</strong>{' '}
        <a className="maillink" href={'mailto:' + props.pageMetadata.conference.ContactEmail}>
          {props.pageMetadata.conference.ContactEmail}
        </a>
      </li>
      <li>
        <strong>Sponsorship Enquiries:</strong>{' '}
        <a className="maillink" href={'mailto:' + props.pageMetadata.conference.SponsorshipEmail}>
          {props.pageMetadata.conference.SponsorshipEmail}
        </a>
      </li>
      {props.pageMetadata.conference.Socials.Twitter.Name && (
        <li>
          <strong>Twitter:</strong>{' '}
          <SafeLink href={'https://twitter.com/' + props.pageMetadata.conference.Socials.Twitter.Name} target="_blank">
            @{props.pageMetadata.conference.Socials.Twitter.Name}
          </SafeLink>
        </li>
      )}
      <li>
        <strong>Emergency contact:</strong>{' '}
        {props.pageMetadata.conference.EmergencyContactName +
          ' on ' +
          props.pageMetadata.conference.EmergencyContactPhoneNumber}
      </li>
    </ul>
    <h2>DDD Adelaide Inc</h2>
    <ul>
      <li>
        {/* ABN is wrapped in spans so it doesn't accidentally get rendered as a phone number - https://stackoverflow.com/questions/226131/how-to-disable-phone-number-linking-in-mobile-safari */}
        <strong><abbr title="Australian Business Number">ABN:</abbr></strong> <span>77</span> <span>632</span> <span>720</span> <span>298</span>
      </li>
      <li>
        <strong>Postal Address:</strong> <address>PO Box 3131 Rundle Mall SA 5000</address>
      </li>
    </ul>
  </Page>
))
