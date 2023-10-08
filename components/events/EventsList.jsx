import classes from "@styles/EventList.module.css"
import EventItem from "./EventItem"

const EventsList = ({items}) => {

  return (
    <ul className={classes.list}>
        {items.map((item)=> (
        <EventItem
            key = {item.id}
            id={item.id} 
            title={item.title} 
            date={item.date} 
            location={item.location}
            image ={item.image}
        /> 
        ))}
    </ul>
  ) 
}

export default EventsList
