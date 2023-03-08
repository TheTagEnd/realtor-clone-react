import  { useState } from "react";

export default function CreateListening() {
 const [formData ,setFormData ] = useState({
    type:"rent",
    name:"",
    bedrooms:1,
    bathrooms:1,
    parking:false,
    furnished:false,
    address:"",
       description:"",
       offer:true,
       regularPrice:0,
       discountedPrice:0,


 });
 const{type ,name ,bedrooms ,bathrooms ,parking , furnished ,address ,description ,offer ,regularPrice ,  discountedPrice} =formData;
 function onChange(){

 }
    return (
    <main className="max-w-md  px-2  mx-auto " >
        <h1 className=" text-3xl mt-6  text-center font-bold "  >
            Create A Listing
        </h1>
        <form>
            <p className="text-lg mt-6 font-semibold" >Sell  / Rent</p>
            <div className="flex  " >
                <button className={`mr-3  px-7  py-3 font-medium text-sm uppercase  shadow-md rounded-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full 
                
                 ${ type === "rent" ? "bg-white text-black" : "bg-slate-500 text-white" }
                
                `}  type="button" id="type" value="sale"   onchange={onchange} >
                    sell
                </button>
                <button className={` ml-3 px-7  py-3 font-medium text-sm uppercase  shadow-md rounded-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full 
                
                ${ type === "sale" ? "bg-white text-black" : "bg-slate-500 text-white" }
               
               `}  type="button" id="type" value="rent"   onchange={onchange} >
                   rent
               </button>
                           

            </div>
            
            
            <p className="text-lg mt-6 font-semibold" >Name</p> 
            <input  type="text" id="name" value={name}  onChange={onchange}  placeholder="Name" maxLength="32" minLength="10" required className=" w-full px-4 py-2 text-xl text-gray-700
            bg-white border border-gray-300 rounded transition duration-50 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-300 mb-6 
            " /> 
            <div className=" flex space-x-6  justify-start mb-6  " >
                <div className="" >
                 <p className="text-lg font-semibold  ">
                    Beds
                 </p >
                 <input type="number" id="bedrooms" value={bedrooms}  onchange={onChange} min="1" max="50" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-700 rounded" />
              

                </div>

                <div className="" >
                 <p className="text-lg font-semibold  ">
                    Bathrooms
                 </p >
                 <input type="number" id="bathrooms" value={bathrooms}  onchange={onChange} min="1" max="50" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-700 rounded" />
              

                </div>
                

        
                           

            </div>
            <p className="text-lg mt-6 font-semibold" >Parking Spot</p>
            <div className="flex  " >
                <button className={`mr-3  px-7  py-3 font-medium text-sm uppercase  shadow-md rounded-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full 
                
                 ${ !parking ? "bg-white text-black" : "bg-slate-500 text-white" }
                
                `}  type="button" id="parking" id="parking" value={true}   onchange={onchange} >
                   Yes
                </button>
                <button className={` ml-3 px-7  py-3 font-medium text-sm uppercase  shadow-md rounded-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full 
                
                ${ parking ? "bg-white text-black" : "bg-slate-500 text-white" }
               
               `}  type="button" id="parking" value={false}   onchange={onchange} >
                   No
               </button>
                           

            </div>
            <p className="text-lg mt-6 font-semibold" >Furnsihed</p>
            <div className="flex  " >
                <button className={`mr-3  px-7  py-3 font-medium text-sm uppercase  shadow-md rounded-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full 
                
                 ${ !furnished ? "bg-white text-black" : "bg-slate-500 text-white" }
                
                `}  type="button" id="furnished" value={true}   onchange={onchange} >
                    Yes
                </button>
                <button className={` ml-3 px-7  py-3 font-medium text-sm uppercase  shadow-md rounded-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full 
                
                ${ furnished ? "bg-white text-black" : "bg-slate-500 text-white" }
               
               `}  type="button" id="furnished" value={false}   onchange={onchange} >
                 NO
               </button>
                           

            </div>

            <p className="text-lg mt-6 font-semibold" >Address</p> 
            <textarea  type="text" id="address" value={address}  onChange={onchange}  placeholder="Address"  required className=" w-full px-4 py-2 text-xl text-gray-700
            bg-white border border-gray-300 rounded transition duration-50 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-300 mb-6 
            " /> 

<p className="text-lg  font-semibold" >Description</p> 
            <textarea  type="text" id="description" value={description}  onChange={onchange}  placeholder="Description"  required className=" w-full px-4 py-2 text-xl text-gray-700
            bg-white border border-gray-300 rounded transition duration-50 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-300 mb-6 
            " /> 


<p className="text-lg mt-6 font-semibold" >Offer</p>
            <div className="flex  " >
                <button className={`mr-3  px-7  py-3 font-medium text-sm uppercase  shadow-md rounded-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full 
                
                 ${ !offer ? "bg-white text-black" : "bg-slate-500 text-white" }
                
                `}  type="button" id="offer" value={true}   onchange={onchange} >
                    Yes
                </button>
                <button className={` ml-3 px-7  py-3 font-medium text-sm uppercase  shadow-md rounded-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full 
                
                ${ offer ? "bg-white text-black" : "bg-slate-500 text-white" }
               
               `}  type="button" id="offer" value={false}   onchange={onchange} >
                 NO
               </button>
                           

            </div>
               <div >
                <div >
                     <p className="text-lg font-semibold ">Regular Price</p>
                     <div className="flex w-full justify-center items-center" >
                        <input type="number" id="regularPrice" value={regularPrice} onchange={onChange} required className="w-full px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 bg-white focus:border-slate-300 text-center"  />
                        {
                        type === "rent" && (
                            <div className=" text-md w-full whitespace-nowrap  ml-4"  > <p>$ / MONTH</p></div>
                        )
                     }
                     </div>
                     </div>
                </div>
            {
              offer && (
                <div >
                <div >
                     <p className="text-lg font-semibold ">Discounted Price</p>
                     <div className="flex w-full justify-center items-center" >
                        <input type="number" id="discountedPrice" value={discountedPrice} onchange={onChange} required={offer} className="w-full px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 bg-white focus:border-slate-300 text-center"  />
                        {
                        type === "rent" && (
                            <div className=" text-md w-full whitespace-nowrap  ml-4"  > <p>$ / MONTH</p></div>
                        )
                     }
                     </div>
                     </div>
                </div>
              )
            }
<div className="mb-6">
     <p className="text-lg font-semibold "> Images</p>
     <p className="text-gray-600" >The First Image will Be Cover (max 6) </p>
     <input type="file" id="images" onchange={onChange} accept=".jpg,.png,.jpeg" multiple required  className="w-full px-3 py-1.5  text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
     focus:bg-white focus:border-slate-600
     "></input>
</div>

<button type="submit" className="mb-6 w-full px-7 py-3 bg-blue-600 text-white  font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out  " > Create Listing</button>
        </form>
    </main>
  )
}
