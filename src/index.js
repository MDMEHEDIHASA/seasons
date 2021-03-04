import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';
import ErrorDisplay from './ErrorDisplay';

/*const App = ()=>{
    window.navigator.geolocation.getCurrentPosition(
        (position)=>console.log(position),
        (err)=>console.log(err)
    );
    return(
        <div>
            Latitude:
            <SeasonDisplay />
        </div>
    );
}*/

class App extends React.Component {
    state={
        lat:null,
        err:'',
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                lat:position.coords.latitude,
            }),
            (err) => this.setState({
                err:err.message,
            })
          );
    }

    renderContent(){
        if(this.state.lat && !this.state.err){
            return (<SeasonDisplay lat={this.state.lat}/>)
        }
        if(!this.state.lat && this.state.err){
            return (<ErrorDisplay  err={this.state.err}/>)
        }
        if(!this.state.lat && !this.state.err){
            return (<Spinner message="Allow Location"/>)
        }
    }
    render() {
      return (<div>{this.renderContent()}</div>);
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
