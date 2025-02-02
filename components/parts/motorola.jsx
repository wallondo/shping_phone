import React, { useState } from "react";

export default function Motorola(params) {
      const [samsung,setSamsung] = useState([
              {
                  nome:"MOTOROLA A10",
                  img:"moto1.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"MOTOROLA NOTE LITE",
                  img:"moto2.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"MOTOROLA 12c PLUS",
                  img:"moto3.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"MOTOROLA IPAD",
                  img:"moto4.jpg",
                  limit:true,
                  estrela:5,
                  preco:Math.round(Math.random()*1000)+".000",
                  entrega:true
      
              },
              {
                  nome:"MOTOROLA ULTRA",
                  img:"moto5.jpg",
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