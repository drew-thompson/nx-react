import React from 'react';

import { Route, Link } from 'react-router-dom';

import './autumn-feature-shell.scss';

/* tslint:disable:no-empty-interface */
export interface AutumnFeatureShellProps {}

export const AutumnFeatureShell = (props: AutumnFeatureShellProps) => {
  return (
    <div>
      <h1>Welcome to autumn-feature-shell component!</h1>

      <ul>
        <li>
          <Link to="/">autumn-feature-shell root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the autumn-feature-shell root route.</div>}
      />
    </div>
  );
};

export default AutumnFeatureShell;
