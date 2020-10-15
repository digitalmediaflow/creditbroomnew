import React, { Component } from 'react'
// import AdditionalDetails from "../Components/AdditionalDetails"
// import FirstForm from "../Components/FirstForm"
// import Success from "../Components/Success"
import Landing from "../src/Components/LandingPage"

export default class App extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    hobby: "",
    mood: ""
    }

  next = () => {
    const{step} = this.state
    this.setState({
        step: step + 1
    })

  }


  previous = () => {
    const{step} = this.state
    this.setState({
        step: step - 1
    })

  }

  handleform  = (event) => input => {
    this.setState({[input]: event.target.value
    })
  }









  render() {
     const{step} = this.state
     const{firstname, lastname, email, age, hobby, mood} = this.state
     const values = {firstname, lastname, email, age, hobby, mood}

     switch(step){
      case 1:
            return <Landing
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}/>
        // case 2:
        //     return <AdditionalDetails
        //             nextStep={this.next}
        //             prevStep={this.previous}
        //             handleChange = {this.handleChange}
        //             values={values}/>
        // case 3:
        //     return <Success
        //             nextStep={this.next}
        //             prevStep={this.previous}
        //             values={values} />


   }
  }
}
