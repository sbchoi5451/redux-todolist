import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, doneTodo, cancelTodo } from '../redux/modules/todoReducer'
import { Link } from 'react-router-dom'
import styled from "styled-components"

function TodoForm() {

    const dispatch = useDispatch()

    const { todos } = useSelector((state) => state.todoList)
    const doneTodos = todos.filter((todo) => todo.isDone === true)
    const undoneTodos = todos.filter((todo) => todo.isDone === false)

    return (
        <div>
            <Liststyle>
                <h2>Working..🔥</h2>
                <ContentStyle>
                    {undoneTodos.map((todo) => (
                        <Boxstyle key={todo.id}>
                            <Linkstyle to={`/Detail/${todo.id}`}>상세보기</Linkstyle>
                            <TitleText>{todo.title}</TitleText>
                            <ContentText>{todo.body}</ContentText>
                            <ButtonStyle3>
                                <ButtonStyle onClick={() => dispatch(deleteTodo(todo.id))}>삭제하기</ButtonStyle>
                                <ButtonStyle2 onClick={() => {dispatch(doneTodo(todo.id))}}>완료</ButtonStyle2>
                            </ButtonStyle3>
                        </Boxstyle>
                    ))}
                </ContentStyle>
            </Liststyle>

            <Liststyle>
                <h2>Done..!🎉</h2>
                <ContentStyle>
                    {doneTodos.map((todo) => (
                        <Boxstyle key={todo.id}>
                            <Linkstyle to={`/Detail/${todo.id}`}>상세보기</Linkstyle>
                            <TitleText>{todo.title}</TitleText>
                            <ContentText>{todo.body}</ContentText>
                            <ButtonStyle3>
                                <ButtonStyle onClick={() => dispatch(deleteTodo(todo.id))}>삭제하기</ButtonStyle>
                                <ButtonStyle2 onClick={() => dispatch(cancelTodo(todo.id))}>취소</ButtonStyle2>
                            </ButtonStyle3>
                        </Boxstyle>
                    ))}
                </ContentStyle>
            </Liststyle>

        </div>
    )
}

export default TodoForm

const Liststyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;`

const ContentStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;`

const Boxstyle = styled.div`
    width: 300px;
    height: 200px;
    border: 4px solid #424242;
    border-radius: 10px;
    flex-direction: column;
    overflow: auto;
    display: flex;
    padding: 10px 10px 10px 10px;
    margin: 0 0 20px 20px;
`

const TitleText = styled.div`
    font-size: 20px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;`

const ContentText = styled.div`
    font-size: 15px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;`

const ButtonStyle = styled.button`
border: 2px solid #616161;
width: 90px;
height: 40px;
border-radius: 10px;
margin-right: 10px;
margin-left: 50px;
background-color: transparent;
padding: 8px;
justify-content: center;
text-align: center;
display: flex;
font-size: 15px;
&:hover {
        background-color: #212121;
        cursor: pointer;
        border: 2px solid transparent;
        color: white;
    }
    `

const ButtonStyle2 = styled.button`
border: 2px solid #616161;
width: 85px;
height: 40px;
border-radius: 10px;
background-color: transparent;
padding: 8px;
justify-content: center;
text-align: center;
display: flex;
font-size: 15px;
&:hover {
        background-color: #212121;
        cursor: pointer;
        border: 2px solid transparent;
        color: white;
    }
    `


const ButtonStyle3 = styled.div`
   text-align: center;
    display: flex;
    margin-top: 50px;`

const Linkstyle = styled(Link)`
    text-decoration: none;
    color: #616161;
    font-size: 13px;
    
    &:hover {
        color: black;
    }
    `