const codeConverter = function converter(code) {
  let name = "";

  switch (code) {
    case "01d":
      name = "fas fa-sun";
      break;
    case "01n":
      name = "fas fa-moon";
      break;
    case "02d":
      name = "fas fa-cloud-sun";
      break;
    case "02n":
      name = "fas fa-cloud-moon";
      break;
    case "03d":
      name = "fas fa-cloud";
      break;
    case "03n":
      name = "fas fa-cloud";
      break;
    case "04d":
      name = "fas fa-cloud";
      break;
    case "04n":
      name = "fas fa-cloud";
      break;
    case "09d":
      name = "fas fa-cloud-showers-heavy";
      break;
    case "09n":
      name = "fas fa-cloud-showers-heavy";
      break;
    case "10d":
      name = "fas fa-cloud-sun-rain";
      break;
    case "10n":
      name = "fas fa-cloud-moon-rain";
      break;
    case "11d":
      name = "fas fa-bolt";
      break;
    case "11n":
      name = "fas fa-bolt";
      break;
    case "13d":
      name = "fas fa-snowflake";
      break;
    case "13n":
      name = "fas fa-snowflake";
      break;
    case "50d":
      name = "fas fa-smog";
      break;
    case "50n":
      name = "fas fa-smog";
      break;

    default:
      name = "fas fa-question";
  }
  return name;
};

export { codeConverter };
