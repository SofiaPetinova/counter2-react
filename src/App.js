import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import CountersWrapper from "./components/counters/CountersWrapper";
import AddCounter from "./components/buttons/AddCounter";


function App() {
    const [counters, setCounters] = useState([
        {
            id: uuidv4(),
            value: 1
        },
        {
            id: uuidv4(),
            value: 2
        },
        {
            id: uuidv4(),
            value: 3
        }
    ]);

    const minus = (id) => {
        const newCounters = counters.map(el => el.id === id ? {...el, value: el.value -1} : el)
        setCounters(newCounters);
    }
    const plus = (id) => {
        const newCounters = counters.map(el => el.id === id ? {...el, value: el.value + 1} : el)
        setCounters(newCounters);
    }
    const deleteCounter = (id) => {
        const newCounters = counters.filter(el => el.id !== id);
        setCounters(newCounters);
    }

    function addCounter () {
        const newCounters = [...counters, {
            id: uuidv4(),
            value: counters.length === 0 ? 1 : counters[counters.length-1].value + 1}]
        setCounters(newCounters)
    }

    console.log(counters)

    return (
        <div className="App">
            <h1>Counter</h1>
            <AddCounter addCounter={addCounter} />
            <CountersWrapper countersWrapper={counters}
                             minus={minus}
                             plus={plus}
                             deleteCounter={deleteCounter}/>
        </div>
    );
}

export default App;
