import {useState, useEffect} from 'react';

export const Clock = () => {
    const [information, setInformation] = useState({
        fecha: new Date(),
         edad: 0,
         nombre: "Martín",
         apellidos: "San José"
    })

    const thick = () => {
        let edad = information.edad + 1;
        setInformation({
            ...information,
            fecha: new Date(),
            edad
        })
    }

    useEffect(() => {
        let timerID = setInterval(() => {
            thick()
            console.log("xd")
        }, 1000);

        return () => {
            clearInterval(timerID)
        }
    })

    return(
        <div>
            <h2>Hora Actual {information.fecha.toLocaleTimeString()}</h2>
            <h3>{information.nombre} {information.apellidos}</h3>
            <h1> Edad : {information.edad}</h1>
        </div>
    );
}