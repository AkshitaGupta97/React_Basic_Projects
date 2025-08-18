
import { Button } from "react-bootstrap"
import { Alert } from "react-bootstrap"

function Bootstrap(){
    return(
        <div>
            <h1>Added BootStrap Functionalites</h1>
            <Button variant="success">Boot Ok</Button>
            <Button variant="danger">Danger</Button>
            <Alert variant="success">Boot Alert : success</Alert>
            <Alert variant="danger">Boot Alert : danger</Alert>
        </div>
    )
}

export default Bootstrap