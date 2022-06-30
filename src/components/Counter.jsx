import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'
import '../App.css'

const Counter = observer(() => {

    const {counter} = useContext(Context)
    const addCounter = () => {
        counter.isBreak ? counter.setBreak(counter.break + 1)
        : counter.setCounter(counter._counter + 1)
    }
    const subtractCounter =() => {
        if(counter.isBreak){
            if(counter.break > 0) counter.setBreak(counter.break - 1)
        }
        else{
            if(counter.counter > 0) counter.setCounter(counter.counter - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Button' onClick={addCounter}>+</div>
            <div className='Button timer'>
                {counter.isBreak ? counter.break : counter.counter}
            </div>
            <div className='Button' onClick={subtractCounter}>-</div>
        </div>
    )
})

export default Counter