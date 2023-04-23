import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

function Formation(){
    return(
        <frameElement>

        <section>
         <h2> <FontAwesomeIcon className="left-icon Icon-Profil" icon={faLessThan} />   Mes formations   <FontAwesomeIcon className="right-icon Icon-Profil" icon={faGreaterThan} /></h2>

         <div id='Formation'>

         
            <article>
            <FontAwesomeIcon className='Icon-formation' icon={faCode} />
            <h3>Udémy</h3>
            <p className='date'>2021 - 2022</p>
            <p>Formation FullStack  de A à Z</p>
            <p className='langage-learning'>HTML, CSS, Javascript, jQuery, Bootstrap, PHP, MySQL, Wordpress</p>
            </article>

            <article>
            <FontAwesomeIcon className='Icon-formation' icon={faCode} />
            <h3>OpenClass Room</h3>
            <p className='date'>2022</p>
            <p>Formation FullStack - 6 mois</p>
            <p className='langage-learning'>HTML, CSS, JavaScript, React, Git/GitHub, NodeJS, Express, MongoDB, les API REST</p>
            </article>

            <article>
            <FontAwesomeIcon className='Icon-formation' icon={faCode} />
            <h3>3W Academy</h3>
            <p className='date'>2023</p>
            <p>Bootcamp FullStack Javascript</p>
            <p className='langage-learning'>HTML, CSS, JavaScript, Node.JS, React, jQuery, Bootstrap, React, React Native, API, Git et Express</p>
            </article>

         </div>
         </section>
        </frameElement>
    )
}

export default Formation