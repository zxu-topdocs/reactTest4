import React from '../../../node_modules/react';
import MyHeader from './Header';
import MyFooter from "./MyFooter";
import ProductData from "./ProductData";
import Product from "./Product";

function MyTime(){
    const mydate = new Date();
    var myword ='';  

    const style1={
        color: "#FF0000", 
        textAlign: "center",
        fontSize : 30
    }

    if (mydate.getHours() >=12) {
        myword='Afternoon '+ mydate.getHours() +"PM";       
        style1.color = "#FF00FF";   
    }
    else {
        myword='Morning '+ mydate.getHours() +"AM";   
        style1.color = "#0000FF";  
    }
   
    return (<p style={style1}>{myword}</p>);
}


function MyApp1(myStats){
   
    //test
    const productComponent = ProductData.map(item => <Product key={item.id} myProduct={item} />);

    //const productComponent = myStats.map(function(myitem) {return (<Product key={myitem.id} myProduct={myitem} />)})
    var time2 = this.MyTime()
    return (
        <div>
            <MyHeader time1="abc"/>
            <p >{time2}</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
           
            {productComponent}
            <MyFooter name="Footer1" size="10" />
            <MyFooter name="Footer2" size="20" />
            <MyFooter name="Footer3"  />
            <MyFooter name="Footer4" size="40" />
        </div>
    )
}

export default class Layout extends React.Component{  
    constructor(){
        super();
        this.state={
            mylist: ProductData,
            myNewFirstName: "First Name",
            myNewLastName: "Last Name",
            isSelected: true,
            gender: "male",
            favColor: "",  
            BookChoice: {
                book1: false,
                book2: false,
                book3: false
            }     
        }
        this.handleChange1 = this.handleChange1.bind(this) 
        this.FormChanged = this.FormChanged.bind(this) 
    }
    handleChange1(myid) {
        this.setState(prevState =>{
            const newProducts = prevState.mylist.map(oneItem=>{
                    if (oneItem.id === myid) {
                        oneItem.available = !oneItem.available
                    }
                    return oneItem
            })
            return {mylist: newProducts}
        })
    }
    FormChanged(event){
        /*if (event.target.name=="myNewFirstName") {
            this.setState({
                myNewFirstName: event.target.value.toUpperCase()            
               });
        }
        if (event.target.name=="myNewLastName") {
            this.setState({
                myNewLastName: event.target.value.toLowerCase()            
               });
        }*/

        /*if (event.target.type=="checkbox") {
            this.setState({
                [event.target.name]: event.target.checked            
               });

        } else {
            this.setState({
            [event.target.name]: event.target.value.toUpperCase()            
           });
        }*/

        const {name,value,type,checked}=event.target
        //type==="checkbox"?this.setState({[name]: checked}) : this.setState({[name]: value.toUpperCase()});

        if (type==="checkbox") {
            if (name==="book1"||name==="book2"||name==="book3"){
                // we need set other book from prevState
                this.setState(prevState=> {
                    return {
                        BookChoice: {
                            ...prevState.BookChoice,   //set other book from prevState
                            [name] : checked
                        }
                    }
                })

            } else {
                this.setState({
                    [name]: checked            
                })
            }
        } else {
            this.setState({
            [name]: value.toUpperCase()            
           })
        }

    }

    render(){

        const productComponent = this.state.mylist.map(myItem => <Product key={myItem.id} myProduct={myItem} handleChange2={this.handleChange1}  />)
       
        return(
           //MyApp1(this.state.mylist)
              <div>
                <MyHeader time1={MyTime()}/>
                <p >{MyTime()}</p>
                {productComponent}
                <input type="text" name="myNewFirstName" value={this.state.myNewFirstName} placeholder ={this.state.myNewFirstName} onChange={this.FormChanged} />
                <input type="text" name="myNewLastName" placeholder ={this.state.myNewLastName} onChange={this.FormChanged} />
                <p>my name is {this.state.myNewFirstName} {this.state.myNewLastName}</p>

                <textarea value={"my name is " + this.state.myNewFirstName + " " + this.state.myNewLastName} onChange ={this.FormChanged}></textarea>
                <br/>
                Selected:<input type="checkbox" name="isSelected" checked ={this.state.isSelected} onChange ={this.FormChanged} />
                <br/>
                <label><input type="radio" name="gender" value ="Male" checked ={this.state.gender.toLowerCase() === "male"} onChange ={this.FormChanged} />male</label>                
                <label><input type="radio" name="gender" value ="Female" checked ={this.state.gender.toLowerCase() === "female"} onChange ={this.FormChanged} />female</label>
                <br/>

                <select name="favColor" value={this.state.favColor} onChange={this.FormChanged}> 
                    <option value =""></option>
                    <option value ="RED">Red</option>
                    <option value ="GREEN">Green</option>
                    <option value ="BLUE">Blue</option>
                </select>
                <p>{this.state.gender} fav Color {this.state.favColor}</p>
                 
                Books Selected:  <br />              
                <label>Book 1<input type="checkbox" name="book1" checked ={this.state.BookChoice.book1} onChange ={this.FormChanged} /></label> book1 is {this.state.BookChoice.book1.toString()}<br></br>
                <label>Book 2<input type="checkbox" name="book2" checked ={this.state.BookChoice.book2} onChange ={this.FormChanged} /></label>  book2 selection is {this.state.BookChoice.book2?"Yes":"No"}<br></br>
                <label>Book 3<input type="checkbox" name="book3" checked ={this.state.BookChoice.book3} onChange ={this.FormChanged} /></label>  book3 is {this.state.BookChoice.book3?"selected":"not selected"}<br />
                <br/>

                <MyFooter name={this.state.myNewFirstName} size="10" />
                <MyFooter name="Footer2" size="20" />
                <MyFooter name="Footer3"  />
                <MyFooter name="Footer4" size="40" />
              </div>



        );
    }
}

//export default MyApp1;
 