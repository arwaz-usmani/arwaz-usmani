import ListItem from "../components/ListItem"

const array = [
    {
        id:0,
        image:"assets/grocery.jpg",
        price:350,
        strikedprice:450,
        title:"Mueseli"
    },
    {
        id:1,
        image:"assets/grocery.jpg",
        price:200,
        strikedprice:250,
        title:"Pasta"
    },
    {
        id:2,
        image:"assets/grocery.jpg",
        price:400,
        strikedprice:450,
        title:"noodles"
    }
]

function Product(){
    return(
        <div className={"product-list"}>
            <ListItem data={array[0]}></ListItem>
            <ListItem data={array[1]}></ListItem>
            <ListItem data={array[2]}></ListItem>
            <ListItem data={array[2]}></ListItem>
            <ListItem data={array[2]}></ListItem>
            <ListItem data={array[2]}></ListItem>
            <ListItem data={array[2]}></ListItem>

      
        </div>
    )
}


export default Product