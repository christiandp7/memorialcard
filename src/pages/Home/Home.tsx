import React, { FC } from 'react'
import Layout from '@components/Layout'
import PlaceInput from '@components/PlaceInput'
import s from './Home.module.css'

const Home: FC = () => {
	return (
		<Layout>
			<PlaceInput />
		</Layout>
	)
}

export default Home
