import React, { FC, useState, useContext } from 'react'
import s from './CardModal.module.css'
import Modal from 'react-modal'
import { CardContext } from '@context/CardContext'
import type { CardData } from '@context/CardContext'
import { BsX } from 'react-icons/bs'

export interface CardModalData {
	open: boolean
	place: string
}

interface Props {
	modal: CardModalData
	setModal: React.Dispatch<React.SetStateAction<CardModalData>>
}

const CardModal: FC<Props> = ({ modal, setModal }) => {
	// const { card, setCard } = useContext<CardData | null>(CardContext)

	const closeModal = () => {
		setModal({ open: false, place: '' })
	}

	return (
		<Modal isOpen={modal.open} className={s.modal} overlayClassName={s.overlay}>
			<div className={s.modalHeader}>
				<button onClick={closeModal}>
					<BsX />
				</button>
			</div>
			<div className={s.modalBody}>{modal.place}</div>
			<div className={s.modalFooter}></div>
		</Modal>
	)
}

export default CardModal
