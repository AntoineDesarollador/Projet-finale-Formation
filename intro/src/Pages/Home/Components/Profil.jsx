
import img from "../../../asset/images/profil.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons"

function Profil(){
    return(

        <frameElement>

    <section id="Profil">

    <h2> <FontAwesomeIcon className="left-icon Icon-Profil" icon={faLessThan} />   Mon profil  <span id="Span-Profil"> / </span> <FontAwesomeIcon className="right-icon Icon-Profil" icon={faGreaterThan} /></h2>
        <img src={img} alt="photo de profil" />
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum suscipit animi sunt aut pariatur? Distinctio aut neque incidunt nulla quos ex alias, culpa ipsam, debitis iure similique dolore perspiciatis!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eligendi ipsam doloribus quis magnam ducimus, at illo expedita illum aliquid non cum sapiente atque? Optio amet nulla aspernatur sit. Vitae!</p>
        </section>
        </frameElement>
    )
}


export default Profil