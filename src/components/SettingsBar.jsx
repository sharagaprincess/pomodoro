import { observer } from "mobx-react-lite"
import settings from '../assets/settings.png'
import { Image } from 'react-bootstrap'
import { useState } from "react"
import Settings from "./modals/Settings"

const SettingsBar = observer(() => {
    const [show,setShow] = useState(false)
    return (
        <div className="Settings">
            <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D0%BF%D0%BE%D0%BC%D0%B8%D0%B4%D0%BE%D1%80%D0%B0"
            target="_blank">
                About Pomodoro
            </a>
            <Image src={settings} width={30} height={30} style={{cursor:'pointer'}} 
            onClick={() => setShow(true)}/>
            <Settings show={show} onHide={() => setShow(false)}/>
        </div>
    )
})

export default SettingsBar