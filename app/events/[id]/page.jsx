"use client"
import { Fragment } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import { getEventById } from "@dummy-data";
import EventSummary from "@components/event-detail/event-summary";
import EventLogistics from "@components/event-detail/event-logistics";
import EventContent from "@components/event-detail/event-content";

const EventPage = ({params:{id}}) => {

    console.log(id)
    const event = getEventById(id)
    if(!event) {
        return <p>No event found</p>
    }
    
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>

    </Fragment>
  )
}

export default EventPage
