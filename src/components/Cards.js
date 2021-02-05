import React from 'react'
import {classes} from "../assets/Classes"
import me from '../assets/me.jpg'
const Cards = () => {
    return (  
        <React.Fragment>
 <div className="max-w-sm rounded overflow-hidden   m-10 bg-gray-200 hover:shadow-xl " >
        <img src={me} alt="random photo"  className="w-full " />
        <div className="bg-gray-400 w-full h-10 pt-1 pl-1 text-black-400 font-bold inline-block align-middle justify-center items-center" >
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
            <div className={`${classes.tag}`}>tag1 </div>     
               <div className={`${classes.tag}`}> tag2 </div>  
               <div className={`${classes.tag}`}>tag3 </div>
             </div>
          </div>

          <div className="max-w-md h-52  bg-blue-200 grid grid-cols-3 overflow-hidden rounded m-10 " >
           <div className="col-span-1" > 
          <img src={me} className="w-full h-full  " ></img>
           </div>
           <div className="col-span-2 p-2 relative">
            <div className="bg-gray-400 w-full h-3 rounded " > </div>
            <div  className="text-white font-bold ">text </div>
            <button className="mb-1  text-white bg-indigo-500 py-2 px-6 rounded 
            hover:shadow-lg font-bold " >Like</button>
            <div className="box-border border-2 h-10 w-full bottom-1 px-2 inline-grid grid-cols-3  justify-betweenr " >
              <div className="w-6 h-6 rounded-full bg-gray-400  " ></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 " ></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 " ></div>
            </div>
           </div>
          </div>
        </React.Fragment>
       
    );
}
 
export default Cards;