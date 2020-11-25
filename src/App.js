import React, { Suspense } from 'react';
import './tailwind.output.css';

import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import KnowledgeBaseContent from './components/knowledge-base/knowledge-base-content';

function App() {
  return (
    <HashRouter basename='/'>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={KnowledgeBaseContent}/>
          </Switch>
        </Suspense>
      </Router>
    </HashRouter>
      
  );
}

export default App;