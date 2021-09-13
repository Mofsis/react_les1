let type="";

function Tile(props) {
    return (
       <section>
        <img src={props.img} />
        <h2>{props.title}</h2>
           {props.children}
       </section>
    );
}

export default Tile;