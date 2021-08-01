import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
// Reactstrap styling:
import { ButtonToggle, Form, FormGroup, Label, Input } from 'reactstrap'


function SignUpPage() {
	//holds state for whole form
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
		terms: ''
	})

	//error holder and display
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
		terms: ''
	})

	const validateData = (e) => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,[e.target.name]: ''
				})
			}).catch((err) => {
				setErrors({
					...errors,[e.target.name]: err.errors[0]
				})
			})
	}

	//disables button until form is complete
	const [buttonDisabled, setButtonDisabled] = useState(true)


	//form schema
	const formSchema = yup.object().shape({
		name: yup.string().required('Please fill out this field'),
		email: yup.string().email('must be a valid email').required(),
		password: yup.string().required(),
		confirm: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
		terms: yup.boolean().oneOf([true], "Please agree to the terms").required()
	})

	//useEffect to hold schema and validate form
	useEffect(() => {
		formSchema.isValid(formState).then((valid) => {
			setButtonDisabled(!valid)
		})
	})

	//this function handles the input changes
	const onChangeHandle = (e) => {
		e.persist()
		const newFormData = {
			...formState,
			[e.target.name]:
				e.target.type === "checkbox" ? e.target.checked : e.target.value
		};
		validateData(e)
		setFormState(newFormData)
	}

	const formSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div className='SignUpPage'>
			<Form onSubmit={formSubmit}>
				<FormGroup>
					<Label htmlFor="name"> Name:
						<Input
							type="text"
							name="name"
							value={formState.name}
							id="name"
							onChange={onChangeHandle}
							/>
							{errors.name.length > 0 ? <p>{errors.name}</p> : null}
							
					</Label>	
				</FormGroup>
				<FormGroup>
					<Label htmlFor="email"> Email:
						<Input
							type="email"
							name="email"
							value={formState.email}
							id="email"
							onChange={onChangeHandle}
						/>
							{errors.email.length > 0 ? <p>{errors.email}</p> : null}
							
					</Label>
				</FormGroup>
				<br></br>
				<FormGroup>
					<Label htmlFor="password"> Password:
						<Input
							type="password"
							name="password"
							value={formState.password}
							id="password"
							onChange={onChangeHandle}
						/>
							{errors.password.length > 0 ? <p>{errors.password}</p> : null}
							
					</Label>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="confirm"> Confirm Password:
						<Input
							type="password"
							name="confirm"
							value={formState.confirm}
							id="confirm"
							onChange={onChangeHandle}
						/>
							{formState.confirm.match(formState.password) ? null : <p>{errors.confirm}</p>}
							
					</Label>
				</FormGroup>
				<br></br>
				<FormGroup>
					<Label htmlFor="terms"> Terms & Service:
						<Input
							type="checkbox"
							name="terms"
							checked={formState.terms}
							id="confirms"
							onChange={onChangeHandle}
						/>
							
							
					</Label>
				</FormGroup>
				<br></br>
				
				<FormGroup>
					<ButtonToggle type="submit" disabled={buttonDisabled}>Enroll</ButtonToggle>
				</FormGroup>
			</Form>
		</div>
	)
}

export default SignUpPage