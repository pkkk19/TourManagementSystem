import React,{ useState, useRef ,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {package_item} from './Navbarcomp'
import axios from 'axios';
import './form.css'

    let editImage=0;


function AddDaysForm(){
    const location=useLocation();
    const {item}=location.state
    var count=1;
    const[desc,setDesc]=useState([])
    const[day_count,setDayCount]=useState(count)
    const[day_description,setDayDescription]=useState()
    const[package_id,setPackageId]=useState(item.id)
    const[package_days,setPackageDays]=useState([])




    var input=[]
    const arr=[]
    for(var i=0;i<item.days;i++){
    arr.push(0);
    }

    const increment=()=>{

    count++;

    }


    useEffect(()=>{
    const url=`http://127.0.0.1:8000/api/package-days/${item.id}/`;
      axios.get(url)
      .then((response)=>{setDesc(response.data)})
      .catch((err)=>console.log(err))



    },[]);


    const handleChange=(e,index)=>{

    setDesc[index]=e.target.value
    console.log("change")
    }

        const deleteDays=()=>{
    const url=`http://127.0.0.1:8000/api/delete-package-days/${item.id}/`;
           fetch(url,{
        method: 'DELETE',
        })
         .then(response=> response.json())
            .then(data=>console.log(data))
        .catch(error=> console.log(error))
        console.log('submitted');
        }


    const newPackageDays=()=>{

    {deleteDays()};
    setTimeout(() => {
    for(var i=1;i<=item.days;i++){
       const uploadData=new FormData();
    uploadData.append('day_count',i);
    uploadData.append('day_description',setDesc[i-1]);
    uploadData.append('package_id',package_id);


    fetch('http://127.0.0.1:8000/api/create-package-days/',{
    method: 'POST',
    body: uploadData
    })
    .then(response=> response.json())
        .then(data=>console.log(data))
    .catch(error=> console.log(error))
    }  }, 1000);

    }



    return(
    <>
    <h1>{item.name}</h1>
                 <form className="add-description-form">

        {arr.map(function(package_item,index){
             return(
             <>
             <input type="textarea"   key={index} id={"day"+count} name={count} value={day_description}  onChange={(e)=>handleChange(e,index)}  placeholder={"Enter day "+ count+" description "}></input>
             {increment()}

             </> )
                })}
                 </form>
                 <button className="days-description-submit" onClick={()=>newPackageDays()}>Add</button>
    </>
    )
    }
export default AddDaysForm;