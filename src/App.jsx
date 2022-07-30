import React from 'react'
import { Route, Redirect, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'


import Search from './components/Search'
import Topsearch from './components/Topsearch'

export default function App() {




	return (
		<BrowserRouter>
			<div>
				<Topsearch />
				<Route path='/home' component={Home}></Route>
				<Route path='/search' component={Search} ></Route>
				<Redirect to='/home'> </Redirect>
			</div>
		</BrowserRouter>
	)
}







