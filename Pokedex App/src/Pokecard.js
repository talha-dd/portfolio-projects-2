import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// this function adds two zeros in front of the pokemon id, and slices the back 3 digits if the id is double digits

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{this.props.name}</h1>
        <div className='Pokecard-image'>
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className='Pokecard-data'>Type: {this.props.type}</div>
        <div className='Pokecard-data'>EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
