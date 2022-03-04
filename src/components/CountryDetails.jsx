import {Link} from "react-router-dom"

export default function CountryDetails(props){
    const {name, alpha3Code, capital,area,borders,alpha2Code} = props.CountryDetails

    return(
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/w580/${alpha2Code.toLowerCase()}.png`} alt="country flag" width={300}/>
            <h1>{name}</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td width={30} >Capital</td>
                  <td>{capital}</td>
                </tr>
                <tr>
                  <td>Area </td>
                  <td>
                  {area}km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Boder with: {borders}</td>
                  {/*<td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                      </ul>
                  </td>*/}
                </tr>
              </tbody>
            </table>
          </div>
    )
}
