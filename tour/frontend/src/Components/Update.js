
import React,{ useState } from 'react';
import {useLocation} from 'react-router-dom';
import {package_item} from './Navbarcomp'
import './form.css'
import { Form, Button } from "react-bootstrap";


    let editImage=0;


function Update(){
    const location=useLocation();
    const {item}=location.state
    const[name,setName]=useState(item.name);
    const[days,setDays]=useState(item.days);
    const[image,setImage]=useState();
    const[id,setId]=useState(item.id);
    const[description,setDescription]=useState(item.description);
    const[price,setPrice]=useState(item.price);
    const[category,setCategory]=useState(item.category);
    const[seat,setSeat]=useState(item.seat);
    console.log(item.image)





    const submitHandler=()=>{
    console.log(editImage)
     const uploadData=new FormData();
    uploadData.append('name',name);
    if(editImage>0){
    console.log("check")
        uploadData.append('image',image);
    }
    uploadData.append('id',id);
    uploadData.append('days',days);
    uploadData.append('description',description);
    uploadData.append('price',price);
    uploadData.append('seat',seat);
    uploadData.append('category',category);


     const url=`http://127.0.0.1:8000/api/update-package/${id}/`;
       fetch(url,{
    method: 'PATCH',
    body: uploadData
    })
     .then(response=> response.json())
        .then(data=>console.log(data))
    .catch(error=> console.log(error))

    console.log('submitted');
    console.log(image)
    }




    return(
            <div className="container">
 <Form>
        <div className="form-group">
          <label>Package Name:</label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={name}
            placeholder="Package Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description: </label>
          <textarea
            class="form-control"
            rows="4"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          </div>

          <div class="row-md-6">
            <div class="col">
          <label>
            Price:
            <input
              type="number"
              class="form-control"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          </div>



          <div class="col">
          <label>
            Seats:
            <input
              type="number"
              class="form-control"
              name="seat"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
            />
          </label>
          </div>

           <div class="col">
          <label>
            Days:
            <input
              type="number"
              class="form-control"
              name="days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </label>
          </div>
        </div>
        <div className="end">
          <label for="exampleFormControlSelect1">Category: </label>
          <select
            class="form-control"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Package Type</option>
            <option value="Trekking">Trekking</option>
            <option value="Popular">Popular</option>
            <option value="Long">Long Tour</option>
            <option value="Short">Short</option>
          </select>
          <br></br>

          <label>Select image file of the destination :</label>
          <br></br>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
      </Form>
      <Button onClick={() => submitHandler()}>Submit</Button>
            </div>

    );
}

export default Update;