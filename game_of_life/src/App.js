import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'; 
import Cell from './Cell'; 

const App_Holder = styled.div`
border: 1px solid black; 
display: flex; 
flex-direction: column; 
flex:1;
`
const Header_container = styled.header`
border: 1px solid red; 
display: flex; 
flex-direction: column; 
flex: 1; 
`
const Btn = styled.button`
width: 100px; 
padding: 10px; 
margin: 5px; 
`
const Inner_Header = styled.header`
border: 1px solid green; 
display: flex; 
width: auto;
heigth: auto;  
`
const Input = styled.input`
width: 100px; 
height: 20px;
margin: 5px; 
`
const Btn_container = styled.div`
border: 1px solid blue; 
display: flex; 
width: auto; 
height: auto; 
`
const Header_text = styled.div`
border: 1px solid yellow; 
width: auto; 
`
const Board_Container = styled.div`
border: 1px solid pink; 
display: flex; 
flex: 1; 
justify-content: center; 
padding: 0 60px; 
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      //-----i    j  i=Column j=Row  
      size: [90, 20],
      running: false,
    }
    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.handleRowChange = this.handleRowChange.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.renderBoard = this.renderBoard.bind(this);
  }

      handleColumnChange(event){

      };

      handleRowChange(event){

      };

      startGame(){
    
      };

      stopGame(){
   
      };

      runGame(){

      };

      renderBoard(){
        let newBoard = [];
        let cellRow = []; 

        for(let i = 0; i < this.state.size[0]; i++){
          for(let j = 0; j < this.state.size[1]; j++){
            cellRow.push(<Cell key={[i, j]}/>);
          }
          newBoard.push(<div className="row" key={i}>{cellRow}</div>);
          cellRow = []; 
        }
        return newBoard; 
      };

  render() {
    return (
      <App_Holder>
        <Header_container>
          {/* <Btn>Submit</Btn> */}
            <Inner_Header>
              <Input 
              type = "number"
              placeholder = "Rows"
              value = {this.state.size[1]}
              onChange={this.handleRowChange}
              />
              <Input 
              type = "number"
              placeholder = "Columns"
              value = {this.state.size[0]}
              onChange = {this.handleColumnChange}
              />
            </Inner_Header>
            <Btn_container>
              <Btn onClick={this.startGame}>Start</Btn>
              <Btn onClick={this.stopGame}>Stop</Btn>
            </Btn_container>
            <Header_text>
              <h3>Generations:</h3>
              </Header_text>
        </Header_container>
        <Board_Container>
          {this.renderBoard()}
        </Board_Container>
      </App_Holder>
    );
  }
}

export default App;