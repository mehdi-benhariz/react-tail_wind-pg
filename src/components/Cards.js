const Cards = () => {
    return (  
        <div className="max-w-sm rounded overflow-hidden  m-10 bg-gray-200 hover:shadow-xl " >
        <img src="" alt="random photo" className="w-full" />
        <div className="bg-gray-400	 w-full h-10 text-black-400 font-bold justify-center pl-2 " >
          title
        </div>
            <div className="px-5 py-2" >
               name:
            </div>
            <div className="px-5 py-2" >
               name:
            </div>
            <div className="px-5 py-2" >
               name:
            </div>
            <div className="grid grid-cols-3 gap-4 mx-2  "  >
            <div className="bg-gray-400 rounded text-sm font-semibold flex 
             justify-center items-center mb-2 ">tag1 </div>     
               <div className="bg-gray-400 rounded text-sm font-semibold 
                  flex justify-center items-center mb-2">tag2 </div>  
               <div className="bg-gray-400 rounded text-sm font-semibold 
               flex justify-center items-center mb-2">tag3 </div>
    
            </div>
    
      </div>
    );
}
 
export default Cards;