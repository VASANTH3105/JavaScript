import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    //its gonna share everywhere
    state = { 
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: 'ddd', ui: '#333', bg: '#555'}
    }
    //need to provide these data to different components GOTO app.js
    render() {
        return( 
            //this is our created context   adds all in present instate using var args
            <ThemeContext.Provider value={{...this.state}}> 
            {this.props.children}

            </ThemeContext.Provider>
        );
    }
}
export default ThemeContextProvider;
