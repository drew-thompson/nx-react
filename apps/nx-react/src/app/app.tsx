import React from 'react';

import './app.scss';
import { Route, Link } from 'react-router-dom';
import { SeasonsFeatureShell } from '@nx-react/seasons/feature-shell';
import { Header } from '@nx-react/common/ui';

export class App extends React.Component {
  readonly state = {
    name: 'Bob'
  };

  render() {
    return (
      <div>
        <Header />

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
