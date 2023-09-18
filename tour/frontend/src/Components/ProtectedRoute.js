import React from 'react'
import {Routes ,Route, Navigate,Link} from 'react-router-dom'
import auth from './Login'
import Navbarcomp from './Navbarcomp'
import AddForm from './AddForm';
import Update from './Update';
import AddDays from './AddDays';
import AddDaysForm from './AddDaysForm';
import Dashboard from './Dashboard';
import Package_detail from './Package-detail';

function ProtectedRoute({element:Component,...rest}){



    if(localStorage.getItem("login")==="true"){

if(Component.type.name==="Navbarcomp"){

return <Navbarcomp/>
localStorage.clear();
}
else if(Component.type.name==="Addform"){
return <AddForm/>
}
else if(Component.type.name==="Dashboard"){
return <Dashboard/>
}
else if(Component.type.name==="Update"){
return <Update/>

    }
else if(Component.type.name==="Package_detail"){
return <Package_detail/>

    }
else if(Component.type.name==="AddDays"){
return <AddDays/>

    }

else if(Component.type.name==="AddDaysForm"){
return <AddDaysForm/>

    }

    }
else{
   return <Navigate to="/"  />
}

}
;export default ProtectedRoute;