import React, { FC } from 'react'
import s from './CardModal.module.css'
import { BsX } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import CardTemplate from '@components/CardTemplate'
import { modalAnimation } from './animations'
import { SetValue } from 'use-places-autocomplete'

export interface CardModalData {
	open: boolean
	place: string
}

interface Props {
	modal: CardModalData
	setModal: React.Dispatch<React.SetStateAction<CardModalData>>
	setValue: SetValue
}

const CardModal: FC<Props> = ({ modal, setModal, setValue }) => {
	const closeModal = () => {
		setModal({ open: false, place: '' })
		setValue('')
	}

	return (
		<AnimatePresence>
			{modal.open && (
				<div className={s.modalRoot}>
					<motion.div
						variants={modalAnimation}
						initial="hidden"
						animate="visible"
						exit="exit"
						className={s.modal}>
						<div className={s.modalHeader}>
							<button className={s.closeButton} onClick={closeModal}>
								<BsX />
							</button>
						</div>
						<div className={s.modalBody}>
							<CardTemplate place={modal.place} closeModal={closeModal} />
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.35 }}
						className={s.overlay}></motion.div>
				</div>
			)}
		</AnimatePresence>
	)
}

export default CardModal
