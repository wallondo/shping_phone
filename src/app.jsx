import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "../components/header/header";
import Slid from "../components/parts/slid";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function App(){
    const [tipo,setTipo] = useState("pc")
    const nav = useNavigate()
    const [eletronicos,setEletronicos] = useState([
        {
            nome:"LAPTOP SLIM G7634",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/pc1.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"pc"
        },
        {
            nome:"LAPTOP HP ELITE",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/pc3.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"pc"
        },
        {
            nome:"LAPTOP TOSHIBA LITE",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/pc4.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"pc"
        },
        {
            nome:"LAPTOP DEL SLIM",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/pc2.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"pc"
        },

        {
            nome:"MOTOROLA SLIM",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/moto1.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"cell"
        },
        {
            nome:"INFINIX SLIM",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/infi1.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"cell"
        },
        {
            nome:"GALAXY S23 ULTRA",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/s1.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"cell"
        },
        {
            nome:"IPHONE PRO MAX",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/iph1.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"cell"
        },

        {
            nome:"SMORT WATCH SLIM",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/rel1.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"rel"
        },
        {
            nome:"SMORT WATCH DEL",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/rel2.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"rel"
        },
        {
            nome:"SMORT WATCH EAPLE",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/rel3.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"rel"
        },
        {
            nome:"SMORT WATCH G-SKY",
            preco:Math.round(Math.random()*1000)+".000",
            img:"/rel4.jpg",
            id:Math.round(Math.random()*10000000000000)+"oasas",
            tipo:"rel"
        },
    ])

    useEffect(()=>{
        nav("/samsung")
    },[])
    return(
        <div className="app">
            <Header/>
            <Slid/>
            <section className="categoria_top">
                <h3>Diversos Tipos De Produtos</h3>
                <ol className="">
                    <li>
                        <div><img src="/img/mac1.jpg" alt="" /></div>
                        <h3>Iphone 13 plus</h3>
                        <small>1.339.000.00kz</small>
                    </li>
                    <li>
                        <div><img src="/img/fone1.jpg" alt="" /></div>
                        <h3>Iphone 13 plus</h3>
                        <small>1.339.000.00kz</small>
                    </li>
                    <li>
                        <div><img src="/img/coluna.jpg" alt="" /></div>
                        <h3>Iphone 13 plus</h3>
                        <small>1.339.000.00kz</small>
                    </li>              
                    <li>
                        <div><img src="/img/earfone1.jpg" alt="" /></div>
                        <h3>Iphone 13 plus</h3>
                        <small>1.339.000.00kz</small>
                    </li>
                    <li>
                        <div><img src="/img/headfone.jpg" alt="" /></div>
                        <h3>Iphone 13 plus</h3>
                        <small>1.339.000.00kz</small>
                    </li>
                    <li>
                        <div><img src="/img/relogio.jpg" alt="" /></div>
                        <h3>Iphone 13 plus</h3>
                        <small>1.339.000.00kz</small>
                    </li>
                    <li>
                        <div><img src="/img/headfone2.jpg" alt="" /></div>
                        <h3>Iphone 13 plus</h3>
                        <small>1.339.000.00kz</small>
                    </li>
                </ol>
            </section>
            <section className="destac">
                    <div>
                        <div>
                            <h3>entraga off</h3>
                            <h1>GALAXY S23 ULTRA LITE THE LOVE THE PRICE </h1>
                            <h3>From AO2093.000.00kz</h3>

                            <button>ver agora </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>entraga off</h3>
                            <h1>GALAXY S23 ULTRA LITE THE LOVE THE PRICE </h1>
                            <h3>From AO2093.000.00kz</h3>

                            <button>ver agora </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>entraga off</h3>
                            <h1>GALAXY S23 ULTRA LITE THE LOVE THE PRICE </h1>
                            <h3>From AO2093.000.00kz</h3>

                            <button>ver agora </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>entraga off</h3>
                            <h1>GALAXY S23 ULTRA LITE THE LOVE THE PRICE </h1>
                            <h3>From AO2093.000.00kz</h3>

                            <button>ver agora </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>entraga off</h3>
                            <h1>GALAXY S23 ULTRA LITE THE LOVE THE PRICE </h1>
                            <h3>From AO2093.000.00kz</h3>

                            <button>ver agora </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>entraga off</h3>
                            <h1>GALAXY S23 ULTRA LITE THE LOVE THE PRICE </h1>
                            <h3>From AO2093.000.00kz</h3>

                            <button>ver agora </button>
                        </div>
                    </div>
            </section>
            <section className="tranding_product">
                <div className="tranding_product_first_div">
                    <h3>DENTRE OS MELHORES PRODUTOS</h3>
                    <ol>
                        <li><Link onClick={()=>{setTipo("pc")}}>Computadores</Link></li>
                        <li><Link onClick={()=>{setTipo("cell")}}>Celulares</Link></li>
                        <li><Link onClick={()=>{setTipo("rel")}}>Relogios</Link></li>
                    </ol>
                </div>
                <div className="tranding_product_lis">
                    <ol>
                        {
                            eletronicos.map((ele,pos)=>(
                                (ele.tipo==tipo?

                                    <li key={pos}>
                                    <div><img src={`/img/${ele.img}`} alt="" /></div>
                                    <h3>{ele.nome}</h3>
                                    <h4>{ele.preco}.00kz</h4>
                                    <button>ver agora</button>
                                </li> 
                                :"")
                        ))
                        }
                    </ol>
                </div>
            </section>
            <div className="infor_middle">
                <div>
                    <h2>Os melhors chips do mercado</h2>
                    <h3>Compre e receba uma recarga de 1Gb de Net</h3>
                </div>
            </div>
            <section className="cellulares">
                <div>
                    <h3>Os mehores celulares</h3>
                    <ol>
                        <li><Link to={"iphone"}>Iphone</Link></li>
                        <li><Link to={"samsung"}>Samsung</Link></li>
                        <li><Link to={"motorola"}>Motorola</Link></li>
                        <li><Link to={"infinix"}>Infinix</Link></li>
                        <li><Link to={"redmin"}>Redmin</Link></li>
                    </ol>
                </div>
                <div>
                    <Outlet/>
                </div>
            </section>

            <section className="offer">
                <span>
                    <h2>Outras ofertas do Mercado</h2>
                    <h4>Ainda nem estão a 1 Semana</h4>
                </span>
                    <div>
                            <div>
                                <img src="/img/offer1.jpg" alt="" />
                                <h3>MOTOROLA Ultra Pro mAx</h3>
                                <small>Desconto 15% na compra</small>
                                <h4>1.234.78.00kz</h4>
                            </div>
                            <div>
                                <img src="/img/fon1.jpg" alt="" />
                                <h3>G-FORCE Ultra Pro LITE</h3>
                                <small>Desconto 15% na compra</small>
                                <h4>1.234.78.00kz</h4>
                            </div>
                            <div>
                                <img src="/img/fon2.jpg" alt="" />
                                <h3>BLACK STONE PRO </h3>
                                <small>Desconto 15% na compra</small>
                                <h4>1.234.78.00kz</h4>
                            </div>
                    </div>
                    <small>Compre e ganhe ofertas irresitiveis</small>
            </section>

            <div className="footer_div">
                <div>
                    <h3>Contacte-me para trabalhos do genêro</h3>
                </div>
                <div>
                    <ol>
                        <li>Seu DEV.WEB</li>
                        <li>(+224)941137038 whatzap (apenas)</li>
                        <li>(+224)958657217 chamadas (apenas)</li>
                    </ol>
                </div>
                <div>
                    <span>
                        Desenvolvedor : <Link>Portifólio</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}