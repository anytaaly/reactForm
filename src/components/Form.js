import React from "react"; 


class Form extends React.Component {

    state = {
        username : "",
        firstname : "",
        lastname : "",
        password : ""
    }

  // handle any changes to the input fields
  changeHanlderName = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const value = event.target.value; 
    console.log(value); 
    // Set the state for the appropriate input field
    this.setState({
      username : value 
    });
 
  };

    // handle any changes to the input fields
    changeHanlderFirst = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const value = event.target.value; 
        console.log(value); 
        // Set the state for the appropriate input field
        this.setState({
          firstname : value 
        });
      };

    // handle any changes to the input fields
    changeHanlder = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const name = event.target.name;
        const value = event.target.value; 
        console.log(name); 
        console.log(value); 
        // Set the state for the appropriate input field
        this.setState({
          [name] : value 
        });
      };

          // handle any changes to the input fields
    changeHanlderPassword = event => {
        const password = event.target.name; 
        const value = event.target.value;  
        console.log(value); 
        // Set the state for the appropriate input field
        this.setState({
          [password] : value 
        });
      };

    render() {
        return (
            <div>
                <p> Username: {this.state.username} </p>
                <p> First Name: {this.state.firstname} </p>
                <p> Last Name: {this.state.lastname} </p>
                <p> Password: {this.state.password} </p>
                <form> 
                    <input type="text" value = {this.state.username} placeholder="Username" name="username" onChange={this.changeHanlderName} />
                    <input type="text" value = {this.state.firstname} placeholder="firstname" name="firstname" onChange={this.changeHanlderFirst} />
                    <input type="text" value = {this.state.lastname} placeholder="last name" name="lastname" onChange={this.changeHanlder} />
                    <input type="text" value = {this.state.password} placeholder="password" name="password" onChange={this.changeHanlderPassword} />
                <button > Submit </button>
                </form>
            </div>
        );
    }

}
export default Form; 
