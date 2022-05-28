import React from "react";
import "./App.css";
function SignIn() {
    return(
        <>
       <main>
        {/* left side image in nav bar  */}
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="bootstrap-solid.svg" width="30" height="30" alt=""/>
          </a>
        {/* Content in nav bar  */}
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#">Dashboard<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="#">Customers<span class="sr-only">(current)</span></a>  
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="#">Technician<span class="sr-only">(current)</span></a>
            </li>
           </ul>
        </nav>
        <table>
            <th>Scheduled</th>
            <th>Completed Services</th>
            <tr>
                <td><img src="eye.png"/></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th, 2020</td>
                <td>2pm</td>
                <td><img src="calendar.png"/></td>
            </tr>
            <tr>
                <td><img src="eye.png"/></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th, 2020</td>
                <td>2pm</td>
                <td><img src="calendar.png"/></td>
            </tr>
            <tr>
                <td><img src="eye.png"/></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th, 2020</td>
                <td>2pm</td>
                <td><img src="calendar.png"/></td>
            </tr>
            <tr>
                <td><img src="eye.png"/></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th, 2020</td>
                <td>2pm</td>
                <td><img src="calendar.png"/></td>
            </tr>
            <tr>
                <td><img src="eye.png"/></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th, 2020</td>
                <td>2pm</td>
                <td><img src="calendar.png"/></td>
            </tr>
            <tr>
                <td><img src="eye.png"/></td>
                <td>1531 NE 39th Street</td>
                <td>March 20th, 2020</td>
                <td>2pm</td>
                <td><img src="calendar.png"/></td>
            </tr>

        </table>
        </main>
        
</>


    );
}
export default SignIn;