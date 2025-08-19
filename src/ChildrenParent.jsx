import ChildrenFun from "./ChildrenFun";


function Parent(){
    const displayName = (name) => {
        alert( name)
    }
    const getUser = (name) => {
        alert(name)
    }
    return(
        <div>
            <ChildrenFun displayName={displayName} name="Akshita" getUser={getUser}/>
            <ChildrenFun displayName={displayName} name="Simren" getUser={getUser}/>
            <ChildrenFun displayName={displayName} name="Peter" getUser={getUser}/>
            <ChildrenFun displayName={displayName} name="Mayank" getUser={getUser}/>
        </div>
    )
}
export default Parent;