import Header from "../Home/Components/Header.jsx"
import Profil from "../Home/Components/Profil.jsx"
import Formation from "../Home/Components/Formations.jsx"
import Experience from "../Home/Components/Experiences.jsx"


function Home(){

    return(
        <frameElement>
        <Header />
        <main>
   
       
        <Profil />
        <Formation />
        <Experience />
  
    </main>
    </frameElement>
    )
}

export default Home