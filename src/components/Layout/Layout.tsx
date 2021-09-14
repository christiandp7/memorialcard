import React, { FC } from 'react'
import s from './Layout.module.css'
import Footer from '@components/Footer'

interface Props {
	children: React.ReactNode | string
	about?: boolean
}

const Layout: FC<Props> = ({ children, about = false }) => {
	return (
		<div className={s.root}>
			<main className={s.main}>{children}</main>
			<Footer about={about} />
		</div>
	)
}

export default Layout
