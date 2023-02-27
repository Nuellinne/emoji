import './App.css';
import {useEffect, useState} from 'react'


function App() {
  let [data, setData] = useState([])
  let [search,setSearch] = useState('')

  useEffect(()=>
  {fetch('https://emoji-api.com/emojis?access_key=b41e9f417277c930d7873ffbd5fcb82557b14fc2')
  .then(res=> res.json())
  .then(res=> console.log(res))
},[])

let handleSearch = (e) => {
  setSearch(e.target.value)
}

let handleSubmit = () => {
  if (search !== ''){
    fetch('https://emoji-api.com/emojis?search=${search}&access_key=b41e9f417277c930d7873ffbd5fcb82557b14fc2')
  .then (res => res.json())
  .then (res => {
    if (res) {
      setData(res) }else {
        setData([])
      }
  })}
}

  return (

   <div className='App'>  
   <div className='menu'><div className='menu_Text'>
        <h1>Emoji Search</h1>
      </div></div>

      <div>
        <input type='text' placeholder='Search'  value={search} onChange={(e)=>handleSearch(e)}></input>
        <button className='search'  onClick={()=> handleSubmit()}>Search</button>
      </div>
    
    
    
    <div className='container'>

      {data.map((e,i)=> 
      <div className='card' key={e.slug}>
          <p className='emoji'>cry</p>
          <p className='name'>{e.unicodeName}</p>
      </div> )}

    </div>
    </div>
  );
}

export default App;
