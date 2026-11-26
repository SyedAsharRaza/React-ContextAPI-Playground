// App.jsx
import './App.css';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
import ToDoTesting from './ToDoTesting';
function App() {
  return (
    <div>
      {/* <ParentComponent>
        <ChildComponent />
      </ParentComponent> */}
      <ToDoTesting></ToDoTesting>
    </div>
  );
}

export default App;
