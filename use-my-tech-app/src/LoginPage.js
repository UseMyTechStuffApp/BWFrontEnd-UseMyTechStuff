import React, {useState} from 'react'

function LoginPage() {
	return (
		<div>
			<form>
				<label htmlFor="name"> Name:
					<input type="text" name="name" value="" ></input>
				</label>
				<label htmlFor="email"> Email:
					<input type="email" name="email" value="" ></input>
				</label>
				<label htmlFor="password"> Password:
					<input type="password" name="password" value="" ></input>
				</label>
				<label htmlFor="confirm"> ConfirmPassword:
					<input type="password" name="confirm" value="" ></input>
				</label>
				<label htmlFor="terms"> Terms & Service:
					<input type="checkbox" name="name" checked="" ></input>
				</label>
				<button type="submit">Enroll</button>
			</form>
		</div>
	)
}

export default LoginPage