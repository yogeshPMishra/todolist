import './App.css';
import Header from './components/Header/Header';
import { TextField,Button,Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
function App() {
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [data,setData] = useState([]);
  const addData = ()=>{
    setData([...data,{name:name,email:email}]);
    setName('');
    setEmail('');
  }

 function removeItem(index){
   let arr = data;
   arr.splice(index,1);
   setData([...arr]);


  }
  return (
    <div className="App">
       <Header/>
       <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField value={name} label="Name" color="secondary" onChange={(e)=>setName(e.target.value)}/>
          <TextField value={email} label="Email" color="secondary" onChange={(e)=>setEmail(e.target.value)}/>
          <Button color="success" variant="contained" onClick={addData}><AddIcon/></Button>
        </Stack>
      </div>
      {/* data  */}
      <div className='body'>
        {
           data.map((elem,index)=>{
               return(
                  <div key = {index} className="content"> Name:{elem.name} Email:{elem.email} <span className='deleteBtn' onClick={()=>removeItem(index)}> <DeleteIcon/> </span></div>
               )
           })
        }
      </div> 
    </div>
  );
}

export default App;
