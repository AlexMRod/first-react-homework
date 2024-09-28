import { countries } from '../data/data';

function CountryList() {
  return (
    <ul>
      {countries.map((country, index) => {
        let islandCheck = ''
        if(country.isIsland){
          islandCheck = 'is an island'
        }
        else {
          islandCheck = 'is not an island';
        }
        return (
        <li key={index}>
          Country:{country.name}, Capital: {country.capital}, Island: {String(country.isIsland)}
          <button onClick={() => console.log(`the country is ${country.name} and it ${islandCheck}. The capital city is ${country.capital}`)}> See Text in Console </button>
        </li>
      )
      })}
    </ul>
  );
};

export default CountryList;