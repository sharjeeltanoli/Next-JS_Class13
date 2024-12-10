import Image from "next/image"
import BackColor from "/public/colors.png"

const Color = () => {
  return (
    <div className=" text-center py-9 px-4 justify-items-center mt-2">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-700 "> Finish. Pick your Favourite Color </h3>
<div className="max-w-screen-lg pt-10">
  <Image src={BackColor} alt="iphone 14 Blue Color" />
</div>

 


    </div>
  )
}

export default Color