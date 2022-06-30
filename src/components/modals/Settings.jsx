import { Button, Modal, Form } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react';
import { Context } from '../..';

const Settings = observer(({show,onHide}) => {
    const {counter} = useContext(Context)
    const [breakTime,setBreakTime] = useState(0)
    const [focusTime,setFocusTime] = useState(0)
    const [longBreakTime,setLongBreakTime] = useState(0)
    const Save = () => {
        if(focusTime) counter.setCounter(focusTime)
        if(breakTime) counter.setBreakTime(breakTime)
        onHide()
    }
  return (
    <Modal show={show} onHide={onHide} className='Modal'>
        <Modal.Title>Settings</Modal.Title>
        <div className='Modal'>
            <Form>
                    <p>Timer(minutes)</p>
                <div className='timer settings-item'>
                    <Form.Group className='mb-3'>
                        <Form.Label>Focus Time</Form.Label>
                        <Form.Control type='number' 
                        placeholder='25'
                        onChange={(e) => setFocusTime(e.target.value)}
                        style={{width:100}}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Break Time</Form.Label>
                        <Form.Control type='number'
                        placeholder='5'
                        onChange={(e) => setBreakTime(e.target.value)}
                        style={{width:100}}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Long Break Time</Form.Label>
                        <Form.Control type='number'
                        placeholder='15'
                        onChange={(e) => setLongBreakTime(e.target.value)}
                        style={{width:100}}
                        />
                    </Form.Group>
                </div>

                <div className='buttons'>
                    <Button onClick={Save} className='modal-button'>Save</Button>
                    <Button onClick={onHide} className='modal-button'>Cancel</Button>
                </div>
            </Form>
        </div>
    </Modal>
  );
})

export default Settings;