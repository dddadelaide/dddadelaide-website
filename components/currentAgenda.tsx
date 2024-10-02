import React, { Fragment } from 'react'
import Conference from 'config/conference'
import { Session, Sponsor } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { Agenda } from 'components/Agenda/Agenda'
import {
  StyledAgendaRow,
  StyledAgendaRowList,
  StyledFeedbackActions,
  StyledTrackHeader,
  StyledUpNext,
  StyledAgendaContainer,
} from 'components/Agenda/Agenda.styled'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { set } from 'date-fns'

interface CurrentAgendaProps {
  date: Date
  sessions?: Session[]
  sponsors: Sponsor[]
  acceptingFeedback: boolean
  feedbackLink?: string
  selectedSessionId?: string
}

export const CurrentAgenda = ({
  date,
  sessions = [],
  sponsors,
  acceptingFeedback,
  feedbackLink,
  selectedSessionId,
}: CurrentAgendaProps) => {
  return (
    <Fragment>
      <p>Select a session to see more details&hellip;</p>

      {acceptingFeedback && (
        <StyledFeedbackActions>
          <ActionButton
            action={{ Title: 'Conference Feedback', Url: Conference.ConferenceFeedbackLink, Category: 'conference' }}
          />
          <ActionButton
            action={{ Title: 'Session feedback', Url: Conference.SessionFeedbackLink, Category: 'conference' }}
          />
        </StyledFeedbackActions>
      )}
      <span></span>

      <Agenda
        conference={Conference}
        sessions={sessions}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        selectedSessionId={selectedSessionId}
        render={(agendaSessions, nextSessionGroup, onSelect) => {
          return (
            <AgendaProvider
              onSelect={onSelect}
              getSession={(id) => sessions.find((session) => session.ExternalId === id)}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={Conference.RoomNames}
              livestreams={Conference.Livestreams}
            >
              {Conference.ShowNextSessions && nextSessionGroup && nextSessionGroup.sessions.length > 0 && (
                <StyledUpNext>
                  <h2>Up next</h2>
                  <StyledAgendaRow>
                    <AgendaTime time={nextSessionGroup.timeStart} />
                    {nextSessionGroup.sessions.map((session, index) =>
                      Array.isArray(session) ? (
                        <Fragment key={index}>
                          {session.map((sess) => (
                            <AgendaSession
                              key={sess.Id}
                              sessionId={sess.ExternalId}
                              fullWidth={nextSessionGroup.sessions.length === 1}
                              room={index}
                              alwaysShowRoom={true}
                            />
                          ))}
                        </Fragment>
                      ) : (
                        <AgendaSession
                          key={session.Id}
                          sessionId={session.ExternalId}
                          fullWidth={nextSessionGroup.sessions.length === 1}
                          room={index}
                          alwaysShowRoom={true}
                        />
                      ),
                    )}
                  </StyledAgendaRow>
                </StyledUpNext>
              )}
              <StyledAgendaContainer>
                <StyledAgendaRowList>
                  <li>Time</li>
                  {Conference.RoomNames.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </StyledAgendaRowList>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 8, minutes: 0 })} />
                  <AgendaSession room={'Ingkarni Wardii Atrium'} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Registration</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 8, minutes: 45 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Welcome and Housekeeping</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 0 })} />
                  <AgendaSession room={'Braggs Theatre'} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Keynote: TBA</StyledTrackHeader>
                  </AgendaSession>
                  {/*<AgendaSession*/}
                  {/*  sessionId="530801"*/}
                  {/*  room={'Riverview'}*/}
                  {/*  renderPresenters={(presenters) => (*/}
                  {/*    <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>*/}
                  {/*  )}*/}
                  {/*  fullWidth*/}
                  {/*  isKeynote*/}
                  {/*  alwaysShowRoom*/}
                  {/*/>*/}
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 45 })} />
                  <AgendaSession room={'Ingkarni Wardii Atrium'} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 55 })} />
                  <AgendaSession room={0} sessionId="746103" />
                  <AgendaSession room={1} sessionId="744630" />
                  <AgendaSession room={2} sessionId="736610" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 10, minutes: 40 })} />
                  <AgendaSession room={'Ingkarni Wardii Atrium'} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Morning Tea</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 11, minutes: 10 })} />
                  <AgendaSession room={0} sessionId="730661" />
                  <AgendaSession room={1} sessionId="746362" />
                  <AgendaSession room={2} sessionId="746375" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 11, minutes: 55 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 5 })} />
                  <AgendaSession room={0} sessionId="736583" />
                  <AgendaSession room={1} sessionId="746959" />
                  <AgendaSession room={2} sessionId="735580" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 50 })} />
                  <AgendaSession room={'Ingkarni Wardii Atrium'} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Lunch</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 13, minutes: 40 })} />
                  <AgendaSession room={0} sessionId="746546" />
                  <AgendaSession room={1} sessionId="745104" />
                  <AgendaSession room={2} sessionId="747025" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 14, minutes: 25 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 14, minutes: 35 })} />
                  <AgendaSession room={0} sessionId="730865" />
                  <AgendaSession room={1} sessionId="740797" />
                  <AgendaSession room={2} sessionId="747101" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 20 })} />
                  <AgendaSession room={'Ingkarni Wardii Atrium'} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Afternoon Tea</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 50 })} />
                  <AgendaSession room={0} sessionId="735098" />
                  <AgendaSession room={1} sessionId="746505" />
                  <AgendaSession room={2} sessionId="734227" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 16, minutes: 35 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 16, minutes: 45 })} />
                  <AgendaSession room={'Braggs Theatre'} alwaysShowRoom  fullWidth>
                    <StyledTrackHeader>Prize Draw, Thank Yous, and Wrap Up</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
              </StyledAgendaContainer>
            </AgendaProvider>
          )
        }}
      />
    </Fragment>
  )
}

CurrentAgenda.displayName = 'CurrentAgenda'
