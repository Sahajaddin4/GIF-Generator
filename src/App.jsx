import "./App.css";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import UseGif from "./components/hooks/getGif";
import React, { useEffect, useState } from "react";

function App() {
  const [imageUrl1, setImageUrl1] = useState();
  const [spinner1, setSpinner1] = useState(true);
  const [spinner2, setSpinner2] = useState(true);
  const[imageUrl2,setImageUrl2]=useState();

  async function getRandomData() {
    const getGifRandomGif = await UseGif();
    

    if (getGifRandomGif) {
      setImageUrl1(getGifRandomGif);
      setSpinner1(false);
    }
  }
  async function getDataByTag(tag) {
    const getGifRandomGif = await UseGif(tag);
    

    if (getGifRandomGif) {
      //setImageUrl1(getGifRandomGif);
      setImageUrl2(getGifRandomGif);
      setSpinner2(false);
    }
  }
  function onClickGenerate() {
    setSpinner1(true);
    getRandomData();
  }
  function onClickGenerate2(tag) {
    setSpinner2(true);
    getDataByTag(tag);
  }
  useEffect(() => {
    getRandomData();
    getDataByTag();
  }, []);

  return (
    <>
      <div className="background bg-gray-400 min-h-[100vh] py-5">
        <div className="heading w-[80vw] bg-white border rounded-lg mx-auto text-center py-3">
          <h1 className="upppercase text-3xl font-bold">Random Gifs</h1>
        </div>
        <div className="main flex flex-col gap-8 mt-5 ">
          <div className="card1">
            <Card
              imageUrl={imageUrl1}
              onClickGenerate={onClickGenerate}
              spinner={spinner1}
            />
          </div>

          <div className="card2">
          <Card2
              imageUrl={imageUrl2}
              onClickGenerate={onClickGenerate2}
              spinner={spinner2}
            />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
