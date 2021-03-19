import React from "react";

export class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: "" };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
          <div>Hello!</div>
       )
      }
      
      handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ""
        }));
      }
}