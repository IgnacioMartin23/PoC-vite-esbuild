export function setupCounter(element: HTMLButtonElement): void {
  
  let counter: number = import.meta.hot?.data.count ?? 0;
  
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Clicks realizados: ${counter}`;
    
    
    if (import.meta.hot) {
      import.meta.hot.data.count = counter;
    }
  };

  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(counter);
}


if (import.meta.hot) {
  import.meta.hot.accept();
}