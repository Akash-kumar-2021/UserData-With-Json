import axios from "axios";
import { useEffect, useState } from "react";
function UserForm()
{
    const [user ,setUser] = useState([]);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [id,setId] = useState("");
    useEffect(() =>
    {
      loadData();
    },[]);
   
  const loadData = async () =>
  {
     const res = await axios.get("http://localhost:8000/users");
     console.log(res.data)
     setUser(res.data);
  }
  // AddUser handle
  
  const AddUser = (e) =>
  {
    e.preventDefault();
     axios.post("http://localhost:8000/users",{
      name,email,address,id
     })
     .then(() =>
     {
      setId("")
      setName("");
      setEmail("");
      setAddress("");
      
     })
     .catch((err)=>
     {
      console.log(err)
     });
  
     setTimeout(() =>
     {
      loadData();
     },500)
  }
  
    return (
      <div className="App">
        {/* Name Input Box */}
        <form className="form">
            <label>Name</label>
        <input placeholder="Enter Name here" 
        type="text"
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
  
        {/* Name input box */}
        <label>Email</label>
        <input placeholder="Enter Email here" 
        type="email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        />

        {/* Address input box */}
        <label>Address</label>
        <input placeholder="Enter Address here" 
        value={address} 
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        />

        <label>User-Id</label>
        <input placeholder="Enter id here" 
        value={id} 
        type="text"
        onChange={(e) => setId(e.target.value)}
        />
  
        <button onClick={AddUser} >Submit</button>
        </form>
        <div className="output">

<table>
  <tr>
    <th>User-Id</th>
    <th>Name</th>
    <th>Email</th> 
    <th>Address</th>
  </tr>
  {user.map((user) =>(  <tr key={user.id}>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.address}</td>
  </tr>))}

</table>
       
 </div> 
      </div>
    );
}
export default UserForm