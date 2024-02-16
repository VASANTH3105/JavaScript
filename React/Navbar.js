import React, { Components } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;// that we created
    render() {
        console.log(this.context);
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{ background: theme.ui, color: theme.color}}>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
