import * as throttle from 'lodash.throttle';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

/* tslint:disable:no-empty-interface */
export interface HeaderProps { }

export class Header extends React.Component<{}, { atTop: boolean }> {
  private timeoutId;

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      atTop: this.isAtTop(window.scrollY)
    };
  }

  componentDidMount() {
    this.setState({ atTop: this.isAtTop(window.scrollY) });

    window.addEventListener('scroll', throttle(this.onScroll.bind(this), 250));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  private onScroll(_: Event): void {
    this.setState({ atTop: this.isAtTop(window.scrollY) });
  }

  private isAtTop(value: number): boolean {
    return !value;
  }

  render() {
    return (
      <div style={{ marginBottom: 68 }}>
        <header style={{ boxShadow: this.state.atTop ? '' : '0 2px 4px 0 rgba(22, 22, 22, 0.15)' }}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/seasons">Seasons</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }

};

export default Header;
