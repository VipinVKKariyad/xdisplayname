
import { useState } from 'react';



function App() {

  const [FirstName , SetFirstName] = useState("");
  const [LastName , SetLastName] = useState("");
  const [FullName , SetFullName] = useState("");


  const handleSubmit=(e) => {e.preventDefault()
    // console.log(e)
    SetFullName(`${FirstName} ${LastName}`);
  }


  return (
    <div className="App"  style={{padding:"10px"}}>
      <div style={{ /*backgroundColor:"#0099aa",*/ display:"flex", width:"50%",flexDirection:"column"}}>
    
       <form onSubmit={handleSubmit}> 
    <div style={{display:"flex",alignItems: "center", width:"50%",flexDirection:"row",margin:"10px"}}>
    <label>First Name:</label>
    <input placeholder="First Name"  onChange={e=>SetFirstName(e.target.value)} required style={{}}/>
    </div>

    <div style={{display:"flex",alignItems: "center", width:"50%",flexDirection:"row",margin:"10px"}}>
    <label>Last Name:</label>
    <input placeholder="Last Name" required  onChange={e=>SetLastName(e.target.value)} style={{}}/>
    </div>


    <button type="submit" style={{width:"10%",minWidth:"100px",display:"block",marginLeft: "100px"}}>Submit</button>


    </form>
    <div id="op" className="Fullname" style={{fontSize:"15px",padding:"10px",display:"flex",textAlign:"left"}}>{FullName  && `Full Name: ${FullName}`} </div>

    </div>
    </div>
  );
}

export default App;
