const Plan = (props) => {
    return(
        <>
          <li className="border border-2 shadow col-sm-11 m-2 p-2">{props.value}</li>
          <button className="btn fw-bold btn-danger my-2 col-sm-1 offset-1" onClick={()=> {props.sendData(props.id)}}>X</button>
        </>
    )

}
export default Plan;