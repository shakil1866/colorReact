import { useState } from "react"

const App = () => {
let [color, setColor] = useState("lightgreen")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

<div className="fixed flex justify-center flex-wrap bottom-2 inset-x-0">
<div className="flex flex-wrap shadow-lg bg-[#aaa7a7] px-3 py-2 rounded-xl font-medium">
  <button className="outline-none px-4 py-1 rounded-full text-white mt-4 mb-4 bg-red-500"  onClick={() => setColor("red")}>Red</button>  
  <button className="outline-none px-4 py-1 rounded-full mt-4 mb-4  bg-white" onClick={()=> setColor("white")}>White</button>  
  <button className="outline-none px-4 py-1 rounded-full text-white mt-4 mb-4 bg-black " onClick={()=> setColor("black")}>Black</button>  
  <button className="outline-none px-4 py-1 rounded-full text-white mt-4 mb-4 bg-blue-500" onClick={()=> setColor("blue")}>Blue</button>  
  <button className="outline-none px-4 py-1 rounded-full  text-white mt-4 mb-4 bg-green-500" onClick={()=> setColor("green")}>Green</button>  
  <button className="outline-none px-4 py-1 rounded-full mt-4 mb-4 bg-yellow-500"  onClick={()=> setColor("yellow")}>Yellow</button>  
  <button className="outline-none px-4 py-1 rounded-full  text-white mt-4 mb-4 bg-orange-600"  onClick={()=> setColor("orange")}>Orange</button>
</div> 

</div>
      </div>
    </>
  )
}

export default App
