import { useContext, useEffect } from "react"
import { observer } from 'mobx-react-lite'
import { Context } from ".."

const Display = observer(() => {
    const {counter} = useContext(Context)

    const tick = () => {
        if(counter.isResume){  
            if(counter.seconds === 0 && counter.minutes === 0) {
                counter.setIsResume(false)
                counter.setIsBreak(!counter.isBreak)
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
        counter.isBreak ? counter.setMinutes(counter.break) 
        :counter.setMinutes(counter.counter)
        counter.setSeconds(0)
    },[counter.isBreak])

    useEffect(() => {
        if(!counter.isResume) counter.setMinutes(counter.counter)
    },[counter.counter])

    return (
        <div className='Display'>
            <p>{counter._minutes < 10 ? "0" + counter.minutes : counter.minutes}:
            {counter.seconds < 10 ? "0" + counter.seconds : counter.seconds}</p>
        </div>
    )
})

export default Display