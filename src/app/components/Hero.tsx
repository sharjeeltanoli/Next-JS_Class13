import Image from "next/image"
import Iphone from "/public/iphone14.png"
import Button from "./Button"
const Hero = () => {
  const heading="Experience the ultimate in smartphone technology with the iPhone 14. \n Stunning design, powerful performance, and advanced camera capabilities."
  return (
    <section className=" bg-gradient-to-r from-slate-700 to-gray-200 justify-items-center">
    <div className="flex flex-col md:flex-row items-center mx-4 pt-2 max-w-screen-lg ">
    <div className="flex-1">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold my-6 text-white py-4" >Iphone 14</h1>
        <p className="font-semibold text-white whitespace-pre-line"> {heading} </p>
        <p className="font-semibold text-white pt-8" >Upgrade your world today</p>
       <div className="mt-4"> 
         </div> <Button text={"Buy Now"} /> </div>
    <div className="flex-1">
<Image src={Iphone} alt="Iphone Photo" />
    </div>
    </div>
    
</section>
  )
}

export default Hero