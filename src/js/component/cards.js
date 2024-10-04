import React from 'react'
import Card from './card'

const Cards = () => {
  return (
    <div className='row mt-5' >
      <div className='col-12 col-md-6 col-lg-3'>
        <Card imageUrl="https://cdn.pixabay.com/photo/2014/04/02/16/20/chemistry-306978_640.png" cardTitle="QUIMICA"
          cardText="Descubre el Mundo de las Reacciones Químicas
Explora recursos interactivos y experimentos que te ayudarán a entender desde las ecuaciones químicas hasta las complejas reacciones redox. Con ejemplos claros y actividades prácticas, estos recursos te permitirán dominar los principios de la química."
        />

      </div>
      <div className='col-12 col-md-6 col-lg-3'>
      
        <Card imageUrl="https://cdn.pixabay.com/photo/2012/04/12/13/36/microscope-30064_1280.png"
          cardTitle="BIOLOGÍA"
          cardText="Explora la Vida a Nivel Celular.
Sumérgete en el fascinante mundo de la biología con recursos sobre anatomía, ecología y microbiología.
 Descubre modelos 3D, simulaciones y actividades que te ayudarán a entender desde el funcionamiento de una célula hasta los ecosistemas completos."/>
      </div>
      <div className='col-12 col-md-6 col-lg-3'>
     
        <Card imageUrl="https://cdn.pixabay.com/photo/2014/03/25/16/54/dna-297576_1280.png"
        cardTitle = "GENÉTICA"
        cardText= "El ADN y Más Allá. Adéntrate en los misterios de la herencia con nuestros recursos sobre genética. Encuentra guías sobre la replicación del ADN, los principios de Mendel, y las técnicas modernas de análisis genético. Ideal para aprender de manera visual y práctica."
        />
      </div>
      <div className='col-12 col-md-6 col-lg-3'>
        <Card imageUrl="https://cdn.pixabay.com/photo/2022/06/09/07/33/atom-7251899_640.png"
        cardTitle = "FÍSICA"
        cardText= "Desentraña los Secretos del Universo. 
      Accede a una colección de recursos para comprender las leyes fundamentales que rigen el universo. Desde la mecánica clásica hasta la termodinámica y la óptica, nuestras guías y simulaciones interactivas te permitirán aprender de forma efectiva y entretenida."
         />
      </div>
    </div>
  )
}

export default Cards