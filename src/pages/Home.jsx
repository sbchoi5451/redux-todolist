import React from 'react'
import TodoList from '../components/todoList'
import TodoForm from '../components/todoForm'
import styled from "styled-components"

function Home() {
  return (
    <Layout>
      <Header>
      <div>My Todo List</div>
      <div>React</div>
      </Header>
      <div><TodoList /></div>
      <div><TodoForm /></div>
    </Layout>
  )
}

export default Home

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  border: 1px solid #ddd;
`