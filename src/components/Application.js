import React from 'react';

class Application extends React.Component{
    constructor(props){
        super(props);
        console.log("inside child constructor");
    }
    static getDerivedStateFromProps(){
        console.log("inside child getDeriveStateFromProps");
    }
    componentDidMount(){
        console.log("inside child componentDidMount");
    }
    render(){
        return (
            <div>
            {console.log("inside child render")}
            </div>
        );
    }

}
export default Application;