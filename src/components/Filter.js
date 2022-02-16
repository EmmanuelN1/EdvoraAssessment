
function Filter() {
  return (
        <div  className="flex flex-col bg-black text-gray-500 m-5 h-full rounded-lg pt-3 pb-7 pr-7 pl-7">
                  <h1 className="text-md text-gray-500 border-b pb-2 border-gray-500">Filter</h1> 

                  <select name="country" id="" className="bg-zinc-800 p-1 rounded-sm text-white outline-none mt-2">
                    <option value="">Select Country</option>  
                    <option value="">Nigeria</option>  
                    <option value="">Ghana</option>  
                  </select> 

                  <select name="country" id="" className="bg-zinc-800 p-1 rounded-sm text-white outline-none mt-2">
                    <option value="">Select State</option>  
                    <option value="">Lagos</option>  
                    <option value="">Abuja</option>  
                  </select>   


                  <select name="district" id="" className="bg-zinc-800 p-1 rounded-sm text-white outline-none mt-2">
                    <option value="">Select District</option>  
                    <option value="">Abule Egba</option>  
                    <option value="">Casso</option>  
                  </select>     

        </div>
  )
}

export default Filter