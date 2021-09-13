
function Bag(props) {
    return (
        <article>
            <span>{props.info}</span>
            <img src={props.imgname} alt="bag"/>
            <p>{props.bagname}</p>
            <h4>{props.price}</h4>
        </article>
    );
}

export default Bag;