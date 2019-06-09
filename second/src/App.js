import React, { Component } from 'react';
import Validation from './ValidationComponent'
import Char from './CharComponent'

import './App.css';

class App extends Component {
  state = {
  	text: [],
  	string: ''
  }	

  charClickHandler = (e, id) => {
  	let char = this.state.text.findIndex(char => char.id === id)
  	let newText = [...this.state.text]
  	newText.splice(char,1)
  	let newString = [...newText].map(char => char.char).join('')
  	this.setState({text: newText, string: newString})
  }
  
  inputChangeHandler = (e) => {
  	const text = e.target.value.split('').map((char, index) => {return {id: index, char: char}})
  	this.setState({
  	  text: text,
  	  string: e.target.value
  	})
  } 

  render() {
    return (
      <div className="App">
    	<input 
    	type="text"
    	value={this.state.string}
    	onChange={this.inputChangeHandler}
    	/>
    	<p>The length of the text is: {this.state.text.length}</p>
    	<Validation
    	textLength={this.state.text.length}
    	/>
    	{this.state.text.map((char) => <Char key={char.id} char={char.char} click={(e) => this.charClickHandler(e, char.id)}/>)}
      </div>
    );
  }
}

export default App;
