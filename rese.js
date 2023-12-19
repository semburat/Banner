
var jqueryScript = document.createElement("script");
jqueryScript.src = "https://code.jquery.com/jquery-3.6.4.min.js";
document.head.appendChild(jqueryScript);
const userAgent = navigator.userAgent;
console.log('User Agent:', userAgent);
fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    console.log('IP Client:', ip);
    const apiUrl = "https://smbdev.my.id/Apiv2";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        domain: window.location.hostname,
        userAgent: userAgent,
        ip: ip,
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Check API response
      if (data.code) {
        // Update variables from API response
        var linkmoney = data.linkmoney;
        var idadvs = data.idadvs;
        var banner = data.banner;

        // Load additional CSS
        var cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.type = "text/css";
        cssLink.href = "https://cdn.jsdelivr.net/gh/semburat/css@main/appv4.css";
        document.head.appendChild(cssLink);

        // Function to set image and handle click
        function setImg() {
          var e = document.createElement("img");
          e.src = banner;
          e.className = "responsive center";
          e.style.zIndex = "9999";
          e.style.position = "static";
          e.id = "follome";
          document.body.insertBefore(e, document.body.firstChild);

         
        var custom = data.custom;
        jQuery("#follome").click(function () {
            var web;
        
            if (custom === '' || custom === undefined || custom === null) {
                web = hostname;
            } else {
                web = custom;
            }
        
            var e = linkmoney + "/?adv=" + idadvs + "&web=" + web;
            document.location.href = e;
            console.log(e);
        });


        

        // Call the function
        setImg();
      } else {
        console.log("API request failed. Your domain is not good =0.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  })
  .catch(error => console.error('Failed to get IP:', error));
