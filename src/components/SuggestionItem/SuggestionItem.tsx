import React, { FC } from 'react'
import cn from 'classnames'
import { Suggestion } from 'react-places-autocomplete'
import s from './SuggestionItem.module.css'

interface Props {
	suggestion: Suggestion
	loading: boolean
	setAddress: React.Dispatch<React.SetStateAction<string>>
}

const SuggestionItem: FC<Props> = ({
	suggestion,
	loading,
	setAddress,
	...props
}) => {
	// console.log(suggestion)
	if (suggestion.description.length > 40) {
		return null
	}

	const handleClick = () => {
		// if (suggestion.active) {
		// 	setAddress(suggestion.description)
		// }
		console.log('click!!!')
	}

	return (
		<div
			className={cn(s.root, { [s.active]: suggestion.active })}
			onClick={handleClick}
			{...props}>
			{suggestion.description}
		</div>
	)
}

export default SuggestionItem
