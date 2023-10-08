import Link from "next/link"
import classes from "@components/nav/nav.module.css"

const Nav = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href="/">Eventy</Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href="/events">Browse All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav
