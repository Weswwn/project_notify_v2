import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import './App.scss';

// components
import { Form } from '@pages/Form/Form';
import { Home } from '@pages/Home';
import { Toaster } from '@pages/Form/components/toaster-notification/Toaster';
import { Info } from '@pages/Info';

export const App = () => {
    useEffect(() => {
        Toaster.hide();
    })
    return (
        <>
            <div className='tw-h-full' id='app-container'>
                <Toaster />
                <Router>
                    <ScrollToTop />
                    <Route exact path="/">
                        <Home />
                        <Info />
                    </Route>

                    <Switch>
                        <Route path="/form">
                            <Form />
                        </Route>
                    </Switch>
                    {/* <Redirect from="*" to="/" /> */}
                </Router>
            </div>
        </>
    )
}