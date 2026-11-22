import { useContext } from 'react';
import { MyContext } from './MyContext';

function ChildComponent() {
  const { name, setName, color, setColor } = useContext(MyContext);

  return (
    <div>
      <h2>Salaaam, {name}!</h2>
      <button onClick={() => setName('Ashar Raza')}>Naam Change Karein</button>
      <button onClick={() => setColor((prev) => !prev)}>
        Color Change Karein
      </button>
    </div>
  );
}

export default ChildComponent;
