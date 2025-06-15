
import { useState } from 'react';



function App() {

  const [FirstName , SetFirstName] = useState("");
  const [LastName , SetLastName] = useState("");
  const [FullName , SetFullName] = useState("");


  const handleSubmit=(e) => {
    
    e.preventDefault()
    // console.log(e)

   SetFullName(FirstName && LastName ? `${FirstName} ${LastName}` : '');

  }


  return (
    <div className="App"  style={{padding:"10px"}}>
      <div style={{ /*backgroundColor:"#0099aa",*/ display:"flex", width:"50%",flexDirection:"column"}}>
    
       <form onSubmit={handleSubmit}> 

    <h2>Full Name Display</h2>
    <div style={{display:"flex",alignItems: "center", width:"50%",flexDirection:"row",margin:"10px"}}>
    <label>First Name:</label>
    <input  
    required 
    placeholder="First Name" 
    type="text"  
    onInvalid={(e) => SetFullName("")}
    onChange={e=>SetFirstName(e.target.value)}  style={{}}/>
    </div>

    <div style={{display:"flex",alignItems: "center", width:"50%",flexDirection:"row",margin:"10px"}}>
    <label>Last Name:</label>
    <input 
    required 
    placeholder="Last Name" 
    type="text" 
    onInvalid={(e) => SetFullName("")}
    onChange={e=>SetLastName(e.target.value)} style={{}}/>
    </div>


    <button type="submit" style={{width:"10%",minWidth:"100px",display:"block",marginLeft: "100px"}}>Submit</button>


    </form>
   {FullName && ( <div id="op" className="Fullname" style={{fontSize:"15px",padding:"10px",display:"flex",textAlign:"left"}}>{FullName  && `Full Name: ${FullName}`} </div>
   )}
    </div>
    </div>
  );
}

export default App;
