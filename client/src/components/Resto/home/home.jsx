import React, { useEffect, useState } from "react";

import Card from "./card";
import logo from "../../../assets/Logo.png";
import s from "../home/home.module.css"
import axios from "axios";


export default function HomeResto(){
    const [mesas, setMesas] = useState()
    
   
    
    useEffect(()=>{
        axios.get("http://localhost:3001/api/mesa/")
        
        .then((json) => setMesas(json.data))
       
        
    },[])
    console.log(mesas)
    
    return(
        <div className={s.gridcontainer}>
            

        <div className={s.Mesas}>
            {
                mesas?.map(el =>{
                    return(
                        <div>
                    <Card  name={el.name} />
                    </div>
                    )
                })
            }
        </div>
        <div className={s.Logo}>
        <img src={logo} alt="Logo" width="15%" />
        </div>
        <div className={s.Rueda}></div>

        </div>
    )
}