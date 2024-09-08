
import { throwDeprecation } from 'process';
import React from 'react';
// class based compilation for the React
class UserClass extends React.Component {


    // constructor(props) 
    // {
    //     super(props);

    //     console.log(props)

    //     this.state = {
    //         count:0,
    //     }
        
    // }
    render(){
        return (
            <div>
                


                <h1>Sandeep Raj</h1>
                <h3>Software Engineer - 1</h3>
                <h3>Tech Stack</h3>
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
        );
    }

}


export default UserClass;