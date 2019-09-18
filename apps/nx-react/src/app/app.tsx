import React from 'react';

import './app.scss';
import { Route, Link } from 'react-router-dom';

export class App extends React.Component {
  readonly state = {
    name: 'Bob'
  };

  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/types">Types</Link>
          </li>
        </ul>

        <hr />
        {/* <Route
          path="/types"
          exact
          component={() => <SharedUi name={this.state.name} />}
        />
        <Route
          path="/:name"
          render={props => (
            <SharedUi {...props} name={this.state.name + 'by'} />
          )}
        /> */}
      </div>
    );
  }
}

export default App;
