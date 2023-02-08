import React, { useState } from 'react'
import styles from './Sidenav.module.css'

export default function Sidenav(props) {
    const [activeEl, setActiveEl] = useState("INBOX")
    const handleClick = (page) => {
        setActiveEl(page)
        props.change(page)
    }
    return (
        <ul>
            {/* TODO: Work on Active Class */}
            <li onClick={() => handleClick("INBOX")} className={activeEl == "INBOX" ? styles.active : ""}>
                <div>Inbox</div>
            </li>
            <li onClick={() => handleClick("TODAY")} className={activeEl == "TODAY" ? styles.active : ""}>
                <div>Today</div>
            </li>
            <li onClick={() => handleClick("NEXT")} className={activeEl == "NEXT" ? styles.active : ""}>
                <div >Next 7 Days</div>
            </li>
        </ul>
    )
}
