
import img from "../../../asset/images/profil.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons"

function Profil(){
    return(

        <frameElement>

    <section id="Profil">

    <FontAwesomeIcon className="left-icon" id="Icon-Profil" icon={faLessThan} /> <h2>  Qui-suis je ?  <span id="Icon-Profil"> / </span></h2> <FontAwesomeIcon className="right-icon" id="Icon-Profil" icon={faGreaterThan} />
        <img src={img} alt="photo de profil" />
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum suscipit animi sunt aut pariatur? Distinctio aut neque incidunt nulla quos ex alias, culpa ipsam, debitis iure similique dolore perspiciatis!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eligendi ipsam doloribus quis magnam ducimus, at illo expedita illum aliquid non cum sapiente atque? Optio amet nulla aspernatur sit. Vitae!</p>
        </section>
        </frameElement>
    )
}


export default Profil