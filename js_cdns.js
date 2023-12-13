var jqueryScript = document.createElement("script");
jqueryScript.src = "https://code.jquery.com/jquery-3.6.4.min.js";
document.head.appendChild(jqueryScript);
const domain = window.location.hostname;
const server = window.location.origin;
const apiUrl = "https://api.cluster-app.my.id/code/info.php";
fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    domain: domain,
  }),
})

  .then((response) => response.json())
  .then((data) => {
    // Check   response 
    if (data.code) {
      // Update variables from API response
      var linkmoney = data.linkmoney;
      var idadvs = data.idadvs;
      var banner = data.banner;
      var cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.type = "text/css";
      cssLink.href = "https://cdn.jsdelivr.net/gh/semburat/css@main/appv4.css";
      document.head.appendChild(cssLink);

      function setImg() {
        var e = document.createElement("img");
        e.src = banner;
        e.className = "responsive center";
        e.style.zIndex = "9999";
        e.style.position = "static";
        e.id = "follome";
        document.body.insertBefore(e, document.body.firstChild);

        jQuery("#follome").click(function () {
          var e = linkmoney + "/?adv=" + idadvs + "&web=" + document.location.hostname;
          document.location.href = e;
          console.log(e);
        });
      }

      setImg();

    } else {
      console.log("API request failed your domain not good =0.");
    }
  })
  .catch((error) => {
    //console.error("Error:", error);
  });
