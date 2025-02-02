import React, { useState } from "react";

export default function Redmin(params) {
       const [samsung,setSamsung] = useState([
           {
               nome:"Redmi A10",
               img:"red1.jpg",
               limit:true,
               estrela:5,
               preco:Math.round(Math.random()*1000)+".000",
               entrega:true
   
           },
           {
               nome:"Redmi NOTE LITE",
               img:"red2.jpg",
               limit:true,
               estrela:5,
               preco:Math.round(Math.random()*1000)+".000",
               entrega:true
   
           },
           {
               nome:"Redmi 12c PLUS",
               img:"red3.jpg",
               limit:true,
               estrela:5,
               preco:Math.round(Math.random()*1000)+".000",
               entrega:true
   
           },
           {
               nome:"Redmi IPAD",
               img:"red4.jpg",
               limit:true,
               estrela:5,
               preco:Math.round(Math.random()*1000)+".000",
               entrega:true
   
           },
           {
               nome:"Redmi ULTRA",
               img:"red5.jpg",
               limit:true,
               estrela:5,
               preco:Math.round(Math.random()*1000)+".000",
               entrega:true
   
           }
   
       ])
       return(
           <section className="fones">
                       {
                           samsung.map((item,setItem)=>(
                           <div key={setItem}>
                           <span>
                               <img src={`/img/${item.img}`} alt="" />
                           </span>
                           <span>
                                   <h3>{item.nome}</h3>
                                   <h4>{item.limit?"LIMITADO":"ILIMITADO"}</h4>
                                   <h4>{item.estrela} ESTRELA</h4>
                                   <h3>{item.preco}.00A0</h3>
                                   <h4>{item.entrega?"Entrega gratis":"+5% DA ENTREGA"}</h4>
                           </span>
                           <button>Adicionar</button>
                           </div>
   
                           ))
                       }
   
           </section>
       )
   }
   
