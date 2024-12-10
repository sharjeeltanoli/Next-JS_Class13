import { FC } from "react"

const Button:FC<{text:string}> = (props) => {
  
  return (
    <div>
<button className="border rounded-xl py-1 bg-cyan-600 border-cyan-700 text-white w-24 shadow-lg font-semibold" >
{props.text}
</button>
       

    </div>
  )
}

export default Button