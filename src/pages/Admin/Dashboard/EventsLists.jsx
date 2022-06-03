import React from 'react'
import './EventsLists.css'

function EventsLists() {
  return (
    <div className='events-lists'>
        <div className='event-left-section'>
            <span className='text-1'>Network Afterwork Houston</span>
            <span className='text-2'>Created on 24 dec 2021</span>
        </div>
        <div className='event-mid-section'>
            <span className='text-1'></span>
            <span className='text-2'>5500 people Registered</span>
        </div>
        <div className='event-right-section'>
            <span className='text-1'>24 Dec 21 - 6 Jan 22</span>
            <span className='text-2'>Date Range</span>
        </div>
    </div>
  )
}

export default EventsLists