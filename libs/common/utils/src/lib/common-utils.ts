import { match } from 'react-router-dom';

export function getRelativePath({
  // tslint:disable-next-line: no-shadowed-variable
  match,
  path
}: {
  match: match;
  path: string;
}): string {
  return `${match.url}/${path}`;
}
