import { easepick, TimePlugin } from "@easepick/bundle";


export function datePicker() {
  const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
      './css/easepick-customise.css',
    ],
    plugins: [TimePlugin],
    TimePlugin: {
      format: 'HH:mm',
    },
    language: 'en-US',
    zIndex: 20
  });
}