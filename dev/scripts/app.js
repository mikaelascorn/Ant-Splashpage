import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      userClick: false
    }
    this.redirectSite = this.redirectSite.bind(this);
  }

  redirectSite() {
    console.log('clicked');
    this.setState({
      userClick: true
    }, () => {
      window.location.href ="https://ant.design/";
    })
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="body-wrapper">
          <div className="body">
            <h1>Welcome to Ant Design!</h1>
            <h2>We're the  design and UX experts! Let's build something beautiful together.</h2>
            <button onClick={this.redirectSite}>Check us out 😊</button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
