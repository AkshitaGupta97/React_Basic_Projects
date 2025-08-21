import { useId } from "react"

function UseId() {
    return(
        <div>
            <UserForm />
        </div>
    )
}

function UserForm() {
    const name = useId();
    const password = useId();
    const terms = useId();
    const skill = useId();

    return(
        <form action="">
            <label htmlFor={name}>Enter name</label>
            <input id={name} type="text" placeholder="Enter name"/>
            <br />
            <label htmlFor={name}>Enter name</label>
            <input id={name} type="text" placeholder="Enter name"/>
            <br />
            <label htmlFor={password}>Enter Password</label>
            <input id={password} type="text" placeholder="Enter Password"/>
            <br />
            <label htmlFor={password}>Enter password</label>
            <input id={password} type="text" placeholder="Enter password"/>
            <br />
            <label htmlFor={skill}>Enter Skills</label>
            <input id={skill} type="checkbox" placeholder="Enter Skill"/>
            <br />
            <label htmlFor={skill}>Enter password</label>
            <input id={skill} type="checkbox" placeholder="Enter skill"/>


        </form>
    )
}

export default UseId;