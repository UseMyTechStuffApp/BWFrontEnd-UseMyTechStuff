import React, { useState } from 'react'

function AddItem() {

	const [formState, setFormState] = useState({
		name: '',
		category: '',
		description: '',
		file: ''
		

	})

	const handleChange = (e) => {
		e.persist()
		const formData = {
			...formState,
			[e.target.name]: e.target.value		
		}
		setFormState(formData)
			
		}
	

	return (
		<div>
			<form>
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
			</form>

		</div>
	)
}

export default AddItem
