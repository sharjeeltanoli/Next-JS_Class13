import Image from "next/image"
import Fitness from "/public/fitness.jpeg"
import Arcade from "/public/arcade.jpeg"
import TV from "/public/tv.jpeg"
import News from "/public/news.jpeg"
const Apps = () => {
    const apps = [
        {  
            icons:<Image src={TV} alt="apple tv icon"/>,
            title: "Apple TV+",
            description: "3 free months of original films and series."},
        {   icons:<Image src={Arcade} alt="apple tv icon"/>,
            title: "Apple Arcade",
            description: "3 free months of incredibly fun, uninterrupted gameplay."},
        {   icons:<Image src={Fitness} alt="apple tv icon"/>,
            title: "Apple Fitness+",
            description: "3 free months of workouts, from HIIT to Meditation."},
        {   icons:<Image src={News} alt="apple tv icon"/>,
            title: "Apple News+",
            description: "3 free months of top stories from leading publications.",}, ]

    return (
    <div className="mx-auto text-center pt-12 max-w-screen-lg ">
        <h3 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-700 ">What&apos;s New</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 h-auto">
        
{
apps.map((details)=>{
    return(

<div className="text-center m-2 justify-items-center">
<div className="w-10 justify-items-center">{details.icons}</div>
<h3 className="text-xl font-bold text-cyan-700 py-4">{details.title}</h3>
<p>{details.description}</p>


</div>
    )
})

}


    </div>
    </div>
  )
}

export default Apps
