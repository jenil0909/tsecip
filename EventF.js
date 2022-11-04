import React from 'react';

class EventF extends React.Component{
constructor(props){
    super(props);
    //this.changeEvents=this.changeEvents.bind(this);
    this.state={
        course : "BTECH"
    }
}

    changeEvents=(e,props)=>{
  this.setState={
 course :"Mtech"
  }
        console.log("Hello JINDALOKI",this.props.name)
    }
    render(){
        return(
<div><button onClick={this.changeEvents}>Click me onnn </button>

</div>
        )
    }
}
export default EventF;