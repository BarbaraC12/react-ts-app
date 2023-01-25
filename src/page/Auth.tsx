import React, { useState } from "react";
import FormInput from '../component/FormInput'
import ButtonRequest from '../component/ButtonRequest'
import '../style/Auth.css'

const Auth = () => {

	let [signMode, setSignMode] = useState("signup")

	const changeSignMode = () => {
		setSignMode(signMode === "signin" ? "signup" : "signin")
	}

	if (signMode === "signin") {
	return (
	  <div className="Auth-form-div">
		<form className="Auth-form">
		  <div className="Auth-form-content">
			<h3 className="Auth-form-title">Sign In</h3>
			<div className="text-center">
			  Not registered yet?{" "}
			  <span className="link-primary" onClick={changeSignMode}>
				Sign Up
			  </span>
			</div>
			<FormInput label="Login" type="login" placeholder="Enter login"/>
            <FormInput label="Password" type="password" placeholder="Enter password"/>
			<div className="d-grid gap-2 mt-3">
				<ButtonRequest type="submit" className="btn btn-outline-primary" placeholder="Sign In"/>
				<ButtonRequest type="button" className="btn btn-dark" placeholder="42 Sign In"/>
			</div>
		  </div>
		</form>
	  </div>
	)
  }
	else {
		return (
			<div className="Auth-form-div">
				<form className="Auth-form">
					<div className="Auth-form-content">
						<h3 className="Auth-form-title">Sign Up</h3>
						<div className="text-center">
							Already registered?{" "}
							<span className="link-primary" onClick={changeSignMode}>
								Sign In
							</span>
						</div>
                        <FormInput label="Nickname" type="nickname" placeholder="Enter nickname"/>
                        <FormInput label="Email" type="email" placeholder="Enter email"/>
                        <FormInput label="Password" type="password" placeholder="Enter password"/>
						<div className="d-grid gap-2 mt-3">
							<ButtonRequest type="submit" className="btn btn-outline-primary" placeholder="Sign Up"/>
							<ButtonRequest type="button" className="btn btn-dark" placeholder="42 Sign Up"/>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default Auth