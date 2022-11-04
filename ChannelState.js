
import React from 'react';

class ChannelState extends React.Component {

    constructor(){
        super();
        
        this.state={
            msg : "THIS IS ME",
            counts :0
        }
    }

    count(){
        this.setState({
          
            counts : this.state.counts +1 ,
            

        })
    }
 
    render (){
return (<div>
    <p> HING JORI {this.state.counts}</p>
    <hr/>
    <button onClick={()=>{
        this.count();
    }}> Count </button>
 </div>)
    }
}
export default ChannelState;