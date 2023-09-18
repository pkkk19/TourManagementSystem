import React, { Component } from "react";
import UserStyle from './Dashboard.module.css';
import Navbar from "./Navbar";

export default class Dashboard extends Component {

    constructor(props){
    super(props);
    this.state={
          packages:[],
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

        console.log(this.state.packages);

    }

  render() {
    var viewportHeader = document.querySelector(".viewport-header");
        var packages=this.state.packages


    document.body.addEventListener("scroll", function (event) {
      var opacity =
        (document.body.offsetHeight - document.body.scrollTop) /
        document.body.offsetHeight;
      var scale =
        (document.body.offsetHeight - document.body.scrollTop) /
        document.body.offsetHeight;
      document.documentElement.style.setProperty("--headerOpacity", opacity);
      document.documentElement.style.setProperty("--headerScale", scale);
    });

                {packages.map(function(package_item){
                console.log(package_item)
            if(package_item.category==="popular"){console.log(package_item.name)}


             })}



    return (
      <div>

        <div className={UserStyle.container}>
          <header className={UserStyle.video_header} >

           <Navbar/>


          <div className={UserStyle.Title}>
            <h1 className={UserStyle.firstLine}>
              We Provide
              <span> BEST
              </span>
            </h1>
            <h1 className={UserStyle.secondLine}>Tour Packages all over Nepal
            </h1>

            <button className={UserStyle.bookBtn}>Book Now!</button>
            </div>

        </header>
         <div className={UserStyle.popularPackage}>
         <h1 className={UserStyle.packageCategoryTitle}>Popular Packages</h1>

            {packages.map(function(package_item){
            if(package_item.category==="Popular")
             return(
             <>
            <h1> {package_item.name}</h1>
             </>

             )})}
             </div>

             <div className={UserStyle.popularPackage}>
             <h1 className={UserStyle.packageCategoryTitle}>Trekking Packages</h1>

            {packages.map(function(package_item){
            if(package_item.category==="Trekking")
             return(
             <>
            <h1> {package_item.name}</h1>
             </>

             )})}
             </div>

              <div className={UserStyle.popularPackage}>
             <h1 className={UserStyle.packageCategoryTitle}>Long Tour Packages</h1>

            {packages.map(function(package_item){
            if(package_item.category==="Long")
             return(
             <>
            <h1> {package_item.name}</h1>
             </>

             )})}
             </div>

             <div className={UserStyle.popularPackage}>
             <h1 className={UserStyle.packageCategoryTitle}>Short Tour Packages</h1>

            {packages.map(function(package_item){
            if(package_item.category==="Short")
             return(
             <>
            <h1> {package_item.name}</h1>
             </>

             )})}
             </div>


        <section className={UserStyle.packages}>
        <h6>Montana is a western state defined by its diverse terrain ranging from the Rocky Mountains to the Great Plains. Its wide-open spaces include Glacier National Park, a vast wilderness preserve that passes into Canada. The park’s many snow-capped peaks, lakes and alpine hiking trails are showcased along its famed Going-to-the-Sun Road, stretching 50 miles.

Montana State University is ranked in the top tier of U.S. research institutions by the Carnegie Foundation for the Advancement of Teaching. Located in Bozeman Montana, Montana State is an accredited land grant university offering bachelor's, master's and doctoral degrees in 150 fields of study.
Maybe it's the independent frontier spirit, wild and free and oh-so-American, that earned Montana its 'live and let live' state motto. The sky seems bigger and bluer. The air is crisp and pine-scented. From mountains that drop into undulating ranchlands to brick brewhouses and the shaggy grizzly found lapping at an ice-blue glacier lake, Montana brings you to that euphoric place, naturally.
And then it remains with you long after you've left its beautiful spaces behind
</h6>
</section>

        </div>

      </div>
    );
  }
}
