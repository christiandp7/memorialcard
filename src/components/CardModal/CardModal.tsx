import React, { FC, useState, useContext } from 'react'
import cn from 'classnames'
import s from './CardModal.module.css'
import Modal from 'react-modal'
import { CardContext } from '@context/CardContext'
import type { CardData } from '@context/CardContext'
import { BsX } from 'react-icons/bs'
import { motion } from 'framer-motion'
// import ReactPDF from '@react-pdf/renderer'
import CardTemplate from '@components/CardTemplate'
import jsPDF from 'jspdf'
import { Scrollbars } from 'react-custom-scrollbars-2'

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

	const handlePDF = () => {
		// ReactPDF.render(<CardTemplate />, 'example.pdf')
	}

	return (
		<Modal isOpen={modal.open} className={s.modal} overlayClassName={s.overlay}>
			<div className={s.modalHeader}>
				<button onClick={closeModal}>
					<BsX />
				</button>
			</div>
			<div className={s.modalBody}>
				<CardTemplate place={modal.place} closeModal={closeModal} />
			</div>
			<div className={s.modalFooter}>
				{/* <button onClick={handlePDF}>render pdf</button> */}
			</div>
		</Modal>
	)
}

export default CardModal
