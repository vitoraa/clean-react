export const makeApiURL = (path: string): string => {
  const url = `http://fordevs.herokuapp.com/api${path}`
  return url
}
