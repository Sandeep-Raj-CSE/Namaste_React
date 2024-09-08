import { useState } from "react";

const User = ({name}) => {

    // create constructor

    // const [count] = useState(0);
    

    return (
        <div>
            {/* <h1> count = {count}</h1> */}
            <h1 className="name">{name}</h1>
            <h3 className="role">Software Enginner - 1</h3>
            <h3 className="Technology">Tech Stack</h3>
            <ol>
                <li>React</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Bootstrap</li>
                <li>Redux</li>
                <li>Git</li>
            </ol>
           
        </div>
    )
}

export default User;