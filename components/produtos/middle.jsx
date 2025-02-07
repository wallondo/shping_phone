import React from "react"
import "./middle.css";
import { Link } from "react-router-dom";



export default function Middle(params) {
    return(
        <section className="middle">
                <div className="box_video">
                    <video muted loop autoPlay>
                        <source src="/mp4/v1.mp4" type="video/mp4"/>
                        sem suporte para video
                    </video>
                    <div className="anucios">
                        <div>
                            <h1>Compre e ganhe descontos incriveis</h1>
                                    <span> <h1>+50</h1> <img src="/img/prom2.png" alt="" /></span>
                            <h2>Vantagens de comprar na <span>Shoping.Online</span></h2>
                            <h2>Entregas com descontos</h2>
                            <h2>Reenbolso garantido até 30 dias</h2>
                            <h2>Assistencia tecnica durante 15 dias</h2>

                            <button>Addicionar</button>
                        </div>
                    </div>
                </div>
                <div className="services">
                        <div>
                            <span>
                                <img src="/img/rep_pc2.jpg" alt="" />
                                <h3>Reparação de Computadores</h3>
                            </span>
                            <span>
                                <img src="/img/rev_1.jpg" alt="" />
                                <h3>Compra a segunda mão</h3>
                            </span>
                        </div>
                        <div>
                            <span>
                                <img src="/img/rep_c1.jpg" alt="" />
                                <h3>Reparação de Celulares</h3>
                            </span>
                            <span>
                                <img src="/img/rev_c1.jpg" alt="" />
                                <h3>Compra a segunda mão</h3>
                            </span>
                        </div>
                        <h3>
                            Entre em contacto e agende a sua marcação
                        </h3>
                        <button>marcar</button>
                </div>
        </section>
    )
}