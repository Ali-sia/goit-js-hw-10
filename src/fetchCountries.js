export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (response.status === 404) {
      failed(response);
    }

    return response.json();
  });
}
