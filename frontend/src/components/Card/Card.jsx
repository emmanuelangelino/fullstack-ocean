import "./Card.css"

function Card(props) {
    const item = props.item;
    return (
        <div className="card" style={{backgroundColor: item.tags.color}}>
            <img src={item.imagem} />
            <h2>{item.nome}</h2>
            <div><img src={item.tags.type1} /> <img src={item.tags.type2} /></div>
        </div>
    )
}

export default Card;