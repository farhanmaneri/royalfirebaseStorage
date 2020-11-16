
import './App.css';
import firebase from './firebase';




function App() {


const handleChange = (e)=>{
  const file = e.target.files[0];
  const storageRef = firebase.storage().ref()
  const fileRef = storageRef.child(file.name)
  fileRef.put(file)
  .then(()=>{
    console.log('uploded', file)
  })
}


  return ( 
    <div className="App">
      <h1>Uploading image</h1>

      <input type='file' onChange={handleChange}/>
     

    </div>
  );
}

export default App;
