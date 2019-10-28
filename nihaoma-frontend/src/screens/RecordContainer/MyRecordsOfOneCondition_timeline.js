import React, { Component } from 'react'
import PhoneframeForRecord from "../../components/PhoneframeForRecord"
import { connect } from 'react-redux'
// import * as React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";

class MyRecordsOfOneCondition extends Component {

  // selectedCondition = 
  render() {
    // Todo: find selected condtion, fitler my record to have the selected condition, 
    // add timeline to this.

    // const screenContent = filteredRecords.map(record => 
    const screenContent = (
      const filteredRecords = this.props.myRecordsInFull.filter(record => record.condition.id === this.props.selectedCondition.id)

      <Timeline>
        filteredRecords.map(record => 
        <TimelineEvent
              // <p key={record.id}>{record.date_of_visit}, {record.condition.condition_name}, {record.doctor.doctor_name} </p> )
          title={record.doctor.doctor_name}
          createdAt={record.date_of_visit}
          icon={<i className="material-icons md-18">textsms</i>}
        >
          I received the payment for $543. Should be shipping the item within a
          couple of hours.
        </TimelineEvent>


        <TimelineEvent
          title="You sent an email to John Doe"
          onClick={() => alert("clicked")}
          createdAt="2016-09-11 09:06 AM"
          icon={<i className="material-icons md-18">email</i>}
        >
          Like we talked, you said that you would share the shipment details? This
          is an urgent order and so I am losing patience. Can you expedite the
          process and pls do share the details asap. Consider this a gentle
          reminder if you are on track already!
        </TimelineEvent>
      </Timeline>
    );

     return <PhoneframeForRecord titleText = { "Records on condition" } screenContent={screenContent}/>
    }
  
}

// const mapStateToProps = state => { 
//   return { 
//     myRecordsInFull: state.record.myRecordsInFull,
//     selectedCondition: state.condition.selectedCondition 
//   } 
// }

// export default connect(mapStateToProps)(MyRecordsOfOneCondition)


export default MyRecordsOfOneCondition

// export default () => {
//   return (
//     <Timeline>
//       <TimelineEvent
//         title="John Doe sent a SMS"
//         createdAt="2016-09-12 10:06 PM"
//         icon={<i className="material-icons md-18">textsms</i>}
//       >
//         I received the payment for $543. Should be shipping the item within a
//         couple of hours.
//       </TimelineEvent>
//       <TimelineEvent
//         title="You sent an email to John Doe"
//         onClick={() => alert("clicked")}
//         createdAt="2016-09-11 09:06 AM"
//         icon={<i className="material-icons md-18">email</i>}
//       >
//         Like we talked, you said that you would share the shipment details? This
//         is an urgent order and so I am losing patience. Can you expedite the
//         process and pls do share the details asap. Consider this a gentle
//         reminder if you are on track already!
//       </TimelineEvent>
//     </Timeline>
//   );
// };