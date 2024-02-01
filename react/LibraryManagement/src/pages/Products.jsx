import { useEffect, useState } from "react"
import ProductCard from "../components/Productscard"


// ! Sum-up of recently Learned : *make sure to turn off strict mode if using localStorage and component lifecycle.*

// ? we create new const with [newProd] so we can create a new dynamic objective that will be pushed into the main products array
// ? we do it to add objective into the products array and "print" it as well while its changing (2 actions in 1) 
// ? component lifecycle - component has 3 phases life cycle : mount, update, unmount (useEffect) 
// ? Mount Phase : useEffect mount phase is to run component similar to onLoad(), if we don't use the useEffect, the component will run until stack overflow.
// ? Update Phase : when we use useEffect with array in the Syntax , the useEffect will trigger everytime it spots change in the Array.
// ? unMount Phase : when we use return at the end of useEffect (relative to both Mount and Update.)
// ? Syntaxes : mount - useEffect( (function or arrow function) unMount - useEffect ends with Return, ['!empty!']).  ,  update - useEffect( (function) , [array that triggers update] )



function Product(){
    const [products,setProduct] = useState([])
    const baseUrl = "https://fakestoreapi.com/products";
    const [newProduct,setNewProduct] = useState({})

    const changeInput = (e) => {
        newProduct[e.target.name] = e.target.value
        setNewProduct[{...newProduct}]
    }

    const submitChange = (e) => {
        e.preventDefault()
        setProduct([...products,{...newProduct}])
    }

    const fetchProducts = () =>{
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProduct(data)
        })
        .catch(err => {console.log(err);})
    }

    useEffect( () => {
        fetchProducts()
    },
    [])


    return (
        <>
        <div>
            <form onSubmit={submitChange}>
                <input type="text" onChange={changeInput} placeholder="product name?" name="productname" />
                <input type="text" onChange={changeInput} placeholder="product price?" name="price" />
                <input type="text" onChange={changeInput} placeholder="product image?" name="image" />
                <button type="submit">Submit</button>
            </form>
        </div>
        {products.map((item,index) =>{
            return <ProductCard product={item} index={index} />
        })}
        </>
    )
}


export default Product

// objectName[e.target.name] = e.target value 

// using this ^^^^^, to make generic option to take input value's and place in the object.