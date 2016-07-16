
require('./main.css');
import React from 'react';
import ReactDOM from 'react-dom'; 

const App = React.createClass({
  render: function () {
    return (
      <div>Hello World</div>
    );
  }
});

var element = document.createElement('div');
element.id = "app";
document.body.appendChild(element);

ReactDOM.render(<App/>, document.getElementById('app'));
