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

export function makeID(params = []) {
  let identifier = "";
  params.map((param) => {
    if (typeof param === "number") {
      identifier += param.toString();
    }
    return true;
  });
  return parseInt(identifier);
}

export function formatingDateToCRM(date) {
  if (date !== "") {
    let dateFormated = date.split("/");
    console.log(dateFormated);
    if (dateFormated.lenght === 1) {
      console.log("aqui entro");
      dateFormated = date.split("-");
    }
    console.log(dateFormated);

    dateFormated = `${dateFormated[2]}-${dateFormated[0]}-${dateFormated[1]}`;
    return dateFormated;
  } else {
    return null;
  }
}
export function formatingDateFromCRM(date) {
  if (date !== "") {
    let dateFormated = date.split("-");
    dateFormated = `${dateFormated[1]}-${dateFormated[2]}-${dateFormated[0]}`;
    return dateFormated;
  } else {
    return null;
  }
}
export function formatingDateFromMC(date) {
  if (date !== "") {
    let dateFormated = date.split(" ");
    dateFormated = dateFormated[0].split("/");
    console.log(dateFormated);
    dateFormated =
      (dateFormated[0].length > 1 ? dateFormated[0] : "0" + dateFormated[0]) +
      "-" +
      (dateFormated[1].length > 1 ? dateFormated[1] : "0" + dateFormated[1]) +
      "-" +
      (dateFormated[2].length > 1 ? dateFormated[2] : "0" + dateFormated[2]);
    console.log(dateFormated);
    return dateFormated;
  } else {
    return null;
  }
}

export function getDateInString(date) {
  return `${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()}-${
    date.getDay() < 10 ? "0" + date.getDay() : date.getDay()
  }-${date.getFullYear()}`;
}
export function getTimeInString(date) {
  let tDate = new Date(date);
  tDate.setUTCHours(date.getHours());
  tDate.setUTCMinutes(date.getMinutes());
  return tDate.toISOString().split("T");
}
