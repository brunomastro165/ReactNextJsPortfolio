import React from "react";

function Componente(props){
    return(
      <div className='text-center bg-slate-200 shadow-lg p-10 m-5 rounded-xl my-10'>
         <h2 className='text-3xl font-medium text-teal-600'>
          {props.titulo}
         </h2>
         <p className='text-xl font-medium text-gray-500 pt-2'>
           {props.descripcion}
         </p>
       </div>
    )
}
export default Componente;