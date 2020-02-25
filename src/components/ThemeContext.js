import React, { useState, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { Header, Transition } from '@components'
import GlobalStyle from '@styles/global.js'
import theme from '@styles/theme.js'

const ThemeContextWrapper = React.createContext()

export const useThemeWrapper = () => useContext(ThemeContextWrapper)

const ThemeContext = ({ children, location }) => {
  const [navMode, setNavMode] = useState('light')

  const toggleNavMode = () => {
    const mode = navMode === 'light' ? 'dark' : 'light'
    setNavMode(mode)
  }

  const updateNavMode = updatedMode => {
    setNavMode(updatedMode)
  }

  return (
    <ThemeContextWrapper.Provider
      value={{
        toggleNavMode,
        updateNavMode,
      }}
    >
      <ThemeProvider theme={{ ...theme, navMode }}>
        <>
          <GlobalStyle />
          <Header />
          <Transition location={location}>{children}</Transition>
        </>
      </ThemeProvider>
    </ThemeContextWrapper.Provider>
  )
}

export default ThemeContext
