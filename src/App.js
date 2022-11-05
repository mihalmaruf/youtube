import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { darkTheme, lightTheme } from './context/Theme'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Video from './pages/Video'
import Search from './pages/Search'

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/video/:id' element={<Video />} />
          <Route path='/searched/:search' element={<Search />} />
        </Routes>
      </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg}
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

export default App