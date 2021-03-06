import React, { FC, SyntheticEvent, useState } from 'react'
import cn from 'classnames'
import s from './PlaceInput.module.css'
import { LocationIcon } from '../svg'
import Loader from 'react-loader-spinner'
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
	Suggestion,
} from 'use-places-autocomplete'
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from '@reach/combobox'
import CardModal from '@components/CardModal'
import type { CardModalData } from '@components/CardModal'
import { BsArrowRight } from 'react-icons/bs'
// import '@reach/combobox/styles.css'

const MAX_LENGTH = 40

const PlaceInput = () => {
	const [modal, setModal] = useState<CardModalData>({ open: false, place: '' })
	const {
		ready,
		value,
		suggestions: { status, data, loading },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		debounce: 300,
	})

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (e.target.value.length < 40) {
			setValue(e.target.value)
		}
	}

	const handleSelect = (val: string): void => {
		setValue(val, false)
	}

	const handleSubmit = (e: SyntheticEvent): void => {
		e.preventDefault()
		// console.log(value)
		setModal({
			open: true,
			place: value,
		})
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
				<Combobox
					className={s.inputContainer}
					onSelect={handleSelect}
					aria-labelledby="place">
					<ComboboxInput
						className={s.inputBox}
						value={value}
						onChange={handleInput}
						disabled={!ready}
						placeholder="ciudad, país"
						maxLength={MAX_LENGTH}
					/>
					<div className={s.inputIcon}>
						{loading ? (
							<Loader type="Oval" color="#AAAAAA" width={18} height={18} />
						) : (
							<LocationIcon />
						)}
					</div>
					<ComboboxPopover
						className={cn(s.dropdownContainer, {
							[s.dropDownOpen]: status === 'OK',
						})}>
						<ComboboxList>
							{status === 'OK' &&
								data
									.filter(sugg => sugg.description.length < MAX_LENGTH)
									.map(({ place_id, description }) => (
										<ComboboxOption
											key={place_id}
											value={description}
											className={s.option}
										/>
									))}
						</ComboboxList>
					</ComboboxPopover>
				</Combobox>
				<div className={s.buttonContainer}>
					{value.length > 6 && (
						<button type="submit" className={s.submitButton}>
							<BsArrowRight fontSize="1.5rem" />
						</button>
					)}
				</div>
			</form>
			<CardModal modal={modal} setModal={setModal} setValue={setValue} />
		</div>
	)
}

export default PlaceInput
