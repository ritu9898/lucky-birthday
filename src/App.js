import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      dob: '',
      number: '',
      isLucky: '',
      done: false
    };

    this.checkLucky = this.checkLucky.bind(this);
  }

  checkLucky(e) {
    let dateSum = 0;
    let date = this.state.dob.trim().split('-');
    let number = this.state.number;
    if(date == "" || number == "")
    {
      alert("Both the fields are necessary.");
      return false;
    }
    for(let i=0;i<date.length;i++)
    {
      dateSum += date[i];
    }
    this.setState({
      isLucky: (dateSum%number == 0) ? true : false,
      done: true
    })
  }

  changeDOB(e) {
    this.setState({
      dob: e.target.value
    });
  }

  changeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }

  hideAlert(e) {
    console.log(e.target.parentElement);
    e.target.parentElement.style.display='none';
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div className="alert">
          <span className="closebtn" onClick={this.hideAlert.bind(this)}>&times;</span>
          Don't worry. We're not saving your data. This is just a game.
        </div>
          <div className="container">
            <h3>Is your birthday lucky ?</h3>
            <div className="grid">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <p>Date Of Birth: </p>
                </div>
                <div className="col-md-3">
                  <div className="input-group mb-3">
                    <input type="date" id="birthday" name="birthday" className="form-control" onChange={this.changeDOB.bind(this)} />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <p>Lucky Number: </p>
                </div>
                <div className="col-md-3">
                  <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Number" min="1" max="99999"  onChange={this.changeNumber.bind(this)} />
                  </div>
                </div>
              </div>
              <div>
                <button type="button" className="btn btn-outline-primary" onClick={this.checkLucky}>Check Number</button>
              </div>
              <div className="ans">
              {(() => {
                if (this.state.done == false) {
                  return (
                    <h2><span></span> </h2>
                  )
                }
                else if (this.state.isLucky) {
                  return (
                    <h2>Hurray! This number is lucky for you.<span></span>&#127882; </h2>
                  )
                } else if (this.state.isLucky == false) {
                  return (
                    <h2>Umm! <span>&#129300;</span>  This number doesn't seem to be lucky for you.</h2>
                  )
                } 
              })()}
              </div>
            </div>  
          </div>
        </header>
      </div>
    )};
}

export default App;
