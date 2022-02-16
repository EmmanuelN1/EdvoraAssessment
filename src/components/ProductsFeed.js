import ProductSection from "./ProductSection"

function ProductFeed() {
  return (
    <div className="flex-grow m-5 text-white">
        <h1 className="text-3xl font-bold mb-3 ">Edvora</h1>
        <h3 className="text-lg text-gray-500 mb-3 font-semibold">Products</h3>
        <ProductSection/>

        <ProductSection/>

        <ProductSection/>
    </div>
  )
}

export default ProductFeed