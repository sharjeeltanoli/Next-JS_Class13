
const Feature = () => {
    const features = [
        {  title: "Stunning Display",
            description: "The iPhone 14 features a Super Retina XDR display for vibrant colors and incredible detail."},
        { title: "Advanced Camera System",
            description: "Capture stunning photos and videos with the advanced dual-camera system."},
        { title: "A15 Bionic Chip",
            description: "Experience lightning-fast performance with the A15 Bionic chip."},
        { title: "5G Capable",
            description: "Stay connected with ultra-fast 5G speeds.",}, ]

    return (
    <div className="mx-auto text-center pt-12 ">
        <h3 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-700 ">Features</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 h-auto">
        
{
features.map((details)=>{
    return(

<div className="border text-center bg-gradient-to-r from-slate-400 to-gray-100 shadow-lg m-2">
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

export default Feature