import React from 'react'
import { useState } from 'react'
import history from "../../Routing/history";
import Requirements from './components/Requirements'
import logo from './100div.png';
import './Form.css'


const Form = () => {
    const [ requirements, setRequirements] = useState([
        { id: 1,
          text: "Residente de Puerto Rico un año antes de presentar la petición.",
          comply: false
        },
        { id: 2,
          text: "Certificado de Matrimonio.",
          comply: false
        },
        { id: 3,
          text: "Copia de Escritura Pública si se realizarán capitulaciones matrimoniales.",
          comply: false
        },
        { id: 4,
          text: "Acuerdo jurado por ambos cónyuges sobre los hijos menores de edad (Patria Potestad, Custodia, Relaciones Filiales, Alimentos).",
          comply: false
        },
        { id: 5,
          text: "Acuerdo jurado por ambos cónyuges sobre las necesidades económicas de cada cónyuge.",
          comply: false
        },
        { id: 6,
          text: "Acuerdo jurado por ambos cónyuges sobre el modo en que ha de adjudicarse la Sociedad Legal de Gananciales.",
          comply: false
        },
        { id: 7,
          text: "Inventario y avalúo de activos y pasivos (bienes y deudas).",
          comply: false
        },
        { id: 8,
          text: "Emplazamiento",
          comply: false
        }

    ])

    const select_req = (id) => {
        setRequirements(
            requirements.map((req) => 
                req.id === id ? { ...req, comply: !req.comply} : req
            )
        )
    }

    const submit_form = (e) => {
      e.preventDefault()
      const reqJSON = JSON.stringify(requirements.filter((req) => 
      req.comply === true).map((req) => req.id))
      
      console.log(reqJSON)
    }

    const select_reset = () => {
      const len = requirements.filter((req) => req.comply === true).length 
      const reset = len > 0 ? true : false
      setRequirements(
          requirements.map( (req) => 
          req.comply === reset ? {...req, comply:!reset} : req
          )
      ) 
  }

    return (
      <div>
        <div className='header'>
            <img src = {logo} className='img'/>
        </div>
        <form className='form-container'
            onSubmit = {submit_form}>
            <h2 style={{cursor:'default'}}>
              Requisitos para proceder con el divorcio
            </h2>
            <Requirements requirements = { requirements } onSelect = {select_req} />
            <div 
            className='clear-select' 
            onClick={select_reset}>
            {requirements.filter((req) => 
            req.comply === true).length > 0 ? 
            "Borrar selecciones" : "Seleccionar Todas"}
            </div>
            <input 
            type='submit' 
            value='Someter'
            className = 'btn'/>
        </form>
        <div className='footer'>
            <p>*De no cumplir con alguno, no podemos proceder con el mismo, favor de contactar uno de nuestros abogados para más información.

                1. Residencia: Las partes tienen que haber vivido durante el año previo a solicitar el divorcio, excepto que la causa del divorcio se cometa en Puerto Rico o cuando una de las partes residía en Puerto Rico.
                2. Certificado de matrimonio: Debe ser original, aunque se hayan casado afuera de Puerto Rico.
                3. Capitulaciones: De haberlas.
                4. Certificado de nacimiento: De los hijos e hijas menores de edad comunes de ambas partes.
                5. Estipulaciones: En el caso del divorcio por consentimiento mutuo, se requirirá que las partes sometan acuerdos sobre la separación de sus bienes, así como sobre la patria potestad, custodia, relaciones filiales y pensión alimentaria de los hijos o hijas en común. 
</p> 
        </div>
      </div>
    )
}

export default Form

