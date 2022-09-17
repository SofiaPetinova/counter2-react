import CountersItems from "./CountersItems";

export default function CountersWrapper(props){
    return (
        <div>
            {props.countersWrapper.map(el => <CountersItems key={el.id}
                                                            counter={el}
                                                            minus={props.minus}
                                                            plus={props.plus}
                                                            deleteCounter={props.deleteCounter}/>)}
        </div>
    )
}