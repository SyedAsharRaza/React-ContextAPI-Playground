// App.jsx
import './App.css';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';

function App() {
  return (
    <div>
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </div>
  );
}

export default App;
