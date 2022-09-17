export default function Buttons(props) {
    return(
        <button onClick={() => props.buttonOnClick(props.id)}>{props.buttonLabel}</button>
    )
}