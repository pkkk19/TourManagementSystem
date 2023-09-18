import React from 'react';
import {useLocation} from 'react-router-dom';
import {package_item} from './Navbarcomp'
import './ViewPackage.css';
import Book from './Book';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'







function Package_detail(){

  

const location=useLocation();
const {item}=location.state;
  fetch('http://127.0.0.1:8000/api/package-days/'+item.id+'/')
        .then(response=>response.json()).then(data=>localStorage.setItem("days_data",data))
const days_data=localStorage.getItem("days_data")
localStorage.removeItem("days_data");
console.log(item);
return(

<>
    <Navbar/>
<div className='pacakage_details_container'>

    <div className="imgContainer">
        <div className='Package_name'>
            <h2>{item.name+" Tour Package"}</h2>
        </div>
        <img src={"http://127.0.0.1:8000"+item.image }className="package-img" height="375px" />
    </div>
<section className='description_section'> 

    <div className='package_description_container'>
    <div className='Short_descrpition'>
        <h2>About The Tour</h2>
        <p>
            {item.description}
        </p>
    </div>
      </div>
<div className='brief_description'>
    <div className='destination_seats'>
        <div className='img_label'>       
             <img src={"http://127.0.0.1:8000/media/posts/Destination.png" } className="Destination_icon" height="50px"/>
                <div className='descrip'>
                <label>Destination <br></br><p className='data'>{item.name}</p></label>
                </div>
        
        </div>
         <div className='img_label'>       
             <img src={"http://127.0.0.1:8000/media/posts/seat.png" } className="Destination_icon" height="50px"/>
                <div className="seats">
                <label>Seat<br></br><p className='data'>{item.seat}</p></label>
                </div>
        
        </div>
    </div>
    <div className='price_category'>
        <div className='img_label'>       
                <div className='price'>
                <label>Price <br></br><p className='data'>{item.price}</p></label>
                </div>
        
        </div>
         <div className='img_label'>       
                <div className="category">
                <label>Category<br></br><p className='data'>{item.category}</p></label>
                </div>
        
        </div>
    </div>
    <Link to="/Book"state={{Data:item}}
                ><button className=''>Book the trip</button></Link>
</div>  
</section>

</div>



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
        <Link to="/Book"state={{Data:item}}
                >clickme</Link>
        </div>
    </div> */}
</>

);

}
export default Package_detail;
