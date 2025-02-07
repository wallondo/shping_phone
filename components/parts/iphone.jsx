import React, { useState } from "react";

export default function Iphone(params) {
    const [samsung,setSamsung] = useState([
              {
                  nome:"IPHONE A10",
                  img:"iph1.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"IPHONE NOTE LITE",
                  img:"iph2.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"IPHONE 12c PLUS",
                  img:"iph3.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"IPHONE IPAD",
                  img:"infi5.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"IPHONE ULTRA",
                  img:"iph4.jpg",
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
                              <button>ver agora</button>
                              </div>
      
                              ))
                          }
      
              </section>
          )
      }