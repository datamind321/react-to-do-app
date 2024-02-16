import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan'
import { Component } from 'react'




class App extends Component {
  
  state = {
    items: [],
    text: '',
  }

  
  handleChange = e => {
    this.setState({text:e.target.value})
  }

  handleAdd = e => {
    
   
    if (this.state.text !== ''){
      const items = [...this.state.items,this.state.text]
      this.setState({items:items,text:''});
    }
  }

  handleDeleteTask = id => {
    const olditems = [...this.state.items]
    console.log('All Items: ',(olditems))
    const items = olditems.filter((element,i)=>{
      return i !== id
    })
    console.log('After Deleted',items)
    this.setState({items:items});

  }

  render() {
  return (
   <div className="container-fluid my-5">
    <div className="row">
      <div className="col-sm-6 mx-auto text-white shadow-lg p-3" >
       <h1 className='text-center fw-bold'>Today's Plan</h1>
       <br />
       <div className="row">
        <div className="col-9">
          <input type="text"  className='form-control' placeholder='write your plan today...' value={this.state.text} onChange={this.handleChange}/>
        </div>

        <div className="col-2">
          <button className="btn btn-warning px-3 fw-bold" onClick={this.handleAdd}>Add</button>
        </div>
        <div className="container-fluid">

          {/* 1st Method to display & delete tasks  */}

         <ul className='list-unstyled row m-5'>
          {
            this.state.items.map((value,i)=> {
              return <Plan key={i} id={i} value={value} send_data={this.handleDeleteTask}/>
            })
          }
          </ul>


        {/* 2nd Method to display & delete tasks  */}

          {/* <ul className='list-unstyled row m-5'>

          <Plan p={this.state.items} send_data={this.handleDeleteTask}/>

          </ul> */}



        </div>
       </div>
      </div>
    </div>
   </div>
  )
}
}

export default App
