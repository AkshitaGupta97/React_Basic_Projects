import { useState } from "react";

function UserId() {
    const [cardStyle, setCardstyle] = useState({
        padding: "10px", margin: "20px", border: "2px solid gray", borderRadius: "6px", boxShadow: "1px 2px 3px gray"
    })

    const [textColor, setTextColor] = useState("pink")

    const updateTheme = (bgColor, textColor) => {
        setCardstyle({...cardStyle, backgroundColor: bgColor, text:textColor})
        setTextColor(textColor)
    }

    

    return (
        <div>
            <button onClick={() => updateTheme('blue', 'white')} style={{border:"2px solid orange"}}>Blue Theme</button>
            <button onClick={() => updateTheme('black', 'orange')} style={{marginLeft:"20px", border:"2px solid orange"}}>Default Theme</button>


            <div style={{ display: "flex" }}>
                <div style={cardStyle}>
                    <h2 style={{ color: "olivedrab" }}>User Id</h2>
                    <div>
                        <img src="https://w7.pngwing.com/pngs/811/233/png-transparent-computer-icons-user-login-desktop-others-blue-computer-prints.png" alt="" style={{ width: "180px", height: "160px", paddingLeft: "10px" }} />
                        <div style={{color:textColor}}>
                            <h3 style={{ color: "palegreen" }}>Name : <span style={{ color: "peru" }}>Akshita</span></h3>
                            <h4 style={{ color: "palegreen" }}>Profession : <span style={{ color: "peru" }}>Software Developer</span></h4>
                        </div>
                    </div>
                </div>

                <div style={cardStyle}>
                    <h2 style={{ color: "olivedrab" }}>User Id</h2>
                    <div>
                        <img src="https://w7.pngwing.com/pngs/811/233/png-transparent-computer-icons-user-login-desktop-others-blue-computer-prints.png" alt="" style={{ width: "180px", height: "160px", padding: "10px" }} />
                        <div>
                            <h3 style={{ color: "palegreen" }}>Name : <span style={{ color: "peru" }}>Akshita</span></h3>
                            <h4 style={{ color: "palegreen" }}>Profession : <span style={{ color: "peru" }}>Software Developer</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserId;