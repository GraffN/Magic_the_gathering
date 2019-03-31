import React, {Component} from 'react';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]*$/);

const formValid = formErrors => {
    let valid = true;

    object.values(formErrors).forEach(val =>{
        val.length > 0 && (valid = false);
    });
    return valid;
};

export default class contactForm extends React.component {
    constructor(props){
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            eMail: null,
            message: null,
            formErrors:{
                firstName:"",
                lastName:"",
                eMail:"",
                message:""
            }
        };
    }
    handleSubmit = e => {
      e.preventDefault();

      if(formValid(this.state.formErrors)){
          console.log(`
          -- Submitting -- 
          First name: ${this.state.firstName}
          Last name: ${this.state.lastName}
          E-mail: ${this.state.eMail}
          Message: ${this.state.message}
          `
          )
      }else {
          console.log('form invalid - display error message')
      }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;


        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 ? "minimum 3 characters required"
                    : "";
                break;
            case 'lastName':
                formErrors.lastName = emailRegex.test(value)
                    ? ''
                    : "Invalid email address";
                break;
            case 'eMail':
                formErrors.eMail = value.length < 3 ? "minimum 3 characters required"
                    : "";
                break;
            case 'messagee':
                formErrors.message = value.length < 200 ? "minimum 200 characters required"
                    : "";
                break;
            default:
                break;


        }
        this.setState({formErrors, [name]: value }, () => console.log(this.state));
    };


    render(){
        const { formErrors } = this.state;

        return(
            <div className="form--wrapper">
                <h1>Contact us</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First name</label>
                        <input
                            type="text"
                            className=""
                            placeholder="First name"
                            name="firstName"
                            onChange={this.handleChange}
                            formNoValidate
                        />
                        {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            className=""
                            placeholder="Last name"
                            name="lastName"
                            onChange={this.handleChange}
                            formNoValidate
                        />
                        {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                        )}
                    </div>
                    <div className="eMail">
                        <label htmlFor="eMail">E-mail</label>
                        <input
                            type="email"
                            className=""
                            placeholder="noroff@noroff.no"
                            name="eMail"
                            onChange={this.handleChange}
                            formNoValidate
                        />
                        {formErrors.eMail.length > 0 && (
                            <span className="errorMessage">{formErrors.eMail}</span>
                        )}
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <input
                            type="text"
                            className=""
                            placeholder="Please write us your message"
                            name="message"
                            onChange={this.handleChange}
                            formNoValidate
                        />
                        {formErrors.message.length > 0 && (
                            <span className="errorMessage">{formErrors.message}</span>
                        )}
                    </div>
                    <div className="sendMessage">
                        <button type="submit">send message</button>
                    </div>
                </form>
            </div>
        )
    }
}