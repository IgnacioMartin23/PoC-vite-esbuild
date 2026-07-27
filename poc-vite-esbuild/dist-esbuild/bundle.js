// src/counter.ts
function setupCounter(element) {
  let counter = import.meta.hot?.data.count ?? 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `Clicks realizados: ${counter}`;
    if (import.meta.hot) {
      import.meta.hot.data.count = counter;
    }
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(counter);
}
if (import.meta.hot) {
  import.meta.hot.accept();
}

// src/main.ts
document.querySelector("#app").innerHTML = `
  <div class="card">
    <h1>Prueba de Concepto</h1>
    <h2>SSSSS vs esbuild</h2>
    <p>Materia: Desarrollo de Software</p>
    <button id="counter" type="button"></button>
  </div>
`;
setupCounter(document.querySelector("#counter"));
if (import.meta.hot) {
  import.meta.hot.accept();
}
//# sourceMappingURL=bundle.js.map
