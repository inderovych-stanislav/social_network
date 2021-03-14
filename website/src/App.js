import './assets/styles/app.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import RouteWrapper from "./route/RouteWrapper";
import routers from "./route/routers";

const App = () =>
    <div className="wrapper">
        <BrowserRouter>
            <Switch>
                {Object.keys(routers).map((x, i) => <RouteWrapper key={i} {...routers[x]} />)}
            </Switch>
        </BrowserRouter>
    </div>
export default App;
