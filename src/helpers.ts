export function serialize(obj: any) {
  let queryString: string = '';
  // tslint:disable-next-line:forin
  for ( const key in obj ) {
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}

export function dotSplit(txt: string) {
  const result = txt.split('.');
  if (result.length > 1) { result[0] = result[0] + '.'; }
  return result ;
}
