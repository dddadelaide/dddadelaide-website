import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Page from '../layouts/withSidebar'

class CFPPage extends React.Component<WithPageMetadataProps> {
  static getInitialProps({ res }) {
    const dates = getConferenceDates(Conference, dateTimeProvider.now())
    if (!dates.AcceptingPresentations) {
      if (res) {
        res.writeHead(302, {
          Location: '/',
        })
        res.end()
        res.finished = true
      } else {
        Router.replace('/')
      }
    }
    return {}
  }
  render() {
    const dates = this.props.pageMetadata.dates
    const conference = this.props.pageMetadata.conference
    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Call For Presentations (CFP)"
        hideBanner={true}
        description={conference.Name + ' Call For Presentations (CFP) page.'}
      >
        <h1>Call For Presentations (CFP)</h1>

        <p>
          We welcome sessions from any software related topic and from anyone in the software industry (you don't have
          to be a developer!).
        </p>

        <p className="text-center">
          <SafeLink className="btn content" target="_blank" href={conference.SessionizeUrl}>
            Submit a session via Sessionize
          </SafeLink>
        </p>

        <p>We want to encourage people that wouldn't normally speak at conferences to give it a go! We do this by:</p>
        <ul>
          <li>
            Having an enforced{' '}
            <Link href="/code-of-conduct">
              <a>code of conduct</a>
            </Link>{' '}
            to create a friendly, welcoming atmosphere.
          </li>
          <li>
            Having <strong>anonymous session voting</strong>; we will only show the title, abstract and tags of a talk
            to voters to remove unconscious bias.
          </li>
          <li>
            Accepting a <strong>broad range of technical and non-technical topics</strong> related to the software
            industry; if voters think your talk is interesting, it's in!{' '}
            <strong>You don't have to be a developer to submit a talk (or attend)</strong>; we welcome everyone in the
            software industry.
          </li>
          <li>
            Encouraging submissions from <strong>multiple presenters as well as solo presenters.</strong>
          </li>
          <li>
            Allowing speakers to opt out of question &amp; answer time at the end of their presentation if they don't
            feel comfortable doing it.
          </li>
        </ul>

        <p>
          This year we are using Sessionize to track submissions - this provides a great experience for speakers since
          you can resubmit talks submitted to other conferences that use Sessionize (e.g. NDC Sydney and the other DDD
          conferences in Australia) and you can update your profile and session information at any time.
        </p>

        <p>Other things to note for presenters:</p>
        <ul>
          <li>
            Speakers get free entry into the event; however flights and accommodation for speakers are not covered
            (outside of keynote speakers).
          </li>
          <li>You will likely be speaking to an audience of between 50-100 people.</li>
          <li>
            Your talking slot will be for 45 minutes. You will need to ensure you have at least 35 minutes of content,
            with 5-10 minutes optionally left for questions at the end.
          </li>
          <li>
            We are not interested in sales/vendor pitch presentations although you are welcome to have a slide or two
            about yourself and your company.
          </li>
          <li>You will probably have internet access, but you should have a backup plan in case it's unavailable.</li>
          <li>
            We will open voting at{' '}
            {conference.VotingOpenFrom.format(dates.DateDisplayFormat + ' ' + dates.TimeDisplayFormat)}; if your
            presentation gets voted in and you agree to present then this is a serious commitment.
          </li>
          <li>
            Questions?{' '}
            <a className="maillink" href={'mailto:' + conference.ContactEmail}>
              Fire off an email
            </a>{' '}
            and we'll get right back to you :)
          </li>
        </ul>

        <p className="text-center">
          <SafeLink className="btn content" target="_blank" href={conference.SessionizeUrl}>
            Submit a session via Sessionize
          </SafeLink>
        </p>

        <h2>Already submitted, but want to edit?</h2>

        <p className="text-center">
          <SafeLink className="btn btn-secondary" target="_blank" href={conference.SessionizeEditUrl}>
            Edit your session(s) via Sessionize
          </SafeLink>
        </p>
      </Page>
    )
  }
}

export default withPageMetadata(CFPPage)
