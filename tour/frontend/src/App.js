import React from 'react';
import './App.css';

import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import AddForm from './Components/AddForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './Components/Navbarcomp';




class App extends React.Component{

    constructor(props){
    super(props);
    this.state={
          packages:[],
       activeItem:{
       id:0,
       name:'',
       description: ''
       },
       editing: false
           }
//           calling functions
       this.fetchPackage=this.fetchPackage.bind(this)
       this.handleChange=this.handleChange.bind(this)
       this.handleSubmit=this.handleSubmit.bind(this)

    };

    componentWillMount(){
        this.fetchPackage()
    }
// ----------------------feting Data from api --------------------------------------------------------------
    fetchPackage(){

        console.log("Fetching....")
        fetch('http://127.0.0.1:8000/api/packages/')
        .then(response=>response.json())
        .then(data=>this.setState({packages:data}))
    }

   //------------------------------------------------------------------------------------------------------

    handleChange(e){
        var title=e.target.name
        var value=e.target.value
        console.log("Name: ", title)
        console.log("Value: ", value)

        this.setState({
          activeItem:{
            ...this.activeItem,
            name: value,
            description: value,
            id: 3,
          }
        })
    }

    handleSubmit(e){
       e.preventDefault();
       console.log("ITEM: ", this.state.activeItem)

       var url='http://127.0.0.1:8000/api/create-package/'  //-------------inserting into django database through API
        fetch(url,{
        method:'POST',
        headers:{
        'Content-type': 'application/json'
        },
        body:JSON.stringify(this.state.activeItem)
        }).then((response)  =>{
            this.fetchPackage()
            this.setState({
            activeItem:{
                 id:null,
                 name:'',
                 description: '',
       }
       })
     }).catch(function(error){
     console.log("Error: ",error)
     })

     if(this.state.editing===true){
     url=`http://127.0.0.1:8000/api/update-package/${this.state.activeItem.id}/`
     this.setState({
        editing: false,
     })
     console.log("hello")
     }
    }

    startEditing(package_item){
    console.log("clicked",this.state.editing)
        this.setState({
            activeItem: package_item,
            editing: true,
        })
            console.log("clicked",this.state.editing)

    }

    render(){
    var packages=this.state.packages
    var self=this  // since this is not available inside the loop we use self
    return(


      <div className="container">


        <div id="task-container">
           <div id="form-wrapper">

           <form onSubmit={this.handleSubmit} id="form" >
           <div className="flex-wrapper">

                <div style={{flex:6}}>
                <input onChange={this.handleChange} className="form-control" id="title" type="text" ></input>

                </div>



                <div style={{flex:1}}>
                <input className="btn btn-warning" id="submit" type="submit" ></input>
                </div>
           </div>
           </form>
         </div>

            <div className="list-wrapper">
                {packages.map(function(package_item){
                    return(
                       <div key={package_item.id}  style={{background:'white', borderRadius:"4px"}}className="task-wrapper flex-wrapper">
                        <div style={{flex:7 }}>
                            <span >{package_item.name}</span>
                        </div>

                        <div style={{flex:1 }}>
                            <button onClick={()=> self.startEditing(package_item)} className="btn btn-sm btn-outline-info">Edit</button>
                        </div>
                         <div style={{flex:1 }}>
                            <button onClick={()=> self.startEditing(package_item)} className="btn btn-sm btn-outline-dark delete">Delete</button>
                        </div>

                </div>
                    )
                })}

                <Link to="/add">Add</Link>
            </div>

            <div>

            </div>


        </div>

        </div>
    )
    }
}

export default App;
