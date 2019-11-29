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
       
      return (<li key={i} className="collection-item avatar">
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
   //const uniqDates = ["todas", ...new Set(dates)].map((v,i)=>(<option key={i} value={v}>{v}</option>));
   const uniqDates = [...new Set(dates)].map((v,i)=>(<li key={i} id="oneDate"><a href="#">{v}</a></li>));
   
   return (
       <div className="container">       
         <nav>
            <div className="nav-wrapper">
               {/* <a href="#!" className="brand-logo center">Logo</a> */}
               <ul className="left hide-on-med-and-down">
               <li className="active"><a id="allDates" href="#">Todas</a></li>
               {uniqDates}               
               </ul>
            </div>
         </nav>        
         <br style={{ paddingBottom: '5px'}}/>       
         <ul className="collection with-header">
            <li key="0" className="collection-header"><h4>Actualización de Tasa de Cambio por Restaurante</h4>
            </li>
            {facts}
         </ul>
       </div>
   )
}

export default App;