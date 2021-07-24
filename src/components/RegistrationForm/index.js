// Write your JS code here
import {Component} from 'react'
import './index.css'

const errorMsg = 'Required'
class RegistrationForm extends Component {
  state = {
    isFormSubmitted: false,
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    firstName: '',
    lastName: '',
  }

  displayForm = () => {
    this.setState({
      isFormSubmitted: false,
      isFirstNameEmpty: false,
      isLastNameEmpty: false,
      firstName: '',
      lastName: '',
    })
  }

  renderSuccessResponse = () => (
    <div className="success-response">
      <div className="success-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
      </div>
      <button className="button" type="button" onClick={this.displayForm}>
        Submit Another Response
      </button>
    </div>
  )

  changeFirstName = event => {
    this.setState({firstName: event.target.value})
    if (event.target.value === '') {
      return this.setState({isFirstNameEmpty: true})
    }
    return this.setState({isFirstNameEmpty: false})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value})
    if (event.target.value === '') {
      return this.setState({isLastNameEmpty: true})
    }
    return this.setState({isLastNameEmpty: false})
  }

  checkInputValues = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({isFirstNameEmpty: true})
      this.setState({isLastNameEmpty: true})
    } else if (firstName === '') {
      this.setState({isFirstNameEmpty: true})
      this.setState({isLastNameEmpty: false})
    } else if (lastName === '') {
      this.setState({isLastNameEmpty: true})
      this.setState({isFirstNameEmpty: false})
    } else {
      this.setState({isLastNameEmpty: false})
      this.setState({isFirstNameEmpty: false})
      this.setState(prevState => ({
        isFormSubmitted: !prevState.isFormSubmitted,
      }))
    }
  }

  renderForm = () => {
    const {isFormSubmitted} = this.state
    const {isFirstNameEmpty, isLastNameEmpty} = this.state
    if (isFormSubmitted === false) {
      return (
        <form className="form" onSubmit={this.checkInputValues}>
          <div className="input-container">
            <label htmlFor="firstName" className="label">
              FIRST NAME
            </label>
            <input
              id="firstName"
              className="input"
              placeholder="First name"
              onBlur={this.changeFirstName}
            />
            {isFirstNameEmpty ? <p>{errorMsg}</p> : null}
          </div>
          <div className="input-container">
            <label htmlFor="lastName" className="label">
              LAST NAME
            </label>
            <input
              id="lastName"
              className="input"
              placeholder="Last name"
              onBlur={this.changeLastName}
            />
            {isLastNameEmpty ? <p>{errorMsg}</p> : null}
          </div>
          <button
            type="submit"
            className="button"
            // onClick={this.changeSubmitValue}
          >
            Submit
          </button>
        </form>
      )
    }
    return this.renderSuccessResponse()
  }

  render() {
    // const {isFormSubmitted} = this.state
    return (
      <div className="bg-container">
        <div className="form-container">
          <h1 className="main-heading">Registration</h1>
          <div className="form-text">{this.renderForm()}</div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
