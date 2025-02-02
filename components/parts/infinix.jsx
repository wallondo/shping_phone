import React, { useState } from "react";

export default function Infinix(params) {
          const [samsung,setSamsung] = useState([
              {
                  nome:"INFINIX A10",
                  img:"infi1.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"INFINIX NOTE LITE",
                  img:"infi2.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"INFINIX 12c PLUS",
                  img:"infi3.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"INFINIX IPAD",
                  img:"infi4.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"INFINIX ULTRA",
                  img:"infi5.jpg",
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