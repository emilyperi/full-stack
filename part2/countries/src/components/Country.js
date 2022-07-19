const Country = ({selectCountry}) => {
    return (
        <>
        <h1>{selectCountry.name.common}</h1>
        <table>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{selectCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{selectCountry.area}</td>
            </tr>
          </tbody>
        </table>
        <h4>Languages</h4>
        <ul>
          {Object.entries(selectCountry.languages).map(entry => 
            <li key={entry[0]}>{entry[1]}</li>      
        )}
        </ul>
        <img src={selectCountry.flag} alt='country flag' />
        </>
    )
}
export default Country;