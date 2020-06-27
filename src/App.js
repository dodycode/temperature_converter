import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Sidebar from './components/Sidebar';

//pages
import Home from './pages/Home';
import Temperature from './pages/Temperature';
import About from './pages/About';

function App() {
  return (
    <>
      <div className="window-content">
      	<div className="pane-group">
      		<Sidebar />

      		{/*Router*/}
      		<Switch>
      			<Route path="/" exact component={Home} />
            <Route path="/temperature-app" exact component={Temperature} />
            <Route path="/about" exact component={About} />
      		</Switch>
      	</div>
      </div>
    </>
  );
}

export default App;
