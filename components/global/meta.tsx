import React from 'react'
import Head from 'next/head'
import * as analytics from 'components/global/analytics'
import { useRouter } from 'next/router'
import { useConfig } from 'Context/Config'
import getConferenceDates from 'config/dates'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import { formatInTimeZone } from 'date-fns-tz'
import Conference from 'config/conference'

interface MetaArgs {
  pageTitle: string
  pageDescription?: string
  pageImage?: string
}

declare global {
  interface Window {
    GA_INITIALIZED: boolean
  }
}

const getTitle = (title: string, date: Date, name: string, showDate: boolean, timezone: string) =>
  `${title !== 'Home' ? title + ' - ' : ''}${name}${
    showDate ? ` | ${formatInTimeZone(date, timezone, 'do MMMM yyyy')}` : ''
  }`

// https://developers.google.com/search/docs/appearance/structured-data/event
const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'Event',
  name: Conference.Name + ' ' + Conference.Instance,
  startDate: formatInTimeZone(Conference.Date, Conference.TimeZone, 'yyyy-MM-dd'),
  location: {
    '@type': 'Place',
    name: 'University of Adelaide',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'North Terrace Campus',
      postalCode: '5000',
      addressLocality: 'Adelaide',
    },
  },
  description:
    'DDD Adelaide is Adelaide&#39;s largest community run conference for the tech community. Our goal is to create an approachable event that appeals to the whole community, especially people that don&#39;t normally get to attend or speak at conferences. The conference is run on a Saturday, and strives to be inclusive of everyone in the Adelaide tech community',
  image: `${Conference.Organiser.Url}/static/images/adelaide/logo-square-withtext-2025.png`,
  offers: {
    '@type': 'Offer',
    price: 60,
    priceCurrency: 'AUD',
    validFrom: formatInTimeZone(
      Conference.ImportantDates.filter((d) => d.Type === 'tickets')[0].Date,
      Conference.TimeZone,
      'yyyy-MM-dd',
    ),
    url: `${Conference.Organiser.Url}/tickets`,
  },
  organizer: {
    '@type': 'Organization',
    name: Conference.Organiser.Name,
    url: Conference.Organiser.Url,
  },
}

export const Meta = ({ pageTitle, pageDescription, pageImage }: MetaArgs) => {
  const { conference, appConfig, dates } = useConfig()
  const { pathname } = useRouter()
  const conferenceDates = getConferenceDates(conference, dateTimeProvider.now())
  const ogImage =
    pageImage || conference.Instance !== '2025' || conferenceDates.IsComplete
      ? '/static/images/adelaide/logo.png' // generic image
      : '/static/images/adelaide/logo-square-withtext-2025.png' // date-branded image

  const title = React.useMemo(
    () =>
      getTitle(
        pageTitle,
        conference.Date,
        conference.Name,
        !conference.HideDate && !dates.IsComplete,
        conference.TimeZone,
      ),
    [pageTitle, dates.IsComplete, conference.HideDate, conference.Name, conference.Date, conference.TimeZone],
  )

  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      analytics.init(conference.GoogleAnalyticsId)
      window.GA_INITIALIZED = true
    }
    analytics.logPageView()
  }, [conference.GoogleAnalyticsId])

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content={conference.Name} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title.substring(0, 70)} />
      <meta name="description" content={pageDescription || conference.SiteDescription} />
      <meta property="og:description" content={pageDescription || conference.SiteDescription} />
      <meta name="twitter:description" content={(pageDescription || conference.SiteDescription).substring(0, 200)} />
      <meta name="author" content={conference.Organiser.Name} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={conference.Name} />
      <meta name="twitter:creator" content={conference.Organiser.Name} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={conference.Name} />
      <link rel="canonical" href={`${appConfig.baseUrl}${pathname}`} />
      <meta property="og:url" content={`${appConfig.baseUrl}${pathname}`} />
      <link rel="preconnect" href="https://www.google-analytics.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link rel="preconnect" href="https://az416426.vo.msecnd.net"></link>
      {/* JSON-LD markup generated by Google Structured Data Markup Helper. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  )
}
