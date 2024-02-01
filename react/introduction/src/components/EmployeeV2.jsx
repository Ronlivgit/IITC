function EmployeeV2 (props){
    const EmployeeV2Info = {
        name:"",
        role:"",
    }

    return (
        <>
        <div className="singleEmployee">
            <h1>{props.EmployeeV2.name}</h1>
            <h2>{props.EmployeeV2.role}</h2>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
        </>
    )
}