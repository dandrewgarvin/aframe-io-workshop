import React, {Component} from 'react'

class Controls extends Component{

    constructor(){
        super()

        this.state = {
            sliderX: 0,
            sliderY: 0, // Change this to -5 when using the other sky-box
            sliderZ: -10,
        }
        this._createEntity = this._createEntity.bind(this)
        this._changeSlider = this._changeSlider.bind(this)
    }

    _createEntity(){
        let newEnt = {
            primitive: this.refs.new_select.value,
            color: this.refs.new_color.value,
            position: [+this.state.sliderX, +this.state.sliderY, +this.state.sliderZ],
            rotation: [0,0,0]
        }
        this.props.addEntity(newEnt)
    }

    _changeSlider(e, type){
        e.persist()
        this.setState(()=>{
            let cloneState = this.state
            cloneState[type] = e.target.value
            return cloneState
        })
    }

    render(){
        return (
            <section className="control_bar">
            
                    <select ref="new_select" className="control_select">
                      <option value="a-cylinder">cylinder</option>
                      <option value="a-box">box</option>
                      <option value="a-sphere">sphere</option>
                      <option value="a-cone">cone</option>
                      <option value="a-torus">ring</option>
                    </select>
            
                    <select ref="new_color" className="color_select">
                      <option>green</option>
                      <option>orange</option>
                      <option>blue</option>
                      <option>red</option>
                      <option>teal</option>
                      <option>purple</option>
                    </select>
            
                    <div className="range_container">
                      <p>X Position: {this.state.sliderX}</p>
                      <input 
                        type="range" 
                        style={{width: '80px'}}
                        min={-10} 
                        max={10}
                        step={1}
                        value={this.state.sliderX} 
                        onChange={e=>this._changeSlider(e, 'sliderX')} 
                      />
                    </div>
                    <div className="range_container">
                      <p>Y Position: {this.state.sliderY}</p>
                      <input 
                        type="range" 
                        style={{width: '80px'}}
                        min={0} 
                        max={20}
                        step={1}
                        value={this.state.sliderY} 
                        onChange={e=>this._changeSlider(e, 'sliderY')} 
                      />
                    </div>
                    <div className="range_container">
                      <p>Z Position: {this.state.sliderZ}</p>
                      <input 
                        type="range" 
                        style={{width: '80px'}}
                        min={-20} 
                        max={0}
                        step={1}
                        value={this.state.sliderZ} 
                        onChange={e=>this._changeSlider(e, 'sliderZ')} 
                      />
                    </div>

                    <button onClick={this._createEntity}>Create Entity</button>
            
                  </section>
        )
    }
}

export default Controls