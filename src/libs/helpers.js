export function getParamsFromUrl(variable) {
  let search = window.location.search.substr(1);
  var searchParams = new URLSearchParams(search);
  return searchParams.get(variable);
}
export function getAllParamsFromUrl() {
  let search = window.location.search;
  var searchParams = new URLSearchParams(search);
  return Object.fromEntries(searchParams.entries());
}
