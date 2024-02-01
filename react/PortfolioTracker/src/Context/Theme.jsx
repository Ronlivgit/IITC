import React , {createContext, useState, useContext} from "react";

export const ThemeContext = createContext({})

function ThemeProvider ({children}){

    const [isDarkMode,setisDarkMode] = useState(false)
    
    const darkModeColors = {
        background:"black",
        color:"white"
    }
    
    const lightModeColors = {
        background:"white",
        color:"black"
    }
    const [selectedTheme,setSelectedTheme] = useState(lightModeColors)

    const toggleTheme = ()=>{
        if (isDarkMode){
            setSelectedTheme(lightModeColors)
        }
        else{
            setSelectedTheme(darkModeColors)
        }
        setisDarkMode(!isDarkMode)
    }


    return(
        <ThemeContext.Provider value={ {toggleTheme, isDarkMode, selectedTheme} }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider