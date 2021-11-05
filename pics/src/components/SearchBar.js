import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // use an arrow function to make sure that this is correctly populated (or use a constructor)
  // (inline callbacks) or use onSubmit = "(e) => this.onFormSubmit(e)}" with regular functions
  // make sure you invoke onFormSubmit by using ()
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* 
            Don't use (). Instead use a reference. () would call the function the
            first time it gets rendered as well
            User clicks - onClick
            User changes text - onChange
            User submits a form - onSubmit
            */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
