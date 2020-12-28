import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;

    input{
        border: 1px solid #C4C4C4;
        outline: 0;
        padding: 0.5rem;
        margin: 0.75rem 0;
    }
    button {
        width: fit-content;
        padding: 0.5rem 0.75rem;
        align-self: flex-end;
        border: none;
        outline: 0;
        background-color: ${({theme}) => theme.login};
        border-radius: 5px;
        cursor: pointer;
    }
`
const FormName = styled.div`
    display: flex;
    justify-content: space-between;
    
    input{
        width: 45%;
    }
`


const LoginForm = ({change}) => {
    

    return(
        <div>
            {change ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
            <Form>
            {change && <FormName>    
                <input placeholder="Name"></input>
                <input placeholder="Last name"></input>
            </FormName>}
                <input placeholder="User name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <button type="submit">{change ? 'Create Account' : 'Sign In'}</button>
            </Form>
        </div>
    )
}

export default LoginForm;