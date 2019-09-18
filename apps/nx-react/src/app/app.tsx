import React from 'react';

import './app.scss';
import { Route, Link } from 'react-router-dom';
import { SeasonsFeatureShell } from '@nx-react/seasons/feature-shell';

export class App extends React.Component {
  readonly state = {
    name: 'Bob'
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/seasons">Seasons</Link>
          </li>
        </ul>

        <hr />

        <Route
          path="/seasons"
          render={props => <SeasonsFeatureShell {...props} />}
        />

        {/* <Route
          path="/:name"
          render={props => (
            <SharedUi {...props} name={this.state.name + 'by'} />
          )}
        /> */}

        <hr />
        <nx-react-smiles title={this.state.name} />
        <hr />
      </div>
    );
  }
}

export default App;
