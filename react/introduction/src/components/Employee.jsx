function Employee(props) {
    const EmployeeDetails = {
        name:"",
        role:"",
        content:"",
        picture:"",
    }

    console.log(props);
    return (
        <div>
            <img src={props.EmployeeDetails.picture} alt="" />
            <h1>{props.EmployeeDetails.name}</h1>
            <h2>{props.EmployeeDetails.role} </h2>
            <p>{props.EmployeeDetails.content}</p>
            <span>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            </span>
        </div>
    );
}

export default Employee;