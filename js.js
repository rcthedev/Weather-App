window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api =
        "${proxy}https://api.darksky.net/forecast/c5859294364df451c70c819b24ff9f60/ ${lat}, ${long}";

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        });
    });
  }
});
