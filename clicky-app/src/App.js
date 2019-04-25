import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters: characters,
    idStored:0,
    counter:0,
    status:""
  };

  shuffleCharacters = array => {
    let i = array.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ characters: array })
  }

  // score up

  score=(idClicked)=>{

this.setState({
  idStored:idClicked
})

if (this.state.idStored === idClicked){
  this.setState({
    counter:0,
    status:"Wrong!"
  })

} else {

    this.setState({
      counter:this.state.counter+1,
      status:"Correct!"
    })
  }
  }

  bigFunction = idClicked => {
    this.shuffleCharacters(this.state.characters)
    this.score(idClicked)

  }


 
  // Map over this.state.characters and render a FriendCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title
        score={this.state.counter}
        status={this.state.status}
        >Clicky Game</Title>
        {this.state.characters.map(character => (
          <FriendCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            shuffleCharacters={this.shuffleCharacters}
            array={this.state.characters}
            score={this.score}
            bigFunction={this.bigFunction}
          
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
