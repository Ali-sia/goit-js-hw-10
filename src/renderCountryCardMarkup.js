export default function countryCardMarkup({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  const sortedLanguages = languages.map(language => language.name).join(', ');
  return `<div class="country">
      <img class = "capital-flag" src="${flags.svg}" alt="${name}" width = 100/>
      <h2 class = "country-title">Country: ${name}</h2>
      <p class = "country-text">Capital: ${capital}</p>
      <p class="country-text">Population: ${population}</p>
      <p class="country-text">Languages: ${sortedLanguages}</p>
    </div>`;
}
