import { useContext, useEffect } from "react"
import { observer } from 'mobx-react-lite'
import { Context } from ".."
import ring from '../assets/ring.mp3'

const Display = observer(() => {
    const {counter} = useContext(Context)
    const audio = new Audio(ring)

    const tick = () => {
        if(counter.isResume){  
            if(counter.seconds === 0 && counter.minutes === 0) {
                counter.setIsResume(false)
                counter.setIsBreak(!counter.isBreak)
                audio.play()
            }
            if(counter.seconds === 0) {
                counter.setMinutes(counter.minutes - 1)
                counter.setSeconds(59)
            }
            else counter.setSeconds(counter.seconds - 1)
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(),1000)
        return () => clearInterval(timerId)
    })

    useEffect(() => {
        if(counter.isBreak) {
            if(counter.session % 4 === 0) counter.setMinutes(counter.longBreak)
            else counter.setMinutes(counter.break) 
        }
        else{
            counter.setMinutes(counter.counter)
            counter.setSession(counter.session + 1)
        }
        counter.setSeconds(0)
        counter.setIsResume(false)
    },[counter.isBreak])

    useEffect(() => {
        if(!counter.isResume) counter.setMinutes(counter.counter)
    },[counter.counter])

    return (
        <div className='Display'>
            <p>{counter._minutes < 10 ? "0" + counter.minutes : counter.minutes}:
            {counter.seconds < 10 ? "0" + counter.seconds : counter.seconds}</p>
            <p style={{fontSize:'18px'}}>Session #{counter.session}</p>
        </div>
    )
})

export default Display