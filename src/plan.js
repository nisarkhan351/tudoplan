import React from "react";

const Plan = (props) => {
  const arr= props.p
    return(
        <>
          {/* <li className="border border-2 shadow col-sm-11 m-2 p-2">{props.value}</li>
          <button className="btn fw-bold btn-danger my-2 col-sm-1 offset-1" onClick={()=> {props.sendData(props.id)}}>X</button> */}
          {
            arr.map((value,i) => {
              return(
                <React.Fragment key={i}>
                    <li className="border border-2 shadow col-sm-11 m-2 p-2">{value}</li>
                     <button className="btn fw-bold btn-danger my-2 col-sm-1 offset-1" onClick={()=> {props.sendData(i)}}>X</button>
                </React.Fragment>
              )
            })
          }
        </>
    )

}
export default Plan;