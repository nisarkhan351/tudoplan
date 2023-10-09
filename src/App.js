import React, { Component } from 'react';
import './App.css';
import Plan from "./plan";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


 class App extends Component {
  state = {
    items:[],
    text:""
  }
  handlechange = (e) => {
      this.setState({text: e.target.value})
  }
  handleAdd = e => {
    if(this.state.text !== ""){
      const items= [...this.state.items , this.state.items]
      this.setState({ items:items , text:""});
    }
  }

  deletehandler = id => {
    console.log("deleted",id);
    const Olditems=[...this.state.items]
    console.log("Olditems",Olditems);
    const items= Olditems.filter((element , i) => {
      return i !== id
    })
    console.log("Newitems",items);
    this.setState({ items:items });
  }
  render() {
    return (
      <div className="App">
    <div className='container-fluid'>
      <div className='container'>
        <div className='row'>
        <div className='col-sm-6 mx-auto shadow-lg p-4 text-center'>
            <h1 className='fw-bold fst-italic mt-5 text-white'>Today  's Plan</h1>
            <div className='row'>
              <div className='col-9 mx-auto'>
                <input className='form-control' placeholder='Write a Plan' value={this.state.text} onChange={this.handlechange} />
              </div>
              <div className='col-3 mx-auto'>
                <button className='btn btn-warning' onClick={this.handleAdd}>Add</button>
              </div>
              <div className='container-fluid'>
                 {/* <ul className='list-unstyled mx-2 my-4'>
                  {this.state.items.map((value,i) =>{
                    return <Plan key={i} id={i} value={value} sendData={this.deletehandler} />
                  })}
                 </ul> */}
                 <ul className='list-unstyled row m-5'>
                    <Plan p={this.state.items} sendData={this.deletehandler} />
                 </ul>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    )
  };
};

export default App;
