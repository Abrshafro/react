// import react from "react"
const Button =(arr) =>{
    return(
    <div className=" text-center font-bold justify-center m-1 ">
        <div>
      {
        arr.map((name, index) => (
                <li key={index}>{name}</li>
        ))
      }
        </div>
    </div>
    )
}

export default Button