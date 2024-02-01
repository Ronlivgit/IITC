import React , {createContext, useState, useContext} from "react";

//* useEffect + useState are both hooks , hook is a function that returns info/value, every hook starts with use{Xyz} syntax.
//* useState responsible for rendering on screen, holds 2 vars [data,setData] and returns render to screen.
//* createContext , useContext helps with global state management, 
//* custom hooks = hooks that aren't part of the 'react' library. 
//*  


//! createContext + useContext usage :
//! createContext + useContext syntax : we open and close each one alone, because children will be the data transfered in between them.
//* in the App jsx we return <TheseProvider> {pages,component we want it to be relevant to.} </TheseProvider> 
//* We will mainly use it for GLOBAL needed values such as UserInfo, DarkMode,or anything that is relevant to multiple pages 


export const ThemeContext = createContext()

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


    // * another method to transfer the value : 
    //? const X = {toggleTheme,isDarkMode,selectedTheme}, ThemeContext.Provider value={X}

    return(
        <ThemeContext.Provider value={ {toggleTheme, isDarkMode, selectedTheme} }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

//? we use ThemeContext.Provider when we set up the Context, and <ThemeProvider> to call the Context.
//? we use <ThemeContext.Provider value={{const that we want to provide}}> to transfer the values.

//! syntax to useContext : const { toggleTheme, isDarkMode, lightModeColors } = useContext(ThemeContext)
//? <ThemeContext.Provider>
//?     {Everything we want to use that is a "children" of ThemeContext.}
//? </ThemeContext.Provider>

//! Syntax to transfer the ThemeProvider information!! :

//? App.jsx return part.
// <ThemeProvider(function name)>
//  <CalledComponent />
//  <CalledComponent />
//  <CalledComponent />
// </ThemeProvider>

//! To use the Context in the calledComponent files do :

// const {TransferedValues,TransferedValues} = useContext(ThemeContext{createContext const.})
// Now the transfered values can be used by calling them normally.