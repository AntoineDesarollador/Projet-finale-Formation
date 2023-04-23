import Header from "../Home/Components/Header.jsx"
import Profil from "../Home/Components/Profil.jsx"
import Formation from "../Home/Components/Formations.jsx"
import Experience from "../Home/Components/Experiences.jsx"


function Home(){

    return(

        <main>
    <frameElement>
        <Header />
        <Profil />
        <Formation />
        <Experience />
    </frameElement>
    </main>
    )
}

export default Home