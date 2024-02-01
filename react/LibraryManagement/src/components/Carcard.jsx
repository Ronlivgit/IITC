function CarCard(props){
    return (
        <>
            <div>
                <h1>{props.car.company}  {props.car.model} </h1>
                <h2>{props.car.year}</h2>
            </div>
        </>
    )
}

export default CarCard