import React from 'react';
import "./styles.css";
//stateless components
const Header = () => (
    <header id="main-header">JSHunt</header>
);

export default Header;

//Utilizar classe quando precisar de estado
/*
class Header extends Component {
    render(){
        return <h1>Hello</h1>
    }
}
*/