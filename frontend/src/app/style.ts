import styled from "styled-components";

export const ContainerPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;

    padding: 2rem 0;

    background-color: #F3F4F6;
`

export const ContainerModal = styled.div`
    width: 50%;
    height: max-content;

    background-color: #FFFFFF;
`

export const TitleModal = styled.h1`
    width: 100%;

    padding: 1rem;

    font-size: 1.5rem;
    font-weight: 600;
    color: #FFFFFF;

    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: #9333ea;
`

export const ContainerAddNewTask = styled.div`
    padding: 1rem;
`

export const Form = styled.form`
    width: 100%;

    display: flex;
    gap: 2rem;
`

export const Input = styled.input`
  padding: 0.75rem 1rem;
  width: 85%;

  border: 1px solid #F3F4F6;
  border-radius: 8px;

  color: #374151;
  outline: 0;

  &:focus{
    border: 1px solid #9333ea;
  }
`;


export const Button = styled.button`
    padding: 0.5rem 1rem;
    width: 15%;

    color: #F3F4F6;
    font-size: 1rem;

    border: 2px solid transparent;
    border-radius: 8px;

    background-color: #9333ea;

    &:hover{
        border: 2px solid #9333ea;
        background-color: transparent;
        color: #9333ea;
        cursor: pointer;
    }
`

export const ContainerListTask = styled.div`
    display: flex;
    flex-direction: column;
`

export const Task = styled.div`
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    border-top: 1px solid #F3F4F6;

    position: relative;

    & > svg {
        color: #374151;

        position: absolute;
        right: 1rem;

        &:hover{
            transition: all 0s;
            color: #9333ea;

            cursor: pointer;
        }
    }
`

export const StatusTask = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${props => props.checked ? '#9333ea' : 'transparent'};
  border: 2px solid ${props => props.checked ? '#9333ea' : '#374151'};
  border-radius: 100%;
  cursor: pointer;
  
  &:after {
    content: '✓';
    display: ${props => props.checked ? 'block' : 'none'};
    color: white;
    font-size: 0.75rem;
  }
`;

export const TextTask = styled.span`
  color: #374151;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  opacity: ${props => props.checked ? 0.5 : 1};
`;