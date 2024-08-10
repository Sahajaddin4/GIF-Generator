
     


         
  async function getGif(tag){
       const api_url=import.meta.env.VITE_GIF_API_URL;
       const api_key=import.meta.env.VITE_API_KEY;
       const url=tag?api_url+api_key+'&tag='+tag:api_url+api_key ;
     
          
               try {
                    const res=await fetch(url);
                    
                    
                    const response=await res.json();
              
                     
                    return(response.data.images.downsized.url);
                    
               } catch (error) {
                    console.log(error);
                   return '';
                    
               }
           
      
         
   
     // return gif;
     
  }


  
export default getGif;