

import Spinner from "../spinning/Spinner";
function Card({imageUrl,spinner,onClickGenerate}) {
  
 
  
   function generateGif(){
    onClickGenerate(); 
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
    
      
           <button className="py-2 px-1  bg-white w-[80%] mb-2 text-center  rounded-lg" onClick={generateGif} >Generate</button>
      
    </div>
  );
}

export default Card;
