import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Button = styled.button`
    background: ${({ theme }) => theme.todo};
    border: none;
    outline: 0;
    cursor: pointer;
    color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 2rem 2rem 0 0;
    font-size: 2rem;
`

const MakeTodo = ({show}) => {
    return(
        <Wrapper>
            <Button onClick={show}>+</Button>
        </Wrapper>
    )
}

export default MakeTodo;