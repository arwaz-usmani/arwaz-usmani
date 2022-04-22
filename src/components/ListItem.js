

function ListItem({data}){
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`${data.image}`}></img>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.price}</span>
                    <small>
                        <strike>{data.strikedprice}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            <button className={"cart-add"}>
                <span>Add to cart</span>
            </button>
        </div>
    )
}

export default ListItem