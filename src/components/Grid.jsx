
import { useEffect, useState } from "react"
import { gridLetters, chaupayian } from "../assets/constants"

const Grid =({handleNotificationClick}) => {
    const [chaupai, setchaupai] = useState(null)
    useEffect(() => {
        console.log(gridLetters.length)
    }, [])
     
    const handleLetterClick = (idx) => {
        console.log(idx);
        // let chaupayi = chaupayian[idx%9]
        // console.log(chaupayi)
        setchaupai(chaupayian[idx%9])
        handleNotificationClick("Aapka karya Fal", chaupayian[idx%9].fal )

        if(window) window.location = '#answer'


    }
    return(
        <>
        <div className="flex justify-center mt-5">
        <div className="grid max-md:w-full md flex-wrap w-[700px] border-orange-500 border-2" style={{gridTemplateColumns:" repeat(15, minmax(0, 1fr))"}}>
        
        {gridLetters.map((letter, idx) => {
            return <span onClick={()=>handleLetterClick(idx)} className= "text-center active:bg-orange-500 hover:bg-orange-200 border-orange-400 border" key={idx}>{letter}</span>
        })}
        </div>




        </div>
        {chaupai && <div id="answer" className="flex justify-center flex-col w-[700px] max-md:w-screen text-left">

            <div>
                <span className="text-lg text-orange-500 font-bold">चौपाई: </span> 
                <span>{chaupai.chaupai}</span>
            </div>
            <div>
                <span className="text-lg text-orange-500 font-bold">अर्थ: </span> 
                <span>{chaupai.context}</span>
            </div>
            <div>
                <span className="text-lg text-orange-500 font-bold">फल: </span> 
                <span>{chaupai.fal}</span>
            </div>
        </div>}

        </>

    )
}

export default Grid