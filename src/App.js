import React,{useState,useEffect} from 'react';
import Cards from './component/Cards';
import SearchBox from './component/SearchBox';

import './tailwind.min.css';



function App() {
    const [monster,setMonester]=useState([]);
    const [search,setSearch]=useState("");
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>(
         res.json()
      )).then(res=>{
        setMonester(res)
      },[])
    })
    const filteredMonsters=monster.filter(mo=>mo.name.toLowerCase().includes(search.toLowerCase()))
  return (
    
    <div className="App">
      <SearchBox placeholder="Search Monster"  changeHandler={e=>(setSearch(e.target.value))}></SearchBox>
      <Cards monster={filteredMonsters} searchContent={search}></Cards>
    </div>
  );
}

export default App;
