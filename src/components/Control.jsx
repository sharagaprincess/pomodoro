import { useContext } from "react"
import { Context } from ".."
import { observer } from 'mobx-react-lite'

const Control = observer(() => {
    const {counter} = useContext(Context)
    const toggleResume = () => {
        counter.setIsResume(!counter.isResume)
    }
    const restart = () => {
        counter.setIsResume(false)
        counter.setIsBreak(false)
        counter.setMinutes(counter.counter)
        counter.setSeconds(0)
    }

    const toggleBreak = () => {
        counter.setIsBreak(!counter.isBreak)
    }
    return (
        <div className='Counter'>
            <div className='Button Control' onClick={restart}>Restart</div>
            <div className='Button Control' onClick={toggleBreak}>{counter.isBreak ? "Break" : "Focus"}</div>
            <div className='Button Control' onClick={toggleResume}>{counter.isResume ? "Pause" : "Resume"}</div>
        </div>
    )
})

export default Control