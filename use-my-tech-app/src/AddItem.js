import React, { useState, useEffect } from 'react'
import * as yup from 'yup'


function AddItem() {

//both functions below handle the state both of errors and the form
	const [formState, setFormState] = useState({
		name: '',
		category: '',
		description: '',
		file: ''
	})

	const [errors, setErrors] = useState({
		name: '',
		category: '',
		description: '',
		file: ''
	})

//this handles the validation of the form
	const formSchema = yup.object().shape({
		name: yup.string().required(),
		category: yup.string().oneOf(["Computer", "Camera", "Sound", "Other"], null).required("Please Select an option"),
		description: yup.string().required("Please provide as much detail as possible"),
		file: yup.string().required()
		//idk how to do the file, i just figured it was a cool idea to add, even if it doesnt "work"
	})

	const validateData = (e) => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: ''
				})
			})
			.catch(err => { setErrors({...errors,[e.target.name]: err.errors[0]})})
			
	}

	useEffect(() => {
		formSchema.isValid(formState).then((valid) => {
			setButtonDisable(!valid)
		})
	})

	const [buttonDisable, setButtonDisable] = useState(true)


//both functions below handle all changes made
	const handleChange = (e) => {
		e.persist()
		const formData = {
			...formState,
			[e.target.name]: e.target.value
		};
		validateData(e)
		setFormState(formData)
	};

	const handleSubmit = (e) => {
		e.preventDefault()
	}
	

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Item Name
					<input
						type="text"
						name="name"
						value={formState.name}
						onChange={handleChange}
					/>
					{errors.name.length > 0 ? <p>{errors.name}</p> : null}
				</label>
				<label htmlFor="category">Category
					<select
						name="category"
						value={formState.category}
						onChange={handleChange}
					>
						<option value="">--select one--</option>
						<option value="Computer">Computer</option>
						<option value="Camera">Camera</option>
						<option value="Sound">Sound Equipment</option>
						<option value="Other">Other</option>
					</select>
					
				</label>
				<label htmlFor="description"> Description
					<textarea
						name="description"
						value={formState.description}
						onChange={handleChange}
					>

					</textarea>
				</label>
				<label htmlFor="pictures">Add Pictures
					<input
						type="file"
						name="file"
						value={formState.file}
						onChange={handleChange}/>
				</label>
				<button disabled={buttonDisable} type="submit">Submit</button>

			</form>

		</div>
	)
}
//adding commet to be able to commit 
export default AddItem
