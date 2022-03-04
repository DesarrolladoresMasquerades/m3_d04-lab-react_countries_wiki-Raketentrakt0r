import {Link} from "react-router-dom"


function CountriesList(props){
  
return (
    <div>
        {<Link to={props.CountriesList.alpha3Code} > {props.CountriesList.name} </Link>}
        <img src={`https://flagpedia.net/data/flags/w580/${props.CountriesList.alpha2Code.toLowerCase()}.png`} width={100}/>
    </div>
  )
}

export default CountriesList;

