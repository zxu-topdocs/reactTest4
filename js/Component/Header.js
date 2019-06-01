import React from '../../../node_modules/react';
import Conditional from "./Conditional"

export default class MyHeader extends React.Component{   
    mytime(){
        const mydate = new Date();
        return mydate.getHours(); 
    }
    constructor(){
           super();
           this.state={
              answer: "Sample Text",
              size: 12, 
              isLoading: true,
              character: {},
              myImg:"http://i.imgflip.com/1bij.jpg",
              allImg:[]
           };
           this.btnBigClick = this.btnBigClick.bind(this)
           this.btnSmallClick = this.btnSmallClick.bind(this)
           this.btnChange = this.btnChange.bind(this)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading:false})            
        },1500);     
        
        fetch("https://api.imgflip.com/get_memes" )
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data;
            this.setState({allImg: memes, answer:memes[0].name })
        })

        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data
            }) 
        })
    }

    btnBigClick(){
        
        /*this.setState( {size: this.state.size+2})         

        Using setState we must bind the function in constructor */
        /*ES6*/
        this.setState(prevState => {
            return {
                size: prevState.size + 2 
            }
        })   
    }
    btnSmallClick(){
       
        /*this.setState( {size: this.state.size+2})         
        Using setState we must bind the function in constructor */
        /* ES5 */
        this.setState(
            function(prevState) {
                console.log("Change size " + prevState.size.toString());
                return {size: prevState.size - 2 }
            }
        )         
      
    }

    btnChange(event){
        this.setState({answer: this.state.allImg[0].url})
        event.preventDefault();
        const randNum  = Math.floor(Math.random() * this.state.allImg.length)
        const myNewImg = this.state.allImg[randNum].url
        this.setState({           
            myImg: myNewImg
        })
    }

    render(){
        
        return(
            <div>
                {this.state.isLoading ? <h1>Loading ....</h1>: <Conditional isPageLoading={this.state.isLoading} /> }
                
                <header classN ame="App-header">My time: {this.mytime()} </header>
                <p>time from parent {this.props.time1} </p>

                <p style={{fontSize : this.state.size }}>{this.state.answer}</p>
                <p>{this.state.size}</p>
                <buton onClick={this.btnBigClick} >Click to enlarge Sample Text</buton><br/>
                <buton onClick={this.btnSmallClick} >Click to small Sample Text</buton>
                <p>People: {this.state.character.name} </p>
                <img src={this.state.myImg} alt={this.state.myImg}></img>
                <br/>
                <button onClick={this.btnChange} >change</button>
            </div>
        );
    }
}
 