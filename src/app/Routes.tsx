import React, { Component } from 'react'
import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import Login from '../pages/Login';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<RouterRoutes>
      		<Route path="/" element={<Login />} />
		</RouterRoutes>
	</BrowserRouter>
);

export default Routes;