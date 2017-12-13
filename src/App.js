import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// This is the component we've created in another file. It simply creates new entities for our scene, and passes them to App.js
import Controls from './Controls'

// These are the basic imports that we need to begin using Aframe
import 'aframe'
import {Entity, Scene} from 'aframe-react'

// There are additional components we can bring in from NPM for various effects. In this case, we're bringing in a particle system.
import 'aframe-particle-system-component';

class App extends Component {

  constructor(){
    super()

    this.state = {
      entities: []
    }
    this.addEntity = this.addEntity.bind(this)
  }

  addEntity(ent){
    let entityList = this.state.entities
    entityList.push(ent)
    this.setState({entities: entityList})
  }


  render() {

    // This function will loop over the array of objects that are in our array, and add them to our scene based on the object properties.
    let displayEntities = this.state.entities.map((e,i,a)=>{
      return (
        <Entity 
          primitive={e.primitive} 
          color={e.color} 
          position={`${e.position[0]} ${e.position[1]} ${e.position[2]}`}
          rotation={`${e.rotation[0]} ${e.rotation[1]} ${e.rotation[2]}`}
        />
      )
    })

    return (
      <div className="App">
        <Controls addEntity={this.addEntity} />
        {/* The <Scene /> Tags should wrap our entire VR experience */}
        <Scene>

          {/* This particle system is an additional dependancy that you must bring in. */}
          {/* <Entity particle-system={{preset: 'snow', particleCount: 15000}}/> */}

          {/* Skyboxes are a staple of game and VR development. A skybox is the 360 degree background image, video, or texture */}
          <Entity primitive="a-sky" color="lightblue" />
          {/* <Entity primitive="a-sky" src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/" /> */}
          {/* <Entity primitive="a-sky" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rheingauer_Dom%2C_Geisenheim%2C_360_Panorama_%28Equirectangular_projection%29.jpg/1280px-Rheingauer_Dom%2C_Geisenheim%2C_360_Panorama_%28Equirectangular_projection%29.jpg" /> */}

          {displayEntities}

        </Scene>
      </div>
    );
  }
}

export default App;
