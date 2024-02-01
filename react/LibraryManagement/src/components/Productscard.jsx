import Product from "../pages/Products"

function ProductCard(props){
    return (
        <>
            <div>
                <h1>Name : {props.product.title}</h1>
                <h2>Price : {props.product.price}</h2>
                <img src={props.product.image} alt="" />
            </div>
        </>
    )
}

// function newProduct(){
//     return (
//         <>
//             <div>
//                 <form action="">
//                     <input type="text" placeholder="product name?" name="title" />
//                     <input type="text" placeholder="product price?" name="price" />
//                     <input type="text" placeholder="product image?" name="image" />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </>
//     )
// }

export default ProductCard


