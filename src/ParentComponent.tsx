import { useState } from 'react';
import { MyContext } from './MyContext';

function ParentComponent({ children }) {
  const [name, setName] = useState('Ashar');
  const [color, setColor] = useState(true);

  return (
    <MyContext.Provider value={{ name, setName, color, setColor }}>
      <section style={{ background: color ? 'red' : 'green' }}>
        {children}
      </section>
    </MyContext.Provider>
  );
}

export default ParentComponent;
