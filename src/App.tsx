// import "./styles/main";
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '@pages/Home'
import About from '@pages/About'
import NotFound from '@pages/NotFound'
import { CardContextProvider } from '@context/CardContext'

function App() {
	return (
		<CardContextProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route path="/*" component={NotFound} />
				</Switch>
			</Router>
		</CardContextProvider>
	)
}

export default App
