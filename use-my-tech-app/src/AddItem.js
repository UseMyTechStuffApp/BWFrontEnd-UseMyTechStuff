import React, { useState } from 'react'
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
		category: yup.string().oneOf(["Computer", "Camera", "Sound", "Other"]).required("Please Select an option"),
		description: yup.string().length(150).required("Please provide as much detail as possible"),
		file: yup.mixed()
		//idk how to do the file, i just figured it was a cool idea to add, even if it doesnt "work"
	})

	


//both functions below handle all changes made
	const handleChange = (e) => {
		e.persist()
		const formData = {
			...formState,
			[e.target.name]: e.target.value
		};
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
				</label>
				<label htmlFor="category">Category
					<select
						name="category"
						value={formState.category}
						onChange={handleChange}
					>
						<option>--select one--</option>
						<option>Computer</option>
						<option>Camera</option>
						<option>Sound Equipment</option>
						<option>Other</option>
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
				<button type="submit">Submit</button>

			</form>

		</div>
	)
}

export default AddItem
