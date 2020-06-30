import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const Home = () => {
	const [bookState, setBookState] = useState({
		search: '',
		books: [],
	})

	bookState.handleInputChange = (event) => {
		setBookState({ ...bookState, [event.target.name]: event.target.value })
	}

	bookState.handleSearchBook = (event) => {
		event.preventDefault()
		axios
			.get(`/api/gbook/${bookState.search}`)
			.then(({ data }) => {
				setBookState({ ...bookState, books: data })
			})
			.catch((e) => console.error(e))
	}

	return (
		<>
			<form onSubmit={bookState.handleSearchBook}>
				<TextField
					label="Search Google Books"
					variant="outlined"
					name="search"
					value={bookState.search}
					onChange={bookState.handleInputChange}
				/>
				<Button
					variant="outlined"
					color="primary"
					onClick={bookState.handleSearchBook}
				>
					Search
				</Button>
			</form>
		</>
	)
}

export default Home
