import { AutumnFeatureShell } from '@nx-react/autumn/feature-shell';
import React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

import './seasons-feature-shell.scss';

// tslint:disable-next-line: no-empty-interface
export interface SeasonsFeatureShellProps extends RouteComponentProps {}

export const SeasonsFeatureShell = (props: SeasonsFeatureShellProps) => {
  const { match } = props;
  const getUrl = (suffix: string) => `${match.url}/${suffix}`;

  const autumn = getUrl('autumn');
  const winter = getUrl('winter');
  return (
    <div>
      <h1>Select a season!</h1>

      <ul>
        <li>
          <Link to={autumn}>Autumn</Link>
        </li>
        <li>
          <Link to={winter}>Winter</Link>
        </li>
      </ul>

      <Route
        path={autumn}
        render={autumnalProps => (
          <div>
            <hr />
            <AutumnFeatureShell {...autumnalProps} />
          </div>
        )}
      />
    </div>
  );
};

export default SeasonsFeatureShell;
