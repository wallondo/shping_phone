import React, { useEffect, useState } from "react";
import "./car.css";


export default  function Car({cars,setCompras}){
    const [car,setCar] = useState(cars)
    const [soma,setSoma] = useState(0)

    useEffect(()=>{
        let t = soma;
        cars.map((ele,pos)=>{
            setSoma((soma)=>soma+ele.preco)
        })
        setCar([...cars])
        
    },[cars])
    console.log(cars);

    const finalizar_compra = () =>{
        document.getElementById("form_compra").classList.toggle("none")
    }
    const canselar = ()=>{
        document.getElementById("form_compra").classList.toggle("none")

    }
    const finalizar = ()=>{
        alert("finalizado")
    }
    const esvaziar = ()=>{
        setCompras([]);
        document.getElementById("car").classList.toggle("car_show");
    }
    const continuar = ()=>{
        document.getElementById("car").classList.toggle("car_show");
    }
    return(
        <div className="car" id="car">
                <div className="bts_car">
                    <button onClick={continuar}>Comtnuar a comprar</button>
                    <button onClick={finalizar_compra}>Finalizar a compra</button>
                </div>
                <section className="tela_car" id="tela_car">
                        <form action="" method="post" className="form_compra" id="form_compra">
                            <h3>Preencha Todos os Campos</h3>
                            <span>
                                <div>
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" required  />
                                </div>
                                <div>
                                    <label htmlFor="nome">Número</label>
                                    <input type="number"required  />
                                </div>
                                <div>
                                    <label htmlFor="nome">Nome (2 Opção)</label>
                                    <input type="text" required />
                                </div>
                                <div>
                                    <label htmlFor="nome">Número (2)</label>
                                    <input type="number" required />
                                </div>
                            </span>
                            <span>
                                <div>
                                    <h4>Metódo de Pagamento</h4>
                                    <select name="" id="">
                                        <option value="presencial">Presencial</option>
                                        <option value="transferencia">Transferência</option>
                                        <option value="deposito">Deposito</option>
                                        <option value="tpa">TPA</option>
                                    </select>
                                </div>
                            </span>
                            <span>
                                <div>
                                    <h4>Localização exata</h4>
                                    <textarea name="" id=""></textarea>
                                </div>
                            </span>
                            <div className="form_compra_action">
                                <button onClick={canselar}>Canselar</button>
                                <button onClick={finalizar}>Finalizar</button>
                            </div>
                        </form>
                        <span className="total">
                           <div>Total da Compra</div>
                        </span>
                        <ol>
                            {
                                car.map((pro,pos)=>(
                                    <li key={pos}>
                                        <td className="infor_pro">
                                            <img src={`${pro.img}`} alt="" />
                                            <span>
                                                <h3>{pro.nome}</h3>
                                                <h4>Codigo : {pro.id}</h4>
                                            </span>
                                        </td>
                                        <td className="tds">{pro.preco}.000</td>
                                        <td className="tds">
                                           <button>+</button> {pro.quant}5 <button>-</button>
                                        </td>
                                        <td className="tds">{pro.total}</td>
                                    </li>
                                )) 
                            }
                        </ol>
                        <span className="total">
                           <div>{soma}.00.kz + IVA</div>
                        </span>
                </section>
                <div className="dic_form">

                </div>
                    <div className="action_car">
                        <button onClick={esvaziar}>Esvaziar Carrinho</button>
                        <button onClick={finalizar_compra}>Finalizar a comprar</button>
                    </div>
        </div>
    )
}
