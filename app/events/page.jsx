import { getAllEvents } from "@dummy-data"
import "@styles/globals.css"
import EventsList from "@components/events/EventsList"

const AllEventsPage = () => {
  const events = getAllEvents()
  console.log(events)
  return ( 
    <>
      <div className="ad">
        <h2 className="promoted">Promoted Events</h2>
      </div>
        <EventsList items={events} />
      
    </>
  )
}

export default AllEventsPage
