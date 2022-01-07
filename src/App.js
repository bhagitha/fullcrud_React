import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="main">
      <h2 className="main-header"> CRUD application with React</h2>
      <div>
        {/* <Create/> */}
        <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <Route exact path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
