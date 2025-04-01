import React from "react";
import youtube from "../../assets/youtube.png"
import twitter from  "../../assets/twitter.png";
import telegram  from "../../assets/telegram.png"



const Task=()=>{
    const tasks=[
        {
            logo:youtube,
            texts:"Subscribe to yooutube"

        },
        {
            logo:twitter,
            texts:"Follow us no X"

        },
        {
            logo:telegram,
            texts:"Join us  on telegram"

        },
    ]
    return(
        <div className="card"

        style={{
         // height:"780px", 
         paddingTop:"0px",
         backgroundColor:"#555553",
         height:"83vh",
         width:"100%",
         paddingRight:"10px",
         paddingLeft:"10px"

         }}
        
        >
            <div style={{color:"transparent"}}>

        Welcome to the Home screen! ff gkgkglggkg gggg mmmgmg gg
            </div>
            {/* {tasks.map(()=>( */}
                {tasks.map(({logo, texts})=>(
        <div
        style={{
            height:"100px",
            background:"white",
            width:"100%",
            borderRadius:"10px",
            padding:"10px",
            marginTop:"10px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        }}
        >
            <img
            src={logo}
            alt="logo"
            
            style={{
                width:"80px",
                borderRadius:"5px",
                height:"90%",
                marginRight:"10px"

            }}/>
                



                <div
                style={{

                    width:"70%"
                }}
                
                >{texts}</div>


            
            
            
            
            
            </div>
        ))
    }
    

        </div>

    )
}
export default Task