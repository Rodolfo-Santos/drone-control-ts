export function serialize(obj: any) {
  let queryString: string = '';
  // tslint:disable-next-line:forin
  for ( const key in obj ) {
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}
