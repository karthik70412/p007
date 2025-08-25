import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {formData:{
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      dob: "",
      password: "",
      confirmpassword:"",
      terms: false,
    }, errMsg:{}};
  }
  
  handleSubmit(){
    alert("Testing...");
  }

  render() {
    const{formData, errMsg} = this.state;
    return (
      <>
        <header>
          <div className='logo'>Validation</div>
        </header>
        <section>
          <div className='content'>
            <h1>Create Account</h1>
            <div className='grid'>
              <div>
                <label>First Name *</label>
                <input type='text' name='firstName' value={formData.firstName} />
                <p></p>
              </div>
              <div>
                <label>Last Name *</label>
                <input type='text' name='lastName' value={formData.lastName} />
                <p></p>
              </div>
            </div>

            <div className='grid'>
              <div>
                <label>Email ID *</label>
                <input type='text' name='email' value={formData.email} />
                <p></p>
              </div>
              <div>
                <label>Phone Number *</label>
                <input type='text' name='phone' value={formData.phone} />
                <p></p>
              </div>
            </div>

            <div className='grid'>
              <div>
                <label>Select Country *</label>
                <select name='country' value={formData.country}>
                  <option>Select..</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>Europe</option>
                </select>
                <p></p>
              </div>
              <div>
                <label>Date of Birth *</label>
                <input type='date' name='dob' value={formData.dob} />
                <p></p>
              </div>
            </div>

            <div className='grid'>
              <div>
                <label>Password *</label>
                <input type='password' name='password' value={formData.password} />
                <p></p>
              </div>
              <div>
                <label>Confirm Password *</label>
                <input type='password' name='confirmpassword' value={formData.confirmpassword} />
                <p></p>
              </div>
            </div>

            <div className='terms'>
              <input type='checkbox' name='terms' value={formData.terms} />
              <label>I agree the Terms and Conditions</label>
              <p></p>
            </div>

            <div className='submission'>
              <button onClick={()=>this.handleSubmit()}>Register</button>
            </div>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;