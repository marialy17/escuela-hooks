import { useCounter } from "./useCounter";

export function Counter_H() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}
