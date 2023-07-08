import React from 'react'

import Container from './components/Container'
import CounterButtons from './components/Counter/CounterButtons'
import ShowCount from './components/Counter/showCount'
import Form from './components/Form/Form'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Container bg='#212121'>
        <ShowCount />
        <CounterButtons />
      </Container>

      <Container bg='#262424'>
        <Form />
      </Container>
    </>
  )
}

export default App