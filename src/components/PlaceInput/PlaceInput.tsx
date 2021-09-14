import React, { FC, useState } from 'react'
import cn from 'classnames'
import s from './PlaceInput.module.css'
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete'
import { LocationIcon } from '../svg'
import Loader from 'react-loader-spinner'
import SuggestionItem from '@components/SuggestionItem'

const PlaceInput = () => {
	const [address, setAddress] = useState('')

	const handleChange = (addr: string) => {
		if (addr.length < 40) {
			setAddress(addr)
		}
	}

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		// trigger modal
		console.log(address)
	}

	const handleSelect = (addr: string) => {
		geocodeByAddress(addr)
			.then(results => getLatLng(results[0]))
			.then(latLng => console.log('Success', latLng))
			.catch(error => console.error('Error', error))
	}

	return (
		<div className={s.root}>
			<div className={s.labels}>
				<p>kote</p>
				<p>locación</p>
				<p>emplacement</p>
				<p>location</p>
			</div>
			<form onSubmit={handleSubmit} className={s.form}>
				<PlacesAutocomplete
					value={address}
					onChange={handleChange}
					onSelect={handleSelect}>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div className={s.inputContainer}>
							<input
								{...getInputProps({
									placeholder: 'ciudad, país',
									className: s.inputBox,
									name: 'place',
									maxLength: 40,
								})}
							/>
							<div className={s.inputIcon}>
								{loading ? (
									<Loader type="Oval" color="#AAAAAA" width={18} height={18} />
								) : (
									<LocationIcon />
								)}
							</div>
							<div
								className={cn(s.dropdownContainer, {
									[s.dropDownOpen]: suggestions.length > 0,
								})}>
								{suggestions.map(suggestion => (
									<React.Fragment key={suggestion.id}>
										<SuggestionItem
											{...getSuggestionItemProps(suggestion, {
												suggestion,
												loading,
												setAddress,
											})}
										/>
									</React.Fragment>
								))}
							</div>
						</div>
					)}
				</PlacesAutocomplete>
				<div className={s.buttonContainer}>
					{address.length > 5 && <button className={s.submitButton}>Go!</button>}
				</div>
			</form>
		</div>
	)
}

export default PlaceInput
