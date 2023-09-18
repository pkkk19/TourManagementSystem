import React from 'react';
import {useLocation} from 'react-router-dom';
import {package_item} from './Navbarcomp'
import './Booking.css';
import Navbar from './Navbar'
var today=new Date();

function Booking_info(){


const location=useLocation();
console.log(location);
localStorage.removeItem("name");


return(

<>
    {/* <div class="package_details_container">
        <div className="package_details_left">
        <img src={"http://127.0.0.1:8000"+item.image }className="package-img"/>
        </div>
        <div className="package_details_right">
        <div className="details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h5>{"Price "+item.price}</h5>
        <h5>{"Seats "+item.seat}</h5>
        <h5>{"Category "+item.category}</h5>
        <h5>{"id "+item.id}</h5>
        </div>


        </div>
    </div> */}
    <Navbar/>
<div className="Booking_Form" id="Booking_Form">
    <div className="personal_info">
        <div >        <h1 className='packageName'>{location.state.Data.name+" Tour Package"}</h1></div>

        <div>
        <label>Full Name</label>
       <input type="text" id="name"  className="a" placeholder="Your full name"  required pattern="[A-Za-z]*"></input>
       </div>
        <div>
        <label>Email</label>
        <input type="email" id="email" className="a" placeholder="a@gmailcom" pattern=".+@gmail.com"required ></input>
        <span></span>
        </div>
        <section className='Contact'>
            <div>
        <label>Phone</label>
        <input type="text" id="phone" placeholder="9524217638" min="0"className="a" pattern="[9]+[0-9]*" required></input>
      </div>
      <div className='secondary_number'>
        <label>Secondary Number  </label>
        <input type="text" id="secondary_Phone" placeholder="9524217638"  min="0"className="a" required pattern="[0-9]{10}"></input>
      
        </div>
        </section>
    </div>
    <div className="Booking_details">
        <div className="Depature_Date">
            <label>Depature Date</label>
            <input type="date"className="a"  min={today} max="2027-05-30" name="depature_date"></input>
            
        </div>
        <div className="number">
            <label>Number of people</label>
            <input type="number" min="1" max={location.state.Data.seat} placeholder="Number Of People" className="a"required></input>
            
        </div>
        
    </div>
    <div className='otherinfo_book'>
    <div className="Other_info">
        <label>Other information</label>
        <textarea rows="4" cols="19"></textarea>
    </div>
    <div>
      <input type='button' value="Book"></input>
    </div>
    </div>
</div>




</>

);

}
export default Booking_info;
