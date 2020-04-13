import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu></Menu>
                    {/* Nội Dung */}
                    <Switch>
                        {this.showContent(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }
    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}>
                    </Route>

                )
            })
        }
        return result;
    }
}
export default App;