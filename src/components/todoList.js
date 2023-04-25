import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { addTodo } from '../redux/modules/todoReducer'
import { addTitle } from '../redux/modules/titleReducer'
import { addBody } from '../redux/modules/bodyReducer'
import { v4 as uuid } from 'uuid'

function TodoList() {
  const dispatch = useDispatch()

  const { title } = useSelector((state) => state.todoTitle)
  const { body } = useSelector((state) => state.todoBody)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      id: uuid(),
      title: e.target.title.value,
      body: e.target.body.value,
      isDone: false
    }))
    e.target.reset()
    // dispatch(addTitle(''))
    // dispatch(addBody(''))
  }

  const titleHandler = (e) => {
    dispatch(addTitle(e.target.value))
  }

  const bodyHandler = (e) => {
    dispatch(addBody(e.target.value))
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <Inputcontainer>
        <Content>
          
          제목&nbsp;
          <Input
            type='text'
            name='title'
            value={title}
            onChange={titleHandler}
            required
          />
          
          
          내용&nbsp;
          <Input
            type='text'
            name='body'
            value={body}
            onChange={bodyHandler}
            required
          />
        </Content>

        <Button type='submit'>추가하기</Button>
      </Inputcontainer>
    </form>
  )
}

export default TodoList

const Inputcontainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ddd;
  font-size: 20px;
  font-weight: bold;`

const Content = styled.div`
  display: flex;
  `

const Button = styled.button`
border: 2px solid #616161;
width: 120px;
height: 35px;
border-radius: 10px;
margin-left: 480px;
background-color: transparent;
padding: 5px;
justify-content: center;
text-align: center;
display: flex;
font-size: 15px;
&:hover {
        background-color: #212121;
        cursor: pointer;
        border: 2px solid transparent;
        color: white;
    }`

const Input = styled.input`
  width: 200px;
  height: 22px;
  border-radius: 10px;
  border: 2px solid #616161;
  margin-left: 5px;
  margin-right: 20px;
  padding: 2px;
  &:focus {
    outline: none;
  }`