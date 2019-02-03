import React from 'react';

class NavBtn extends React.Component {
    render() {
        return (
            <button type="button" className="navBtn" onClick={this.props.openList}>
                三
                {/* <img src={require("../img/menu.svg")} alt="三" />   */}
            </button>
        );
    }
}

export default NavBtn;