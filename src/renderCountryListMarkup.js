export default function countryListMarkup({ name, flags }) {
  return `<li class = country-item>
    <img class = 'country-list__flags' src="${flags.svg}" alt="${name.official}" width=50/>
    <h2 class = country-list__name>${name}</h2>
    </li>`;
}
