import styled from "styled-components"

function StyledComponenet(){

    const Heading = styled.h1`
        color:blue;
        border:2px solid yellow;
        width: 500px;
        padding: 20px;
    `
    const Button = styled.button({
        color: "orange",
        backgroundColor:"white",
        margin:"16px"
    })
    return (
        <>
            <h1>Styled Components</h1>
            <Heading>Hello React JSX</Heading>
            <Button>Login</Button>
            <Button>Sign up</Button>
        </>
    )
}

export default StyledComponenet;