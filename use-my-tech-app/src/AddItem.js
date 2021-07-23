import React, { useState } from 'react'

function AddItem() {

	const handleChange = (e) => {
	
	}

	return (
		<div>
			<form>
				<label htmlFor="name">Item Name
					<input
						type="text"
						name="name"
						value=""
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="category">Category
					<select
						name="category"
						value=""
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
						value=""
						onChange={handleChange}
					>

					</textarea>
				</label>
				<label htmlFor="pictures">Add Pictures
					<input
						type="file"
						onChange={handleChange}/>
				</label>
			</form>

		</div>
	)
}

export default AddItem
