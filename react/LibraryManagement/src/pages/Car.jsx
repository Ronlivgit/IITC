import { useState } from "react";
import CarCard from "../components/Carcard";


function Car(){
    const[cars,setCars] = useState([
        {company:"Mazda",model:"3",year:"2000"},
        {company:"Ferrari",model:"Spider",year:"2001"},
        {company:"Lamborghini",model:"Aventador",year:"2002"}
    ])

    const[newCar,setNewCar] = useState({})

    const changeInput = (e) =>{
        newCar[e.target.name] = e.target.value
        setNewCar({...newCar})
    }

    const submitChange = (e) => {
        e.preventDefault()
        setCars([...cars,{...newCar}])
    }


    return (
        <div>
            <form onSubmit={submitChange}>
                <input type="text" onChange={changeInput} placeholder="Car's company?" name="company" />
                <input type="text" onChange={changeInput} placeholder="Car's model?" name="model" />
                <input type="text" onChange={changeInput} placeholder="Car's year?" name="year" />
                <button type="submit">Submit</button>
            </form>

        {cars.map((item,index)=> {
            return <CarCard car={item} index={index} />
        })}
        </div>
    )

}

export default Car