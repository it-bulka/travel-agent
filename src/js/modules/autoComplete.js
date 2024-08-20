import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "../helpers/countries-list";

export function autoCompletePlace() {

  const autoCompleteJS = new autoComplete({
    selector: '#autoComplete',
    placeHolder: "e.g Bali, Indonesia",
    data: {
      src: countryList,
      cache: true,
    },
    resultItem: {
      highlight: true
    },
    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
        },
        focus: (event) => {
          autoCompleteJS.start();
        }
      }
    },
    resultsList: {
      tag: "ul",
      id: "autoComplete_list",
      class: "results_list",
      destination: "#autoComplete",
      position: "afterend",
      maxResults: 500,
      noResults: true,
      element: (list, data) => {
        list.setAttribute("data-parent", "country-list");
      },
      resultItem: {
        highlight: "autoComplete_highlight",
        selected: "autoComplete_selected"
      },
    },
  });

  // Start on focus. Default does not work
  const inputElement = document.querySelector('#autoComplete');
  inputElement.addEventListener('focus', () => {
    // Симулюємо подію введення (input) для відкриття списку
    inputElement.value += ' ';
    autoCompleteJS.start()
  });
}