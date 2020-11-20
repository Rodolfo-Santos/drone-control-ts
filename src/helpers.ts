export function serialize(obj: any) {
  let queryString: string = '';
  for ( const key in obj ) {
    if (key !== null) { queryString += `&${key}=${obj[key]}`; }
  }
  return queryString;
}
