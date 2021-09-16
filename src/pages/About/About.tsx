import React, { FC } from 'react'
import Layout from '@components/Layout'
import PlaceInput from '@components/PlaceInput'
import s from './About.module.css'

const About: FC = () => {
	return (
		<Layout about>
			<div className={s.rte}>
				<p>
					Memoria en reversa, una acción documenta la demográfica de la Reserva
					Jackie Onassis en el Parque Central de Nueva York a través de unas tarjetas
					de recuerdo que apela a la construcción de la memoria y comunidad.
				</p>
				<p>
					Las tarjetas no crean un recuerdo solo de la ciudad de Nueva York, sino de
					donde venimos y donde estamos. Para los turistas es un volver a un pasado
					cercano, para a los trabajadores o residentes los lleva a un pasado de 30,
					25, 15 o los años que fueran hacia atrás, a sus orígenes, a su familia.
				</p>
			</div>
		</Layout>
	)
}

export default About
