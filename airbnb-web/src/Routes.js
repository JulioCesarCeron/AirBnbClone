import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import Signup from './pages/Signup';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			)}
	/>
);

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={() => <h1>Login</h1>} />
				<Route path="/signup" component={Signup} />
				<PrivateRoute path="/app" component={() => <h1>App</h1>} />
				<Route path="*" component={() => <h1>Page not found</h1>} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;