import axios from 'axios';
import { useEffect, useState } from "react";
import Buscador from './Buscador';

//url api
const urlApi = 'https://api.victorsanmartin.com/feriados/en.json';

const MiApi = () => {
    const [feriados, setFeriados] = useState([]);
    const [buscador, setBuscador] = useState('');

    //function async
    const traerFeriados = async () => {
        const {data} = await axios (urlApi);
        const dataOrdenada = data.data.sort((a, b) => (a.title.localeCompare(b.title)));
        setFeriados(dataOrdenada);
    };
    //useffect
    useEffect(() => {
        traerFeriados();
    }, []);

//    const filtrar = () => {
//         const feriadoFiltrado= feriados.filter((feriado)=> {
//             return feriado.title.toLowerCase().includes(buscador.toLowerCase())
//         });
//         console.log(feriadoFiltrado);
//     };
    return (
        <div style={{width:'70vw', height:'230vw', display:'flex', flexDirection:'column', backgroundColor:'#e4fffe', marginLeft:'15vw'}}> 
            <Buscador buscador={buscador} setBuscador= {setBuscador}/>
            {feriados
            .filter((feriado)=> {
            return feriado.title.toLowerCase().includes(buscador.toLowerCase()) || 
            feriado.type.toLowerCase().includes(buscador.toLowerCase())
            }).map((feriado) =>
            (<h2 style= {{color:"#000"}}key={feriado.title}> {feriado.title} <h5> {feriado.date}</h5></h2> )
            )}
        </div>

        
    )
    };

export default MiApi;