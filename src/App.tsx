import React from 'react';
import FormNewTask from "./component/FormNewTask";
import ListTask from "./component/ListTask";

function App() {
  return (
    <div className="app container">
        <FormNewTask type={"add"}/>
        <ListTask/>
    </div>
  );
}

export default App;
