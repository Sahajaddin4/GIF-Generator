export async function getRandomData() {
    const getGifRandomGif = await UseGif();
    //console.log(getGifRandomGif);

    if (getGifRandomGif) {
      setImageUrl1(getGifRandomGif);
      setImageUrl2(getGifRandomGif);
      setSpinner(false);
    }
  }


  export  async function getDataByTag(tag) {
    const getGifRandomGif = await UseGif(tag);
    //console.log(getGifRandomGif);

    if (getGifRandomGif) {
      //setImageUrl1(getGifRandomGif);
      setImageUrl2(getGifRandomGif);
      setSpinner(false);
    }
  }