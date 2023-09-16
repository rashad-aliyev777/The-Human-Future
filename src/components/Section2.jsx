import React, {useState, useEffect} from 'react'
// komponent
import SectionApi from './SectionApi';

// css
import './css/Section2.css'


const Section2 = () => {

    const [depoMelumat,setDepoMelumat] = useState([])

    useEffect(()=>{
        fetch('src/components/kartlar.json')
        .then(cavab=>cavab.json())
        .then(melumatlar=>setDepoMelumat(melumatlar))
    },[])

  return (
    <div className='ikinci-section'>

        <h2>What can you do on this site?</h2>

            <div className="kard">
                 {
            depoMelumat.map(birMelumat =>(
                <SectionApi kartinBasliqi={birMelumat.basliq}  kartinMetni={birMelumat.metni}/>   
            ))
                }
                      
            </div>
        
    </div>
  )
}

export default Section2