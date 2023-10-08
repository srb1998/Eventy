import '@styles/globals.css';
import Nav from '@components/nav/Nav';

export const metadata = {
    title:"Eventy",
    description:"Watch real-time events"
}

const Layout = ({children}) => {
    return (
        <html lang='en' className='body'>
            <Nav />
            {children}
        </html>
    )
}

export default Layout