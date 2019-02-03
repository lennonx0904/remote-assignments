import React from 'react';

class NavBtn extends React.Component {
    render() {
        return (
            <button type="button" className="navBtn" onClick={this.props.openList}>
                <img src={require("./menu.svg")} />  
            </button>
        );
    }
}

export default NavBtn;