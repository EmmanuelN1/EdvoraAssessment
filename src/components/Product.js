import Image from "next/image"
import logo from "../assets/avatar.png"

function Product() {
  return (
    <div className="bg-zinc-800 m-5 p-3 rounded-lg flex flex-col lg:flex-row">
      <div className=" lg:m-0 text-center  lg:flex-row lg:h-full">
              <Image
                        src={logo}
                        width={200}
                        height={60}
                        objectFit="contain"
                        className="justify-items-left"
                    />

          <p>Location</p>
          <p>Desciption</p>
         
      </div>
               

        <div className="flex flex-grow flex-col text-center">
                    <p>Product</p>
                    <p>Brand</p>
                    <p>$ <span>20.00</span> </p>
                    <p>Date</p>
        </div>

    </div>
  )
}

export default Product