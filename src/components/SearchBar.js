import React from 'react';

class SearchBar extends React.Component{
    state = { term: ''};    //initializing the controlled input

    onInputChange = (event) =>{
        this.setState({ term: event.target.value})
    }

    onFormSubmit = event =>{
        event.preventDefault();   //to prevent auto refresh
        
        //the parent will call this to get the data/state of the form submit, this onFormSubmit is from the parent app.js
        this.props.onFormSubmit(this.state.term)

    }


    render() {
      return( <div className='search-bar ui segment'>
       <form onSubmit={this.onFormSubmit} className='ui form'>
       <div className="field">
       <label> Video Search </label>
       <input type='text' value={this.state.term} onChange= {this.onInputChange}/>
       </div>
       </form>
       </div>
      )
    }
}

export default SearchBar;