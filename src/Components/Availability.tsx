

import axios from "axios";
import React, { useEffect } from "react";

export interface AvailabilityProps {
}

const Availability: React.FC = ()  => {

  let doctorsList: any;

  const fetchData = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'https://localhost:3000');


    return new Promise((resolve, reject) => {
      fetch('https://tech-test.joovence.dev/api/doctors', {
        method: 'GET',
        mode: 'no-cors',
        headers
      })
        .then(response =>{
          response.json();
        })
        .then(response => {
          console.log('res',response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
        }

        const fetchDocData = () => {
          const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Access-Control-Allow-Origin', 'https://localhost:3000');
      
      
          return new Promise((resolve, reject) => {
            fetch('https://tech-test.joovence.dev/api/availabilities?doctorId=f0b14104-753a-4d6f-b8a8-f8f2ed1f394d', {
              method: 'GET',
              mode: 'no-cors',
              headers
            })
              .then(response => response.json())
              .then(response => {
                console.log('res',response);
                resolve(response);
              })
              .catch(error => {
                reject(error);
              });
          });
            
              }
 useEffect(()=>{
  fetchData();
   fetchDocData();
  //  axios.get('https://tech-test.joovence.dev/api/doctors')
  //  .then(res=>{ console.log("res",res)})
  //  .catch(error=>{console.log(error)});
   
 })
 

  return (
    <div >
      Availibility

       {/* {doctorsList.map((doc: any)=>{return <div>{doc.name}</div>})} */}
    </div>
  );
};

export default Availability;
