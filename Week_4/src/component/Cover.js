import React from 'react';

class Cover extends React.Component {
    state = {
        message: "Welcome Message"
    }

    coverClicked = () => {
        this.setState({
            message: "Have a Good Time!"
        });
    }

    render() {
        return (
        <div className="cover" onClick={this.coverClicked}>
            <h1 className="coverTitle">{this.state.message}</h1>
        </div>
        );
    }
  }

  export default Cover;  