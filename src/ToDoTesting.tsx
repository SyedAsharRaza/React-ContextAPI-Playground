import { useState } from 'react';

const ToDoTesting = () => {
  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [maxI, setMaxI] = useState(0);
  const handleDelete = (i) => {
    setTasks((prevtasks) => prevtasks.filter((thist) => i !== thist.id));
  };
  const addTask = () => {
    if (inputVal.trim()) {
      setTasks((currTasks) => [
        ...currTasks,
        {
          id: maxI,
          task: inputVal.trim(),
        },
      ]);
      setMaxI((prev) => prev + 1);
      setInputVal('');
    }
    return;
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <button onClick={addTask}>Add tasks</button>
      <ul>
        {tasks.map(({ id, task }) => (
          <li key={id}>
            <span>
              {id}:{task}
            </span>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ToDoTesting;
