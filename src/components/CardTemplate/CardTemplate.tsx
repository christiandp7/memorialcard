import React, { FC, useRef } from 'react'
import s from './CardTemplate.module.css'
import Pdf from 'react-to-pdf'
import Template from '@components/svg/Template'
import { useMediaQuery } from 'react-responsive'

interface Props {
	place: string
	closeModal: () => void
}

const CardTemplate: FC<Props> = ({ place, closeModal }) => {
	const ref = useRef(null)

	const isMd = useMediaQuery({ query: '(min-width: 768px)' })
	const isLg = useMediaQuery({ query: '(min-width: 1024px)' })

	const sizes = {
		lg: {
			//.75
			width: 527.25,
			height: 620.25,
			scale: 1.15,
			// scale: 0.75,
		},
		md: {
			//.5
			width: 351.5,
			height: 413.5,
			scale: 1.75,
		},
		default: {
			// .35
			width: 246.05,
			height: 289.45,
			scale: 2.5,
		},
	}

	const widthK = (): number => {
		if (isLg) {
			return sizes.lg.width
		}
		if (isMd) {
			return sizes.md.width
		}
		return sizes.default.width
	}
	const heightK = (): number => {
		if (isLg) {
			return sizes.lg.height
		}
		if (isMd) {
			return sizes.md.height
		}
		return sizes.default.height
	}
	const fontK = (): number => {
		if (isLg) {
			// return 77
			return 3.5
		}
		if (isMd) {
			// return 50
			return 2.3
		}
		// return 34
		return 1.55
	}
	const scaleK = (): number => {
		if (isLg) {
			return sizes.lg.scale
		}
		if (isMd) {
			return sizes.md.scale
		}
		return sizes.default.scale
	}

	const getPlace = (text: string): string | JSX.Element => {
		if (text.length > 23 && text.includes(',')) {
			const main = text.slice(0, text.indexOf(','))
			const secondary = text.slice(text.indexOf(',') + 2, text.length)
			console.log(main + secondary)
			return (
				<>
					{main},<br />
					{secondary}
				</>
			)
		}
		return text
	}

	return (
		<>
			<div className={s.doc}>
				<div ref={ref} className={s.wrapper}>
					<Template width={widthK()} height={heightK()} className={s.template} />
					<div className={s.placeContainer}>
						<div
							className={s.placeText}
							style={{
								// fontSize: `${fontK() / place.length}rem`,
								fontSize: `${fontK()}rem`,
							}}>
							{getPlace(place)}
						</div>
					</div>
				</div>
				<Pdf
					targetRef={ref}
					filename="card.pdf"
					scale={scaleK()}
					x={55}
					y={50}
					onComplete={closeModal}
					options={{ unit: 'px' }}>
					{({ toPdf }: any) => (
						<div className={s.printContainer}>
							<ul>
								<li>
									<button onClick={toPdf}>enprime</button>
								</li>
								<li>
									<button onClick={toPdf}>imprimir</button>
								</li>
								<li>
									<button onClick={toPdf}>imprimer</button>
								</li>
								<li>
									<button onClick={toPdf}>print</button>
								</li>
							</ul>
						</div>
					)}
				</Pdf>
			</div>
		</>
	)
}

export default CardTemplate
