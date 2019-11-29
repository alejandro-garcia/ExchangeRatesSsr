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
       
       //<td>{fact.status}</td>
       return (<tr>
                <td>{fact.warehouse}</td>
                <td className="centerAlign">{fact.date}</td>
                <td className="centerAlign">{rateHr}</td>
                <td className="centerAlign">{updatedStr}</td>
                <td style={{ textAlign: 'center', color: estilo }}>{fact.status}</td>
              </tr>
        );
    });

   //genero una lista unica de fechas segun los datos que llegan del json.
   //para facilitar el filtrado.
   const dates = props.facts.map(d => d.date);
   const uniqDates = ["todas", ...new Set(dates)].map(v=>(<option value={v}>{v}</option>));

   return (
       <div>
            <h2>Actualización de Tasa de Cambio por Restaurante</h2>
            <h4 style={{ textAlign: 'center', paddingRight: '40%' }}>
               <strong>Fecha de la Tasa:</strong>
               <select id="ddlRateDates">
                {uniqDates}
               </select>
            </h4>
            <br style={{ paddingBottom: '5px'}}/>       
            <table>           
                <tHead>
                    <tr>
                        <th>Rest.</th>           
                        <th className="col2">Fecha</th>
                        <th className="col3">Hora</th>
                        <th className="col4">Actualizado el.</th>
                        <th className="col5">status</th>
                    </tr>
                </tHead>
                <tbody>
                    {facts}
                </tbody>           
            </table>
       </div>
   )
}

export default App;