import React from 'react'
import Layout from '../components/Layout'
import video from '../assets/video/nike.mp4';


function About() {

  return (

    <Layout>

      <div className='container container-min-max-width
                d-flex flex-column justify-content-center align-items-center'>
        <section className='mb-5'>

          <h1>About</h1>
          <h4>TOTUL DESPRE BUN GUST. SI RESPONSABILITATE. </h4>
          <p>Nike REACT e destinatia online ce ofera shopping si inspiratie, oriunde si oricand, celor peste 1.500.000 de clienti din Romania, Bulgaria si Ungaria. Portofoliul include numeroase branduri de mall, dar si branduri premium, accesibile direct de pe telefon: Calvin Klein, Converse, Diesel, Esprit, Fossil, GAP, Guess, Karl Lagerfeld, Liu Jo, Love Moschino, Mango, New Balance, Nike, Pepe Jeans London, Puma, Skechers, Tommy Hilfiger, U.S. Polo Assn., UGG, Under Armour, Ted Baker, Gant, Emporio Armani, Furla, Timberland, Napapijri si multe altele.
          </p>

        </section>

        <video className='mb-5' width="400" controls>
          <source src={video} type="video/mp4"/>
        </video>
        
      </div>

    </Layout>
    
  )

}

export default About;