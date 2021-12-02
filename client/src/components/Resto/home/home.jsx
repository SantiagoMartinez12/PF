import React, { useEffect, useState } from "react";
import AutorizaMesa from "../home/autorizaMesa"
import Card from "./card";
import logo from "../../../assets/Logo.png";
import s from "../home/home.module.css"

import { useDispatch, useSelector } from "react-redux";
import { getDetalle, getMesa } from "../../../store/actions";

export default function HomeResto(){
    const mesas = useSelector(state => state.mesas)
    
    const dispatch = useDispatch()
    // const getMesas = dispatch(getMesa("397799a7-45df-4051-a12d-e880cdd59c0b"))

     
    useEffect(()=>{
      setInterval(()=>{
            dispatch(getMesa("9fc5065b-520f-42a9-9755-422b7f552539")) // id resto

        }, 5000)
       
    },[])
    
    
    let mesaTrue = mesas?.filter(m => m.estado === true)
    // console.log(mesaTrue)
    // console.log(mesas)
    return(
        <div className={s.gridcontainer}>
            
            

        <div className={s.Mesas}>
            <div>
            <AutorizaMesa/>
            </div>
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