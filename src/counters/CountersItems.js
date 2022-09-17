import Buttons from "../buttons/Buttons";

export default function CountersItems(props){
    return (
       <div>
           <Buttons id={props.counter.id} buttonLabel={'-'} buttonOnClick={props.minus}/>
           {props.counter.value}
           <Buttons id={props.counter.id} buttonLabel={'+'} buttonOnClick={props.plus}/>
           <Buttons id={props.counter.id} buttonLabel={'Delete'} buttonOnClick={props.deleteCounter}/>
       </div>
    )
}