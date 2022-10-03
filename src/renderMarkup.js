export default function renderMarkup(element, markup) {
  element.innerHTML = markup.join('');
}
