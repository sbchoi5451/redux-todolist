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
      <Id>ID: {foundData.id}</Id>
      <LinkWrapper>
      <Link to="/">이전으로</Link>
      </LinkWrapper>
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
    justify-content: center;
    margin: 250px auto;
`

const Id = styled.div`
  text-align: left;
  margin-left: 50px;
  margin-bottom: 0;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const LinkWrapper = styled.div`
  text-align: right;
  margin-right: 50px;
  width: 100%;
`

const Title = styled.h2`
  margin-bottom: 0;
`