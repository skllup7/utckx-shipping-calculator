import React, {useState} from 'react'; 

const LoginForm = ({onLogin}) => { 
// Initializing the state variables for username is given and complete the code for password  
//using the useState hook 

const [username, setUsername] = useState(''); 

//const [] = useState(''); 

// Define the handleLogin function to check the credentials 
const handleLogin = () => { 
// Check if the username is "admin" and password is "admin" 
// If they match, call the onLogin function to indicate successful login 
// Otherwise, display an alert saying "Invalid username or password" 

if (username === '' && password === '') { 


} else { 
 

} 
}; 

return (
<div>
<h2>Admin Login</h2>
<input
type="text"
placeholder="Enter username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input 
type="password" 
placeholder="Enter password" 
//Complete the value and onChange event function 
// value={} 
// onChange={} 
/> 
{/* Add an onClick event handler to the button to call the handleLogin function */} 
<button onClick={}>Login</button> 

</div> 

 ); 

}; 

export default LoginForm; 
