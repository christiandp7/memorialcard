import React, { FC } from 'react'
import Layout from '@components/Layout'
import PlaceInput from '@components/PlaceInput'
import s from './About.module.css'

const About: FC = () => {
	return (
		<Layout about>
			<div className={s.rte}>
				<p>
					Memoria en reversa, es una acción documenta la demográfica de la Reserva
					Jackie Onassis en el Parque Central de Nueva York a través de unas tarjetas
					de recuerdo que apela a la construcción de la memoria y comunidad.
				</p>
				<p>
					Las tarjetas no crean un recuerdo solo de la ciudad de Nueva York, sino de
					donde venimos y donde estamos. Para los turistas es un volver a un pasado
					cercano, para a los trabajadores o residentes los lleva a un pasado de 30,
					25, 15 o los años que fueran hacia atrás, a sus orígenes, a su familia.
				</p>
				<p>
					Las tarjetas fueron colocadas en distintos asientos del parque. A su lado
					tenían un código QR, para personalizar la tarjeta en caso de que no
					encuentre una con la ciudad o país que desee.
				</p>
				<br />
				<p>
					Memory in Reverse is an action that documents the demographic of the Jackie
					Onassis Reserve in Central Park in New York through memory cards that
					appeal to the construction of memory and community.
				</p>
				<p>
					The cards don't just create a memory of New York City, but where we came
					from and where we are now. For tourists it is a return to a close past, for
					workers or residents it takes them to a past of 30, 25, 15 years or the
					years that went back, to their origins, to their family.
				</p>
				<p>
					The cards were placed on different benches in the park. Next to them was a
					QR code, to personalize the card in case you couldn’t find one with the
					city or country of your choosing.
				</p>
			</div>
		</Layout>
	)
}

export default About
