import React, { Component } from 'react'

class Button extends Component {
  constructor(props){
    super(props);

    this.state = {
      current: 0,
      previous: []
    }
  }
  
  render(){
    return (
      <div>
        <button 
          class="calc-button" 
          onClick={() => this.props.action(this.props.symbol)}
          type="text" 
          value={this.state.current} />
        
      </div>
    )
  }
}

export default Button;