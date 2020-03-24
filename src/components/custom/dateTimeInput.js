import React, { Component } from 'react';
import DatePicker from "react-date-picker";
import { addDays, format } from "date-fns"
import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';

// STYLING
import '../../style/components/custom/imageMultiSelect.scss';
import '../../style/components/custom/dateTimeInput.scss';
import Calendar from "../../resources/images/inputIcons/calendar.png";




class DateTimeInput extends Component {

    constructor(props){
        super(props);

        this.state = { selectedDate: null, availableTimes: [], selectedTime: null, repEmail: null }
    }

    render() {

        let dateString = 'Please select a date to see available times';
        if(this.state.selectedDate) {
            dateString = 'No times are available for the selected date'
        }

        return (
            <div className="date-input-container">
                <div className="image-multi-select-info">
                    <img src={Calendar} alt="Multi Select"/>
                    <p> Select a date and available time </p>
                </div>
                <div>
                    <DatePicker className="schedule-date-picker" calendarType='US' minDate={addDays(new Date(), 1)} maxDate={addDays(new Date(), 30)} onChange={this.dateChanged} value={this.state.selectedDate} />
                    <p style={ this.state.selectedDate ? { display: 'none'} : { display: 'block'}} className='schedule-date-help-text'> { dateString } </p>
                    <div style={ this.state.availableTimes.length === 0 ? { display: 'none'} : { display: 'block'}} className="schedule-time-container">
                        { this.state.availableTimes.map( time => (
                            <p key={time.date} id={time.date} onClick={this.timeClicked} className={this.state.selectedTime === time.date ? 'sel-time' : ''}>
                                {moment(time.date).format('hh:mm a')}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

        );

    }

    timeClicked = e => {

        let availableRep = null;
        let times = _.filter(this.state.availableTimes, item => {
            return item.date === e.target.id
        });
        if(times.length > 0 ) {
            availableRep = times[0].repEmail
        }

        this.setState({ selectedTime: e.target.id, repEmail: availableRep });
    };

    dateChanged = date => {
        this.loadAvailableTimes( date )
    };

    loadAvailableTimes( date) {


        const formattedDate = format(date, 'MM/dd/yyyy');

        const self = this;
        axios.get(`https://api.theroofdocs.com/v1/web/appointments`, {
            params: {
                date: formattedDate
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (response) {
            console.log(response);

            self.setState( { availableTimes: response.data.data, selectedDate: date, selectedTime: null });
        }).catch(function (error) {
            const message = error.message ? error.message : 'Error getting available appointments, please try again';
            console.log(message);
        });

    }


}

export default DateTimeInput;