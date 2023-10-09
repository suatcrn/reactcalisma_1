import React, { useEffect, useState } from "react";
import Data from '../helpers/data'
import Cards from "./Cards";
import nbaLogo from '../assets/nba-logo.png'

const Search = () => {
const [inp, setInp] = useState('')
const [datas, setDatas] = useState([])

useEffect(() => {
 setDatas(Data.filter((item)=>item.name.toUpperCase().includes(inp.trim().toUpperCase()))) 
}, [inp])

 
  return (
    <>
     <div className="mt-5 container">
      <div className="w-100 h-100 text-center">
        <img src={nbaLogo} alt="nba" style={{height:'100px',weight:'200px'}} className=""/>
      </div>
      <h1 className="text-center text-danger-700 nbaH">NBA LEGENDS</h1>
      <div className="input-group mb-3 w-50 mx-auto">
        <input
          type="text"
          className="form-control "
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e)=>setInp(e.target.value)}
          value={inp}
        />
      </div>
    </div>
    <Cards datas={datas}/>
    </>
   
  );
};

export default Search;
