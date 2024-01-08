export const CountryInformation = ({ countryInfo }) => {
    return(
        <div>
            <h1>{countryInfo.name.common}</h1>
            <ul>
                <li>
                    <span className="bold">Capital city: </span>
                    {countryInfo.capital}
                </li>
                <li>
                    <span className="bold">Population: </span>
                    {countryInfo.population}
                </li>
                <li>
                    <span className="bold">Continent: </span>
                    {countryInfo.continents}
                </li>
                <li>
                    <span className="bold">Size area: </span>
                    {countryInfo.area}{"\u33A1"}
                </li>
                <li>
                    <span className="bold">Languages: </span>
                    {Object.values(countryInfo.languages)
                            .toString()
                            .split(',')
                            .join(', ')}
                </li>
                <li>
                    <span className="bold">Bordered with: </span>
                    {countryInfo.borders ? Object.values(countryInfo.borders)
                            .toString()
                            .split(',')
                            .join(', ') : "NONE"}
                </li>
            </ul>
            <img src={countryInfo.flags.svg} alt="`${countryInfo.name.common} Flag`" />
        </div>
    )
}