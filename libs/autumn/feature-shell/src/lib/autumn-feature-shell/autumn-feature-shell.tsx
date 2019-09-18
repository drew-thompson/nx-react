import { getRelativePath } from '@nx-react/common/utils';
import React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import './autumn-feature-shell.scss';

export const AutumnFeatureShell = (props: RouteComponentProps) => {
  const { match } = props;
  const pumpkins = getRelativePath({ match, path: 'pumpkins' });
  const blankets = getRelativePath({ match, path: 'blankets' });

  return (
    <div>
      <h1>Select something cozy!</h1>

      <ul>
        <li>
          <Link to={pumpkins}>Pumpkins</Link>
        </li>
        <li>
          <Link to={blankets}>Blankets</Link>
        </li>
      </ul>

      <Route path={pumpkins} render={() => <div>Pumpkins</div>} />
      <Route path={blankets} render={() => <div>Blankets</div>} />
    </div>
  );
};

export default AutumnFeatureShell;
