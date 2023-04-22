import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faSchool} from "@fortawesome/free-solid-svg-icons"
import {faCode} from "@fortawesome/free-solid-svg-icons";

function Formation(){
    return(
        <frameElement>

        <section>
         <h2> <FontAwesomeIcon className="left-icon Icon-Profil" icon={faLessThan} />   Mes formations   <FontAwesomeIcon className="right-icon Icon-Profil" icon={faGreaterThan} /></h2>

         <div id='Formation'>

            <article>
            <FontAwesomeIcon className='Icon-formation' icon={faSchool} />
            <h3>Baccalauréat</h3>
            <p className='date'>2018</p>
            <p>Bac scientifique avec spécialité mathématique</p>
            </article>

                <article>
            <FontAwesomeIcon className='Icon-formation' icon={faCode} />
            <h3>Udémy</h3>
            <p className='date'>2018</p>
            <p>Bac scientifique avec spécialité mathématique</p>
            </article>

            <article>
            <FontAwesomeIcon className='Icon-formation' icon={faCode} />
            <h3>OpenClass Room</h3>
            <p className='date'>2018</p>
            <p>Bac scientifique avec spécialité mathématique</p>
            </article>

            <article>
            <FontAwesomeIcon className='Icon-formation' icon={faCode} />
            <h3>3wa Academy</h3>
            <p className='date'>2018</p>
            <p>Bac scientifique avec spécialité mathématique</p>
            </article>

         </div>
         </section>
        </frameElement>
    )
}

export default Formation