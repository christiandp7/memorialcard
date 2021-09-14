import React, { FC } from 'react'
import cn from 'classnames'
import { Suggestion } from 'react-places-autocomplete'
import s from './SuggestionItem.module.css'

interface Props {
	suggestion: Suggestion
	loading: boolean
}

const SuggestionItem: FC<Props> = ({ suggestion, loading, ...props }) => {
	// console.log(suggestion)
	// if (suggestion.description.length > 40) {
	// 	return null
	// }
	return (
		<div className={cn(s.root, { [s.active]: suggestion.active })} {...props}>
			{suggestion.description}
		</div>
	)
}

export default SuggestionItem
