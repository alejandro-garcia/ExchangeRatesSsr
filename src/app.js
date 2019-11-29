import React from 'react';

function App(props){

    const facts = props.facts.map((fact,i) => {      
       let rateHr = (fact.modified) ? fact.modified.split("T")[1]: "";      

       let updatedStr = "";

       if (fact.updated){
          let updated = fact.updated.split("T");
          let updatedDate = updated[0].split("-");
          updatedStr = updatedDate[2] + "/" + updatedDate[1] + "/" + updatedDate[0] + " " + updated[1];
       }
       
       let estilo = (fact.flag) ?  'green': 'red';
       
      return (<li className="collection-item avatar">
         <i className="material-icons circle green">insert_chart</i>
         <span className="title"><strong>{fact.warehouse}</strong></span>
         <br/>
         <p>Fecha/Hora tasa: {fact.date} {rateHr}<br/>
            Actualizado: {updatedStr}
         </p>
         <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>);
    });

   //genero una lista unica de fechas segun los datos que llegan del json.
   //para facilitar el filtrado.
   const dates = props.facts.map(d => d.date);
   const uniqDates = ["todas", ...new Set(dates)].map(v=>(<option value={v}>{v}</option>));
   
   return (
       <div className="container">               
         <br style={{ paddingBottom: '5px'}}/>       
         <ul className="collection with-header">
            <li className="collection-header"><h4>Actualización de Tasa de Cambio por Restaurante</h4>
               <span><strong>Fecha de la Tasa:</strong>
                  <div className="input-field col s12">
                     <select id='ddlRateDates'>         
                        {uniqDates}
                     </select>
                  </div>  
               </span>
            </li>
            {facts}
         </ul>
       </div>
   )
}

export default App;