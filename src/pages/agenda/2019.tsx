import React from 'react'
import content from '../../../static/agenda/2019.json'
import withPageMetadata, { WithPageMetadataProps } from '../../components/global/withPageMetadata'
import { Session } from '../../config/types'
import Page from '../../layouts/main'
import TwentyNineteenAgenda from './2019Agenda'

interface AgendaPageProps extends WithPageMetadataProps {
  sessions?: Session[]
}

class AgendaPage extends React.Component<AgendaPageProps> {
  static async getInitialProps() {
    return { sessions: content as Session[] }
  }

  render() {
    const conference = this.props.pageMetadata.conference

    // TODO: This is all hacked up and static. At some point we should connect it back up to Sessionize directly, not sure why it wasn't.

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title='2019 Agenda'
        hideBanner={true}
        description={conference.Name + '2019 agenda.'}
      >
        <div className='container'>
          <h1>2019 Agenda</h1>
          <TwentyNineteenAgenda
            sessions={this.props.sessions}
            previousConferenceInstances={this.props.pageMetadata.conference.PreviousInstances}
            sessionsUrl={this.props.pageMetadata.appConfig.getAgendaUrl}
            sponsors={this.props.pageMetadata.conference.Sponsors}
          />
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(AgendaPage)
