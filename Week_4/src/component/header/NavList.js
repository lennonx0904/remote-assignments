import React from 'react';

class NavList extends React.Component {
    render() {
        return ( 
            <ul className="navList">
                {/* <img src={require("../img/white_exit.svg")} 
                    alt="LOGO"/> */}
                <span className="closeBtn" 
                    onClick={this.props.closeList} 
                    style={{color: 'white', display: window.innerWidth > 800 ? "none" : "block"}}>
                    X
                </span>
                {this.props.navListItemName.map(item => 
                <li className="navListItem"><a href="#">{item}</a></li>   
                )}
        </ul>
        );
    }
}

export default NavList;