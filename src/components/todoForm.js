import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, doneTodo, cancelTodo } from '../redux/modules/todoReducer'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import confetti from "https://esm.run/canvas-confetti@1";

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
                            <Link to={`/Detail/${todo.id}`}>상세보기</Link>
                            <TitleText>{todo.title}</TitleText>
                            <ContentText>{todo.body}</ContentText>
                            <ButtonStyle3>
                                <ButtonStyle onClick={() => dispatch(deleteTodo(todo.id))}>삭제하기</ButtonStyle>
                                <ButtonStyle2 onClick={() => {
                                    dispatch(doneTodo(todo.id))
                                    confetti({
                                        particleCount: 120,
                                        spread: 200,
                                        });
                                }}>완료</ButtonStyle2>
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
                        <Link to={`/Detail/${todo.id}`}>상세보기</Link>
                        <TitleText>{todo.title}</TitleText>
                        <ContentText>{todo.body}</ContentText>
                        <ButtonStyle3>
                            <ButtonStyle onClick={() => dispatch(cancelTodo(todo.id))}>취소</ButtonStyle>
                            <ButtonStyle2 onClick={() => dispatch(deleteTodo(todo.id))}>삭제하기</ButtonStyle2>
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
    border: 4px solid rgba(14, 105, 88, 0.878);
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
    font-weight: bold;`

const ContentText = styled.div`
    font-size: 15px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;`

const ButtonStyle = styled.button`
  border: 3px solid rgb(230, 54, 54);
  border-radius: 10px;
  background-color: transparent;
  padding: 4px 4px 4px 4px;
  margin-right: 10px;
  justify-content: center;
  text-align: center;
  display: flex;
  font-weight: bold;
  font-size: 18px;`

const ButtonStyle2 = styled.button`
border: 3px solid blue;
border-radius: 10px;
background-color: transparent;
padding: 4px 4px 4px 4px;
margin-right: 10px;
justify-content: center;
text-align: center;
display: flex;
font-weight: bold;
font-size: 18px;`


const ButtonStyle3 = styled.div`
   text-align: center;
    display: flex;
    margin-top: 50px;`