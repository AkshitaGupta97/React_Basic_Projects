
/*const UserInput = (props, ref) => {
    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}
   // used before react 19
export default  forwardref(UserInput)
*/ 


const UserInput = (props) => {
    return(
        <div>
            <input type="text"  ref={props.ref}/>
        </div>
    )
}

export default UserInput