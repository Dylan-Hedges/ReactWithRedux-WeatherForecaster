import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';

//Controlled component - sets state when input is changed (component level state)
class SearchBar extends Component {
    //Initalizes state (component level)
    constructor(props){
        super(props);
        //Sets default state to be blank
        this.state = { term: ''}
        
        //Binds the "onInputChange" function to "SearchBar" - Take the "onInputChange" function, bind it to our instance of SearchBar "(this)" and replace the exisiting "onInputChange", otherwise "onInputChange" cannot use ".setState" (it cant access this method by default)
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    //Updates search field with user input - DOM event handler, onChange, onHover, onScroll etc. all use the event object (used in vanilla JS)
    onInputChange(event){
        console.log(event.target.value);
        //Displays typed keys in the search field - Updates the state of the "SearchBar" component and rerenders it (typed keys are then displayed on screen), without ".bind()" it cannot access the method "setState" because "this" only references the function "onInputChange"
        this.setState({ term: event.target.value});
    }
    
    //Function executes when the user clicks submit - prevents the browser submitting the form, by default HTML/the browser will submit the form when the user clicks submit or hits enter
    onFormSubmit(event){
        //Prevents browser submitting the form - uses the "event" object + prevention method, <form> the reason we use a form even though we prevent it from sending is because for user inputs its still quicker to do this then recreate the forms functionality manually
        event.preventDefault();
        //Calls action creator with the users search term
        this.props.fetchWeather(this.state.term);
        //Resets the search bar - sets the state of the search bar to be blank and rerenders the component (because of .setState)
        this.setState({ term: ''});
    }
    
    
    
    //Renders HTML on screen
    render(){
        //Controlled field - value of <input> is set by state of component (usually other way around), "value={this.state.term}- turns it into a controlled component, "onChange={this.onInputChange}" - if you make a callback that references "this." you probably need to ".bind" it otherwise it will return an "undefined" error message, "onSubmit={this.onFormSubmit}" - when we have a callback we pass to a JSX/DOM element and it makes a reference to "this.props.fetchWeather" an "undefined" error will appear in the console because the props is out of scope, in this case we need to use ".bind" in the constructor 
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a 5 day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}


//Links the action creator (fetch weather) to this container (SearchBar)
function mapDispatchToProps(dispatch) {
    //Binds action creator to dispatch - "fetchWeather" action creator that returns an action, "dispatch" dispatches our action to the reducer
    return bindActionCreators({ fetchWeather }, dispatch);
}

//Maps to props for this container - "null" we use this because "mapDispatchToProps" needs to be the 2nd arugment, the first argument is for state which we dont care about this time (usually is "mapStateToProps")
export default connect(null, mapDispatchToProps)(SearchBar);