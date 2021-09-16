import React, { FC } from 'react'
import Layout from '@components/Layout'
import PlaceInput from '@components/PlaceInput'
import s from './About.module.css'

const About: FC = () => {
	return (
		<Layout about>
			<div className={s.rte}>
				<p>
					Memoria en reversa documenta la demográfica de la Reserva Jackie Onassis en
					el Parque Central de Nueva York a traves de unas tarjetas de recuerdo que
					apela a la construcción de la memoria y comunidad.
				</p>
				<p>
					La idea no es crear un recuerdo de la ciuda de Nueva York, sino de donde
					venimos y donde estamos. Para los turistas es un volver a un pasado
					cercano, a los trabajadores o residentes los lleva a un pasado de 30, 25,
					15 o los años que fueran hacia atrás, a sus orígenes, a su familia.
				</p>
				<p>
					No son de la ciudad de Nueva York sino de otras ciudades o países de donde
					podrían venir los trabajadores o turistas del area.
				</p>
				<p>
					Memoria en reversa, una acción documenta la demográfica de la Reserva
					Jackie Onassis en el Parque Central de Nueva York a traves de unas tarjetas
					de recuerdo que apela a la construcción de la memoria y comunidad.
				</p>
			</div>
		</Layout>
	)
}

export default About
