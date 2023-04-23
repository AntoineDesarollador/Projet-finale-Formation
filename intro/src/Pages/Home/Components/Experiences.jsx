import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import Snake from "../../../asset/images/snake.png"
import PacMan from "../../../asset/images/pacman10-hp.png"

import hideRealisationImg from "../Components/asset-js/realisation.js"

function Experience(){
    return (
        <frameElement>

        <section>
         <h2> <FontAwesomeIcon className="left-icon Icon-Profil" icon={faLessThan} />   Mes réalisations   <FontAwesomeIcon className="right-icon Icon-Profil" icon={faGreaterThan} /></h2>

         <div>

            

                <div className='realisation-project'>

                <div class="header-items-realisation">
                <FontAwesomeIcon className="Icon-realisation" icon={faGreaterThan} />
                <h4> Pac-man  </h4>
                </div>
                
                <div className='img-div'>
                <img src={PacMan} alt="" srcset="" />
                </div>

                </div>
            

                <div className='realisation-project'>
                <div class="header-items-realisation">
                <FontAwesomeIcon className="Icon-realisation" icon={faGreaterThan} />
                <h4> Projet 2  </h4>
                </div>
                
                <div>
                <img src={PacMan} alt="" srcset="" />
                </div>
                </div>

                <div className='realisation-project'>
                <div class="header-items-realisation">
                <FontAwesomeIcon className="Icon-realisation" icon={faGreaterThan} />
                <h4> Projet 3  </h4>
                </div>
                
                <div>
                <img src={PacMan} alt="" srcset="" />
                </div>
                </div>

                <div className='realisation-project'>
                <div class="header-items-realisation">
                <FontAwesomeIcon className="Icon-realisation" icon={faGreaterThan} />
                <h4> Projet 4  </h4>
                </div>
                
                <div>
                <img src={PacMan} alt="" srcset="" />
                </div>
                </div>
         </div>
         </section>

        <script src={hideRealisationImg}></script>

         </frameElement>
    )
}

export default Experience