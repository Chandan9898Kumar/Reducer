import React from 'react'
import { NavLink } from "react-router-dom"
const Homes=()=>{
return(
<>
<NavLink to='/StateChange'>State change App</NavLink><br /><br />
<NavLink to='/ObjectChange'>ObjectChange change App</NavLink><br /><br />
<NavLink to='/ObjectForm'>FormValidation with Reducer</NavLink>

</>    
)
}
export default Homes