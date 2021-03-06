import React from 'react';
import NavBtn from './NavBtn';
import NavList from './NavList';

const navListItems = ["首頁", "每日精選", "讀者評論", "關於我們"]

class Header extends React.Component {
    state = {
        showList: false
    };

    openList = () => {
        this.setState({
            showList: true
        });
    }

    closeList = () => {
        this.setState({
            showList: false
        });
    }

    render() {
      return (
        <header>
          <nav className="navBar">
              <span className="name"> DEMO /</span>
              <span className="logo"> Logo </span>
              {/* <img className="logo" 
                    src={require("../img/papre_plane.svg")}
                    alt="" /> */}
              <NavBtn openList={this.openList} />
              {
                this.state.showList || window.innerWidth > 800 ?
                <NavList 
                navListItemName={navListItems} 
                closeList={this.closeList} />
                : null
              }
          </nav>
        </header>
      );
    }
}

export default Header;
