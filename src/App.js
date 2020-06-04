import React, {Component} from 'react';

import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  };

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  };

  render(){
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char}
      clicked = {() => this.deleteCharHandler(index)}
      key={index}/>
    });
    return (
      <div>
        <p>Lorem ipsum get a clue you freaking genius. You deserve the world you gorgeous handsome younge fella</p>
        <input type= "text" 
        onChange={this.inputChangedHandler}
        value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }

}

export default App;
