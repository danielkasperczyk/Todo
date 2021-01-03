import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ModalOuter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.5);
    pointer-events: ${({show}) => show ? 'auto' : 'none'};
    opacity: ${({show}) => show ? '1' : '0'};
    transition: opacity 250ms ease;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalInner = styled.div`
    position: absolute;
    width: 500px;
    padding: 1rem;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    form, label{
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
    }
    form {
        margin: 0.5rem auto 0;
        width: 90%;
    }
    textarea{
        margin: 1rem 0;
        outline: 0;
        padding: 0.25rem;
        position: relative;
    }
    button {
        width: fit-content;
        padding: 0.25rem 0.5rem;
     
    }
`
const Button = styled.button`
    width: fit-content;
    font-size: 1rem;
    bottom: 1rem;
    border: ${( {theme, formSubmit }) => formSubmit ? 'none' :`1px solid ${theme.secondary}`};
    color: ${({ theme, formSubmit }) => formSubmit ? '#fff' : theme.secondary};
    background-color: ${({ theme, formSubmit}) => formSubmit ? theme.todo : 'transparent'};
    outline: 0;
    margin-bottom: 1rem;
    align-self: ${({formSubmit}) => formSubmit ? 'flex-start' : 'flex-end'};
    cursor: pointer;
    border-radius: 5px;
`
const CalendarStyle = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
`

const Modal = (props) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState(new Date());
    const [showCalendar, setShow] = useState(false);
    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(day, text)
    }
    const pickDate = () => {
        const today = new Date().toLocaleDateString();
        const newDay = day.toLocaleDateString();
        console.log(today, newDay)
        if(today === newDay){
            return 'Today';
        }
        else{
            return `${newDay}`;
        }
    }
    const closeModal = e =>{
        if(e.target === e.currentTarget){
            props.show()
        }
    }
    return(
        <ModalOuter show={props.modal} onClick={closeModal}>
            <ModalInner >
                <form onSubmit={handleSubmit}>
                    <label>
                        Adding Task
                        <textarea
                            placeholder="Go for a walk with my lovely dog :)"
                            value={text}
                            onChange={handleChange}
                            name="task"
                            rows={5}/>
                            <Button 
                                onClick={e => setShow(!showCalendar)}>
                                    {pickDate()}
                            </Button>
                            {showCalendar && <CalendarStyle>
                                <Calendar
                                    defaultValue={new Date()}
                                    value={day}
                                    onChange={setDay}/>
                            </CalendarStyle>}
                    </label>
                    <Button type="submit" formSubmit>Add Task</Button>
                </form>
            </ModalInner>                
        </ModalOuter>
    )
}

export default Modal;