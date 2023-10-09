import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillCheckCircle} from 'react-icons/ai';
import Componente from '../../components/Componente';


export default function Home() {
  return (

    <div>
      <Head>
      <title>Bruno Mastropietro Portfolio</title>
      </Head>
      

      <main className='bg-white px-10 '>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between '>
          <h1 className='text-xl'>DevelopedByBruno</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>

            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'
              href='#'>
                Account
              </a>
            </li>
          </ul>
        </nav>
        <div className='text-center'>
          <h2 className='text-5xl text-teal-600 font-medium'>Bruno Mastropietro</h2>
          <h3 className='text-2xl py-2'>FrontEnd Developer</h3>
          <p>
          Bruno Mastropietro es un apasionado por mantenerse actualizado en las últimas tendencias 
          de desarrollo frontend y busca constantemente
           oportunidades para mejorar y optimizar la
            experiencia del usuario en línea. 
            Es un colaborador eficiente y valioso para 
            cualquier equipo de desarrollo frontend.
          </p>
        </div>
        <div className='flex justify-center text-5xl gap-10 pt-4 text-teal-600 '>
          <AiFillInstagram className='cursor-pointer'/>
          <AiFillYoutube className='cursor-pointer'/>
        </div>
        <div className=' '>
          <p>
          <AiFillCheckCircle className='cursor-pointer text-teal-500 w-40 h-40 mt-20 mx-auto'/>
          </p>
        </div>
      </section>

      <section>
        <div className='text-center border-t-2 pt-4 pb-8'>
          <h3 className='text-3xl flex justify-center text-teal-600'>
              Servicios: 
          </h3>
          <p className='py-2 leading-8 text-gray-400 '>
            SADSASJDKLSAJDKLAJDKALJKLAJD
            ALSKDJASLKDJASDSADSASJDKLSAJDKLAJDKALJ
            LAJDALSKDJASLKDJASDSADSASJDKLSAJDKLAJDKALJKLAJDALSKDJASLK
            DJASDSADSASJDKLSAJDKLAJDKALJKLAJDALSKDJASLKDJASD
          </p>
        </div>
        </section>

        <section className='flex  max-w-2xl'>
        <Componente
          titulo = "React"
          descripcion = "Ejemplo de descripción de descripción de de de descripción de descripción de descripción de d de descripción de descripción de descripción de descripción de descripciónescripciónscripción de descripción de descripción"
    
        />

        <Componente
          titulo = "React"
          descripcion = "Ejemplo de descripción"
     
        />

        <Componente
          titulo = "React"
          descripcion = "Ejemplo de descripción"
        />
         </section>
      
         <div className='text-center bg-slate-300 shadow-lg p-10 m-5'>
         <h2 className='text-3xl font-medium text-teal-600'>
          React
         </h2>
         <p className='text-xl font-medium text-gray-500 pt-2'>
           descripcion
         </p>
        </div>
    



      </main>
    </div>
  )
}
