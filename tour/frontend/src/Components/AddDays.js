import React, { Component } from "react";
import {Link} from 'react-router-dom';



export default class AddDays extends Component{


    constructor(props){
    super(props);
    this.state={
          packages:[],

       activeItem:{
        message:"",
        isLoading:false,
        id:0,
        check:true,
       },
       editing: false
           }
       this.fetchPackage=this.fetchPackage.bind(this)

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

    handleDelete(id,name){


    const url=`http://127.0.0.1:8000/api/delete-package-days/${id}/`;
           fetch(url,{
        method: 'DELETE',
        })
         .then(response=> response.json())
            .then(data=>console.log(data))
        .catch(error=> console.log(error))
        console.log('submitted');
        }




 render() {
    var packages=this.state.packages
    var activeItem=this.state.activeItem
    var self=this
    var url='http://127.0.0.1:8000';


    return (
    <>

    <h1 id="add-days-title"> Add Package Days Details </h1>

      <div className="add-days-container">

           <div className="add-days-row">

            {packages.map(function(package_item){
             return(
             <>
             <div className="package_days_list">
             <h1 className="add-days-package-name">{package_item.name}</h1>
             <Link to= '/add-days-form' state= {{
                   item:package_item
                   }}><button className="add-days-button">Add</button></Link>
             <button className="delete-package-days-details" onClick={()=>self.handleDelete(package_item.id,package_item.name)}>Delete</button>
             </div>
             </> )
                })}
             </div>
      </div>
      </>
      )
}
}