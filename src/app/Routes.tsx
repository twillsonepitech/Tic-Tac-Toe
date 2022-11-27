import React, { Component } from 'react'
import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<RouterRoutes>
      		<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</RouterRoutes>
	</BrowserRouter>
);

export default Routes;