// import React, { Component } from 'react'

// export class NavBar extends Component {
//     render() {
//         return (
//             <nav className='navbar navbar-light bg-light '>MyNav Bar
//                 <span className='badge badge-danger badge-pill '>{this.props.total}</span>
//             </nav>


//         )
//     }
// }

// export default NavBar
import React from 'react';
 
const NavBar = ({total}) => {
    return (
        <nav className='navbar navbar-light bg-light '>MyNav Bar
            <span className='badge badge-danger badge-pill '>
                {total}
          
            </span>
           </nav>
        
    );
}
 
export default NavBar;
