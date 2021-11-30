import React, { useEffect, useState } from "react";

import Card from "./card";
import logo from "../../../assets/Logo.png";
import s from "../home/home.module.css"
import axios from "axios";
import mesa from "../home/mesa"

export default function HomeResto(){
    // const [mesas, setMesas] = useState()    
    // useEffect(()=>{
    //     axios.get("http://localhost:3001/api/mesa/")
        
    //     .then((json) => setMesas(json.data)  
        
    // },[])
    
    
    let mesaTrue = mesa.filter(m => m.estado === true)
    console.log(mesaTrue)
    return(
        <div className={s.gridcontainer}>
            

        <div className={s.Mesas}>
            {

                mesaTrue?.map(el =>{
                    
                    return(
                        <div>
                    <Card idMesa={el.id} name={el.name} />
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