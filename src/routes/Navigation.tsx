import { BrowserRouter } from 'react-router-dom';
import {Suspense} from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Component } from 'react-router/node_modules/@types/react';
import { LazyPages1, LazyPages2, LazyPages3 } from '../01-lazyload/pages';

import logo from '../logo.svg'
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={null}>
        <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {routes.map(route => (<li key={route.to}>
                                <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                    {route.name}
                                </NavLink>
                            </li>))}

                        </ul>
                    </nav>


                    <Routes>
                        {routes.map(route => (
                            <Route key={route.to} path={route.path} element={<route.Component />} />)
                        )}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
