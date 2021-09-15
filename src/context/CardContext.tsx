import React, { FC, createContext, useState } from 'react'

interface ProviderProps {
	children: React.ReactNode | string
}

interface CardModalData {
	open: boolean
	place: string
}

export type TCardModal = CardModalData | null

export interface CardData {
	card: CardModalData | null
	setCard: React.Dispatch<React.SetStateAction<CardModalData | null>>
}

export type TCard = CardData | null

export const CardContext = createContext<CardData | null>(null)

export const CardContextProvider: FC<ProviderProps> = ({ children }) => {
	const [card, setCard] = useState<CardModalData | null>({
		open: false,
		place: '',
	})

	const data: CardData = {
		card,
		setCard,
	}

	return (
		<CardContext.Provider value={{ card, setCard }}>{children}</CardContext.Provider>
	)
}
