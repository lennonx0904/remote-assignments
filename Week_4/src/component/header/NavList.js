import React from 'react';

class NavList extends React.Component {
    render() {
        return ( 
                <ul className="navList">
                    <img src={require("./white_exit.svg")} 
                        className="closeBtn" 
                        onClick={this.props.closeList} 
                        style={{display: window.innerWidth > 800 ? "none" : "block"}}
                        />
                        {this.props.navListItemName.map(item => 
                        <li className="navListItem"><a href="#">{item}</a></li>   
                        )}
                </ul>
        );
    }
}

export default NavList;