import React, {useState} from 'react';
import FormNewTask from "./component/FormNewTask";
import ListTask from "./component/ListTask";

function App() {
    const [activeChange, setActiveChange] = useState<any>(null)

    return (
    <div className="app container">
        <FormNewTask activeChange={activeChange} type={"add"} setActiveChange={(activeChange: any) => setActiveChange(activeChange)}/>
        <ListTask
            activeChange={activeChange}
            setActiveChange={(activeChange: any) => setActiveChange(activeChange)}
        />
    </div>
  );
}

export default App;
