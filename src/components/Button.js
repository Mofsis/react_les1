
function Button(props) {
    return (
        <button disabled={props.disabled}
            onClick={() => console.log(props.click)}> {props.name}
        </button>
    );
}

export default Button;