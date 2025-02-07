import React, { useState } from "react";
import "./produtos.css";
import Header from "../header/header";
import { NavLink } from "react-router-dom";
import Middle from "./middle";


export default function Produtos(){
    const [pos,setPos] = useState(0)
    const [img,setImg] = useState([
        "/img/gam1.jpg",
        "/img/gam2.jpg",
        "/img/gam3.jpg"
    ])
    const [produtos,setProdutos] = useState([
        {
            nome:"DELL LATITUDE",
            img:"/img/pc1.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"DELL SALIM G-45",
            img:"/img/pc2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HP FONT ATX",
            img:"/img/pc3.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"SAMSUNG OPLIXS",
            img:"/img/pc4.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HP SLIM SCREEN ON",
            img:"/img/pc5.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"MAC ON SLIM",
            img:"/img/mac.png",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"MIX LAP-DESK",
            img:"/img/mac1.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HP ULTRA PLUS",
            img:"/img/pc6.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HP DARK-LITE",
            img:"/img/pc7.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HP COMPAC",
            img:"/img/pc8.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HP G-force",
            img:"/img/pc9.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HP PRO",
            img:"/img/pc10.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"pc",
            id:Math.round(Math.random()*1045700032423)
        },


        {
            nome:"REDMI G-force",
            img:"/img/red1.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"REDMI NOTE",
            img:"/img/red2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"REDMI NOTE A20",
            img:"/img/red3.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"S23 G-force",
            img:"/img/s1.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"GALAXY EDJ 7",
            img:"/img/s2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"GALAXY EDJ NORMAL",
            img:"/img/s4.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"A40 ULTRA",
            img:"/img/s5.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"INFINIX A40",
            img:"/img/infi1.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"NOKIA 30",
            img:"/img/infi2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"REDMI ULTRA PLUS",
            img:"/img/infi3.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"INFINIX ULTRA",
            img:"/img/infi4.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"INFINIX PLUS",
            img:"/img/infi5.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"IPHONE PRO",
            img:"/img/iph1.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"IPHONE 12",
            img:"/img/iph2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"IPHONE PRO MAX",
            img:"/img/iph3.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        }, 
        {
            nome:"IPHONE 11",
            img:"/img/iph4.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"cell",
            id:Math.round(Math.random()*1045700032423)
        },
       


        {
            nome:"HeadPhone G-LITE",
            img:"/img/head1.png",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"hed",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HeadPhone GAME-A",
            img:"/img/head2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"hed",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HeadPhone GAME-1B",
            img:"/img/head3.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"hed",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HeadPhone ULTRA MUDE",
            img:"/img/head4.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"hed",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"HeadPhone G-force",
            img:"/img/head5.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"hed",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"SOM POWER PLUS",
            img:"/img/head6.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"hed",
            id:Math.round(Math.random()*1045700032423)
        }, 
        {
            nome:"G-force GAME-AC",
            img:"/img/headfone2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"hed",
            id:Math.round(Math.random()*1045700032423)
        }, 
        {
            nome:"ULTRA LITE",
            img:"/img/head7.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"hed",
            id:Math.round(Math.random()*1045700032423)
        },



        {
            nome:"LITE AND RELAX",
            img:"/img/ear1.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"ear",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"EAR SLIM",
            img:"/img/ear2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"ear",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"EAR ULTRA SLIM",
            img:"/img/ear3.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"ear",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"SLIM PINK",
            img:"/img/ear4.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"ear",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"EAR G-force",
            img:"/img/ear5.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"ear",
            id:Math.round(Math.random()*1045700032423)
        },


        {
            nome:"SMORT WATCH EAPLE",
            img:"/img/rel1.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"wha",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"WATCH EAPLE PINK",
            img:"/img/rel2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"wha",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"SMORT WATCH WHITE",
            img:"/img/rel3.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"wha",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"SMORT WATCH BLACK",
            img:"/img/rel7.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"wha",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"SMORT WATCH SIMPLE",
            img:"/img/rel8.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"wha",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"SMORT WATCH INFINIX",
            img:"/img/rel9.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"wha",
            id:Math.round(Math.random()*1045700032423)
        },




        {
            nome:"PORT GBL",
            img:"/img/col1.png",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"col",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"BLOOTOPH SOM",
            img:"/img/coluna.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"col",
            id:Math.round(Math.random()*1045700032423)
        },
        {
            nome:"BOX SOM BLOOTOH",
            img:"/img/offer2.jpg",
            preco:Math.round(Math.random()*1000)+".000",
            estrela:"",
            entrega:"",
            desc:"",
            tipo:"col",
            id:Math.round(Math.random()*1045700032423)
        }
    
    ])

    const [all_produtos,setAll_produtos] = useState(produtos)

    const [item,setItem] = useState("hed")

    const search = (params)=>{
        let po = produtos.filter((pro,pos)=>{
            return pro.nome.toLowerCase().includes(params.toLowerCase())
        })
        console.log(po);
        
        setAll_produtos(po)
    }


    return(
        <div className="produtos">
            <Header/>
            <section className="produtos_sec1">
                    <div>
                        <h1>HEADFONE G-FORCE </h1>
                        <h2>feito para gamers e com 100% de exolamento</h2>
                        <h3>Encomende até 4 e receba mais um de bonos</h3>
                        <button>adcionar</button>
                    </div>
                    <div>
                        <img src={img[pos]} alt="" />
                        <span>
                            <button onClick={()=>{setPos(0)}}></button>
                            <button onClick={()=>{setPos(1)}}></button>
                            <button onClick={()=>{setPos(2)}}></button>
                        </span>
                    </div>
            </section>
            <section className="produtos_sec2">
                <div>
                    <h2>ESPLORE TODOS OS NOSSOS PRODUTOS</h2>
                    <ol>
                        <li><NavLink onClick={()=>{setItem("pc")}}>Computadores</NavLink></li>
                        <li><NavLink onClick={()=>{setItem("cell")}}>Celulares</NavLink></li>
                        <li><NavLink onClick={()=>{setItem("hed")}}>HeadPhone</NavLink></li>
                        <li><NavLink onClick={()=>{setItem("ear")}}>EarPhone</NavLink></li>
                        <li><NavLink onClick={()=>{setItem("wha")}}>Reolgios</NavLink></li>
                        <li><NavLink onClick={()=>{setItem("col")}}>Colunas</NavLink></li>
                    </ol>
                </div>
                    <div className="produtos_list">
                        <div>
                            <input type="text"  onChange={(evt)=>{search(evt.target.value)}} placeholder="Pesquisar produto : "/>
                            <span><img src="/img/lupa.jpg" alt="" /></span>
                        </div>
                        <ol>
                            {
                                all_produtos.map((pr,po)=>(
                                    (pr.tipo==item?
                                    <li key={po}>
                                        <span><img src={`${pr.img}`} alt="" /></span>
                                        <h3>{pr.nome}</h3>
                                        <h3>394.000.00kz</h3>
                                        <h4>5 Estrela</h4>
                                        <h4>Entrega Gratuita</h4>
                                        <button>adicionar</button>
                                    </li>
                                    :"")
                                ))
                            }
                           
                        </ol>
                    </div>
            </section>
            
            <Middle/>

            <div className="produtos_footer">
                <div>
                    <article className="nos">
                            <h2>Sobre a Shoping.ONLINE</h2>
                            <p>
                            Bem-vindo à Shoping.ONLINE!
                            Sua loja virtual de eletrônicos com os melhores produtos e marcas. Temos smartphones, notebooks, acessórios e muito mais para atender suas necessidades tecnológicas.
                            Oferecemos compras fáceis, seguras e entregas rápidas. Nosso compromisso é garantir qualidade, preço justo e satisfação total.
                            Aproveite nossas ofertas e transforme sua rotina com os melhores gadgets!
                            </p>
                    </article>
                    <article className="serv">
                        <h3>Outros Serviçcos</h3>
                        <ol>
                            <li>Reparação de Celulares</li>
                            <li>Reparação de Computadores</li>
                            <li>Reparação de Colunas de som</li>
                            <li>Istalação De Sistemas Operacionais</li>
                            <li>Istalação De Sistemas De Gestão</li>
                            <li>Istalação De Sistemas De Faturação</li>
                        </ol>
                    </article>
                    <nav>
                        <h3>Outros sites</h3>
                        <ol>
                            <li><NavLink>Github.com.ao</NavLink></li>
                            <li><NavLink>vercel.imobiliários.com.ao</NavLink></li>
                            <li><NavLink>vercel.dashaboar.com.net</NavLink></li>
                            <li><NavLink>vercel.imobiliários.com.ao</NavLink></li>
                            <li><NavLink>vercel.Angopraça.com.ao</NavLink></li>
                        </ol>
                        <div>
                            <span><NavLink target="_blank" to={"https://www.facebook.com/sadraquemelhaquinitoquinguri.jose"}><img src="/img/fb.png" alt="" /> </NavLink></span>
                            <span><NavLink target="_blank" to={"http://wa.me/244941137038?text=Saudações! %0A Gostaria de abordar alguns pontos consigo!"}><img src="/img/contact2.png" alt="" /> </NavLink></span>
                            <span><NavLink target="_blank" to={"mailto:quinguri01@gmail.com?subject=Saudações! %0A Gostaria de abordar alguns pontos consigo!"}><img src="/img/contact3.png" alt="" /> </NavLink></span>
                            <span><NavLink target="_blank" to={"https://github.com/wallondo"}><img src="/img/contact4.jpg" alt="" /> </NavLink></span>
                        </div>
                    </nav>
                    <article className="contacts">
                        <h3>Fale com o Desenvolvedor Web</h3>
                            <ol>
                                <li><img src="/img/contact1.png" alt="" /><address>(+224)958657217</address></li>
                                <li><img src="/img/contact2.png" alt="" /><address>(+224)941137038</address></li>
                                <li><img src="/img/contact3.png" alt="" /><address>quinguri@01.com</address></li>
                                <li> <img src="/img/contact4.jpg" alt="" /> <address>github.com/wallondo</address></li>
                            </ol>
                        <h3>Tipos De Serviços Para ti</h3>
                        <ol>
                                <li>Hot Pages</li>
                                <li>Portifólios</li>
                                <li>Lang Pages</li>
                                <li>Loja Virtual</li>
                                <li>Sites Instituícionais</li>
                                
                            </ol>
                    </article>
                </div>
                <p className="copy">
                    copiryte@2024/02/02 by quingury
                </p>
            </div>
        </div>
    )
}
