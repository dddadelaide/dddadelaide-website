import React, { Fragment, StatelessComponent } from 'react'
import Agenda, { AgendaProps } from './agenda'

const CurrentAgenda: StatelessComponent<AgendaProps> = ({ SessionCell }) => (
  <Fragment>
    <div style={{ overflow: 'auto' }}>
      <table className="agenda-row table">
        <thead>
          <tr>
            <th style={{ width: '4%' }} />
            <th style={{ width: '32%' }}>
              <strong className="room">Horace Lamb Lecture Theatre</strong>
            </th>
            <th style={{ width: '32%' }}>
              <strong className="room">Barr Smith South 2032</strong>
            </th>
            <th style={{ width: '32%' }}>
              <strong className="room">Barr Smith South 2060</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="breadth-row">
            <td className="time">8:00</td>
            <td colSpan={3} className="breadth">
              Registration
              <br />
              <em>University of Adelaide</em>
              <br />
              259 North Terrace, Adelaide
              <br />
              <small className="room">Ingkarni Wardii Atrium</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">8:45</td>
            <td colSpan={3} className="breadth">
              Welcome and housekeeping
              <br />
              <small className="room">Horace Lamb Lecture Theatre</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">9:00</td>
            <SessionCell
              isKeynote={true}
              sessionId="ac97fc33-c609-42d1-8f49-ccdd2709cc07"
              room="Horace Lamb Lecture Theatre"
            />
          </tr>

          <tr className="breadth-row">
            <td className="time">9:45</td>
            <td colSpan={3} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">9:55</td>
            <SessionCell sessionId="1488a444-27cc-4391-980c-5c346df1c041" />
            <SessionCell sessionId="35c9aa76-2734-4492-89d6-2c04df8ef5d4" />
            <SessionCell sessionId="cfd2052b-16a4-4742-83ba-faeb325925f8" />
          </tr>

          <tr className="breadth-row">
            <td className="time">10:40</td>
            <td colSpan={3} className="breadth">
              Morning tea
              <br />
              <small className="room">Ingkarni Wardii Atrium</small>
            </td>
          </tr>

          <tr>
            <td className="time">11:10</td>
            <SessionCell sessionId="1ba234a9-553e-485b-8b6d-66abaec063e9" />
            <SessionCell sessionId="177a8bf4-955b-44b8-be5a-0e1c31d1cb2c" />
            <SessionCell sessionId="7848dfdc-6389-4535-a763-03a82d199964" />
          </tr>

          <tr className="breadth-row">
            <td className="time">11:55</td>
            <td colSpan={3} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">12:05</td>
            <SessionCell sessionId="f66e64f8-f731-45dd-8b3e-2844888eb9da" />
            <SessionCell sessionId="42a0d186-0e2f-443c-92f2-dd7ff0d677e9" />
            <SessionCell sessionId="19c02d9c-493a-4d75-b8a7-99c9115391bd" />
          </tr>

          <tr className="breadth-row">
            <td className="time">12:50</td>
            <td colSpan={3} className="breadth">
              Lunch
              <br />
              <small className="room">Ingkarni Wardii Atrium</small>
            </td>
          </tr>

          <tr>
            <td className="time">13:40</td>
            <SessionCell sessionId="5c24d137-ae0f-44ab-a955-4570bb6e815f" />
            <SessionCell sessionId="1dba78ad-5e27-43a9-a709-6b0735eb4a78" />
            <SessionCell sessionId="77ac6e36-be53-4b9a-80bf-07cd2ea8a645" />
          </tr>

          <tr className="breadth-row">
            <td className="time">14:25</td>
            <td colSpan={3} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">14:35</td>
            <SessionCell sessionId="16e8e87c-199c-430a-b5a6-b5a5997f79cf" />
            <SessionCell sessionId="781dd4d7-46f8-4e14-a4d4-5591aa0aefac" />
            <SessionCell sessionId="9dbd8adb-e2e7-4946-8046-4e4b3fadef80" />
          </tr>

          <tr className="breadth-row">
            <td className="time">15:20</td>
            <td colSpan={3} className="breadth">
              Afternoon tea
              <br />
              <small className="room">Ingkarni Wardii Atrium</small>
            </td>
          </tr>

          <tr>
            <td className="time">13:50</td>
            <SessionCell sessionId="b864988e-252c-4afc-b846-3826d87d4112" />
            <SessionCell sessionId="b8f734bd-d625-43a3-aaa1-959e8bdea594" />
            <SessionCell sessionId="7cba8b73-494d-48ed-820e-c7201bb520d4" />
          </tr>

          <tr className="breadth-row">
            <td className="time">16:35</td>
            <td colSpan={3} className="breadth">
              Changeover
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">16:45</td>
            <td colSpan={3} className="breadth">
              <strong>Prize Draw, Thank Yous, and Wrap Up</strong>
              <br />
              <small className="room">Horace Lamb Lecture Theatre</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">17:30</td>
            <td colSpan={3} className="breadth">
              <strong>After Conference Social</strong>
              <br />
              <small className="room">Hotel Richmond</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
)

export default Agenda(CurrentAgenda, { numTracks: 3 })
