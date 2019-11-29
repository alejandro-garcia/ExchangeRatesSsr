import fetch from 'isomorphic-fetch';

export default function getFacts(){
    return fetch('https://exchageratesmgr.firebaseio.com/warehouses.json')
      .then(res=>res.json())
      .then((facts) => {
           let warehouses = Object.keys(facts).map(f => (Object.assign({}, { warehouse: f }, facts[f], { flag: facts[f].status === "success" })));
           return warehouses;
         }
      )
}