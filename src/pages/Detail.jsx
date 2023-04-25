import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from "styled-components"

function Detail() {
  const { todos } = useSelector((state) => state.todoList)
  const params = useParams()

  const foundData = todos.find((item) => {
    return item.id === params.id
  })

  return (
    <Container>
      <Linkstyle to="/">이전으로</Linkstyle>
      <Id>ID: {foundData.id}</Id>
      <Title>{foundData.title}</Title>
      <p>{foundData.body}</p>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 600px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 250px auto;
    vertical-align: top;
`

const Id = styled.div`
  text-align: left;
  margin: 20px auto 20px 20px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Linkstyle = styled(Link)`
    text-decoration: none;
    color: #616161;
    font-size: 15px;
    margin: 20px 20px 20px auto;
    vertical-align: top;
    ;

    &:hover {
        color: black;
    }
    `

const Title = styled.h2`
  margin-bottom: 0;
`
