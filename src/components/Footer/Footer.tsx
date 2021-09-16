import React, { FC } from 'react'
import s from './Footer.module.css'
import { Link } from 'react-router-dom'
import { QuestionMark } from '@components/svg'
import { BsArrowLeft } from 'react-icons/bs'

interface Props {
	about?: boolean
}

const Footer: FC<Props> = ({ about = false }) => {
	return (
		<div className={s.root}>
			<div className={s.address}>
				jackie onassis reservoir, central park, 86st - 91st
			</div>
			<div className={s.toolbar}>
				{about ? (
					<Link to="/">
						<span className={s.backToHome}>
							<BsArrowLeft />
						</span>
					</Link>
				) : (
					<Link to="/about">
						<QuestionMark />
					</Link>
				)}
			</div>
		</div>
	)
}

export default Footer
