import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getRefs from './getGefs';
import countryListMarkup from './renderCountryListMarkup';
import countryCardMarkup from './renderCountryCardMarkup';
import fetchCountries from './fetchCountries';
import renderMarkup from './renderMarkup';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.inputCountry.addEventListener(
  'input',
  debounce(onInputCountry, DEBOUNCE_DELAY)
);

function onInputCountry(e) {
  const cityName = e.target.value;

  fetchCountries(cityName.trim())
    .then(data => {
      clearCountry(refs.listCountry);
      clearCountry(refs.infoCountry);

      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length >= 2 && data.length <= 10) {
        const markup = data.map(countryListMarkup);

        renderMarkup(refs.listCountry, markup);
        clearCountry(refs.infoCountry);
      }
      if (data.length === 1) {
        const markup = data.map(countryCardMarkup);

        clearCountry(refs.listCountry);
        renderMarkup(refs.infoCountry, markup);
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');

      clearCountry(refs.listCountry);
      clearCountry(refs.infoCountry);
      return error;
    });
}

function clearCountry(element) {
  element.innerHTML = ' ';
}
