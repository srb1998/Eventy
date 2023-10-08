import { getFeaturedEvents } from '@dummy-data'
import EventsList from '@components/events/EventsList';


const Home = () => {
  const featuredEvents = getFeaturedEvents();
  
  return (
    <div>
      <EventsList items={featuredEvents} />
    </div>
  )
}

export default Home
