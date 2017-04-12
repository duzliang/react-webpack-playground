import React from 'react';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

/**
 * Router takes in the browserHitsory and all the routes we
 * created in './routes/'. This is the highest level component
 * of our application.
 * learn more: https://github.com/ReactTraining/react-router/blob/master/docs/API.md#router
 */
const Root = () => <Router history={browserHistory} routes={routes}/>;

export default Root;
