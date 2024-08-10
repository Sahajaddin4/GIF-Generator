import React ,{useState} from 'react'
import Spinner from "../spinning/Spinner";
function Card2({imageUrl,spinner,onClickGenerate}) {
     const [search,setSearch]=useState('');

    function handleSearch(event){
            setSearch(event.target.value);
    }

    function handleClick(){
        onClickGenerate(search);
       
    }
  return (
    <div className="card bg-green-600 w-[35rem] flex flex-col gap-5 mx-auto p-2 justify-center items-center">
    <header className="underline text-xl font-bold text-center">
      A Random GIF
    </header>
    {
        !spinner?(<div className="random-generated-image">
          <img
            src={imageUrl}
            alt="random-gif"
            className="h-[240px] w-[240px]"
          />
        </div>):
        <Spinner />
      }
   <input type="text"  className="py-2 rounded-md w-[80%] px-1" name="search" onChange={handleSearch} value={search} placeholder="search gif"/>
 
   
         <button className="py-2 px-1 bg-white w-[80%] mb-2 text-center  rounded-lg" onClick={handleClick}>Generate</button>

  </div>
  )
}

export default Card2