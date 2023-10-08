import Link from "next/link"
import ArrowRightIcon from "@components/icons/arrow-right-icon"
import classes from "@styles/button.module.css"

const Button = ({ link, name }) => {
  return (
    <Link href={link} className={classes.btn}>
      <span>{name}</span>
      <span className={classes.icon}><ArrowRightIcon /></span>
    </Link>
  )
}

export default Button
