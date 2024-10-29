import React, { Component } from 'react';

class LifeCycleComponent extends Component {

    state = {
        number :0,
        color : null
    }

    onClickToIncrease = ()=>{
        this.setState({
            number : this.state.number +1
        })
    }

    colorRef= null;

    constructor(props){
        super(props)
        console.log(props)
    }

    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.color !==prevState.color){
            return{color : nextProps.color} 
        }
        return null;
    }

    componentDidMount(){
        console.log("랜더링 이후componentDidMount 실행")
    }
    //-----------------------------------------------------

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",nextProps,nextState)
        return nextState.number % 5 !== 0;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate",prevProps,prevState)
        if(prevProps.color !== this.props.color){
            return this.colorRef.style.backgroundColor;
        }
        return null
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        if(prevState){
            console.log(`업데이트 직전 state: ${prevState}`)
        }
        
        if(snapshot){
            console.log(`업데이트 직전 color: ${snapshot}`)
        }
    }

    render() {
        return (
            <div>
                <div style={{
                    width :"100px",
                    height :"100px", 
                    backgroundColor:this.state.color,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    color:"white"}}>
                    <h1>{this.state.number}</h1>
                </div>
                <button onClick={this.onClickToIncrease}>더하기 버튼</button>
            </div>
        );
    }
}

export default LifeCycleComponent;