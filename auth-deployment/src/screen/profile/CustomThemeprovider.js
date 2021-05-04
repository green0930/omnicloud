import React, {useState, createContext} from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import getTheme from './baseTheme'

export const CustomThemeContext = createContext({
    currentTheme: 'normalTheme',
    setTheme: null,
}
)

export const CustomThemeProvider = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children} = props
    const currentTheme = localStorage.getItem('appTheme') || 'normalTheme'
    const [theme, setThemes] = useState(currentTheme)
    const themes = getTheme(theme)
    const setThemeName = (name) => {
        localStorage.setItem('appTheme', name)
        setThemes(name)
    }

    const contextValue = {
        currentTheme: theme,
        setTheme: setThemeName
    }

    return (
        <CustomThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={themes}>
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    )
}
