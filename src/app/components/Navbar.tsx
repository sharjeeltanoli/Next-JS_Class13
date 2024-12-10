import Image from "next/image" 
import Logo from "/public/apple.png"
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
<header className="flex justify-around h-14 items-center sticky top-0 bg-white ">
<div className="w-8">
  <Image src={Logo} alt="Apple Logo"></Image>
</div>
<ul className=" flex space-x-6 font-extralight">
    <li>Store</li>
    <li>Iphone</li>
    <li>Mac</li>
    <li>Accessories</li>
    <li>Support</li>
</ul>
<div> <ShoppingCart/> </div>

</header>

  )
}

export default Navbar