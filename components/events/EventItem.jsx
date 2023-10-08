import React from "react"
import Button from "../ui/Button"
import DateIcon from "@components/icons/date-icon"
import AddressIcon from "@components/icons/address-icon"
import classes from "@styles/EventItem.module.css"

const EventItem = (props) => {
    const {title, image, date, location, id } = props
    const readableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    //For giving new line in address
    const formattedAddress = location.split(", ").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
    const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
        <img src={"/"+image} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
            </div>
            <div className={classes.date}>
                <DateIcon />
                <time>{readableDate}</time>
            </div>
            <div className={classes.address}>
                <AddressIcon />
                <addres>{formattedAddress}</addres>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink} name="Explore Event" />
            </div>
        </div>
    </li>
  )
}

export default EventItem
