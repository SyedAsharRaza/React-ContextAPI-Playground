import { useContext, useState } from 'react';
import { MyContext } from './MyContext';

function ChildComponent() {
  const { name, setName } = useContext(MyContext);
  const [draft, setDraft] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setName(draft.trim());
    setDraft('');
  };

  return (
    <div className="child-box">
      <h2 className="greeting">Salam, {name}</h2>
      <p className="subtitle">Consumed from MyContext</p>
      <form className="input-row" onSubmit={handleUpdate}>
        <input
          className="text-input"
          type="text"
          placeholder="New name..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button className="btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default ChildComponent;