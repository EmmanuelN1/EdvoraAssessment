import Product from "../components/Product"

function ProductSection() {
  return (
    <div className="flex flex-col ">
      <h1 className="text-gray-500 text-md border-b pb-2 border-gray-500">Product Name</h1>  
      
        <div className="bg-black flex overflow-x-scroll  ">
          <Product/>
          <Product />
          <Product/>
          <Product/>
        </div>
    </div>
  )
}

export default ProductSection;