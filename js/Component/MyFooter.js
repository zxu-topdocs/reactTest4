import React from '../../../node_modules/react';

var firstName="ABC";
var lastName="DEFG";


function FooterText(myname){
    return firstName + "-" + myname
};

function MyFooter1(props){
    return (
        <div>
           
            <footer style={{display: props.size ? "block" : "none"  } }>{props.name} - {firstName + ' ' + lastName} and {FooterText(props.size)} </footer>
        </div>
    )
}


export default class MyFooter extends React.Component {
    constructor(){
        super();
        this.state={          
            isLoading:false,
            character: {},
            firstName: "" 
        };
    }

    componentDidMount(){   
        this.setState({isLoading:true});
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data,
                isLoading:false
            }) 
        })
    }


    render() {
        const peopleName = this.state.isLoading ? "Loading ...." : this.state.character.name + "- " + this.state.character.height;
        return (
        <div>                
              <footer  >Hello {firstName + ' ' + lastName} and {FooterText('aaa')} </footer>
              <p>People: {peopleName}</p>
        </div>        
        )
    }
}
