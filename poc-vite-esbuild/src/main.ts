import './style.css';
import { setupCounter } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="card">
    <h1>Prueba de Concepto</h1>
    <h2>SSSSS vs esbuild</h2>
    <p>Materia: Desarrollo de Software</p>
    <button id="counter" type="button"></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

if (import.meta.hot) {
  import.meta.hot.accept();
}