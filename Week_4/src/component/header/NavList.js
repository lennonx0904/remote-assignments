import React from 'react';

class NavList extends React.Component {
    render() {
        return ( 
            <ul className="navList">
                {/* <img src={require("../img/white_exit.svg")} 
                    alt="" className="closeBtn" 
                    onClick={this.props.closeList} 
                    style={{display: window.innerWidth > 800 ? "none" : "block"}}*/}
                <div className="closeBtn" 
                    onClick={this.props.closeList} 
                    style={{color: 'white', display: window.innerWidth > 800 ? "none" : "block"}}>
                    X
                </div>
                {this.props.navListItemName.map(item => 
                <li className="navListItem"><a href="#">{item}</a></li>   
                )}
        </ul>
        );
    }
}

export default NavList;