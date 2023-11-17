import React from 'react';

const Buscador = ({buscador, setBuscador}) => {
    
    return  <div style={{backgroundColor:'#58D68D'}}>
    <h2 style={{color:'black'}}>¿Ya estás cansado?</h2>
    <h1 style={{ color: 'black'}}> Busca Tu Feriado</h1>
    <input style={{margin: '10px'}}
    type="text" 
    placeholder="buscar" 
    value={buscador} 
    onChange={(e) => {
        setBuscador (e.target.value);
    }}> 
    </input>
</div>;
}; 

export default Buscador; 