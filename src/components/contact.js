import { useState } from "react"

function Contact()
{
    const [name,setName] = useState("Shankar");

    const handleClick = () => {
        setName("Raj")
    }
    return(
        <div>
            <h1>Contact details</h1>
            <h2>The owner of this page is {name}</h2>
            <button onClick={handleClick}>Change owner</button>
        </div>
    )
}
export default Contact;
