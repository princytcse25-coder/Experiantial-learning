window.onload = function () {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            var lat = position.coords.latitude.toFixed(4);
            var lon = position.coords.longitude.toFixed(4);

            var loc = document.createElement("p");
            loc.innerHTML = "Your Location: (" + lat + ", " + lon + ")";
            loc.style.backgroundColor = "lightblue";
            loc.style.padding = "10px";
            loc.style.border = "1px solid blue";

            document.body.insertBefore(loc, document.body.firstChild);
        });
    }

    var links = document.querySelectorAll(".faculty-list a");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            localStorage.setItem("facultyName", this.innerText);
        });

        link.addEventListener("mouseover", function() {
            this.style.color = "red";
            this.style.fontSize = "18px";
        });

        link.addEventListener("mouseout", function() {
            this.style.color = "";
            this.style.fontSize = "";
        });
    });

    var last = localStorage.getItem("facultyName");

    if (last) {
        var msg = document.createElement("p");
        msg.innerHTML = "Last visited faculty: " + last;
        msg.style.backgroundColor = "lightgreen";
        msg.style.padding = "10px";
        msg.style.border = "1px solid green";

        document.body.insertBefore(msg, document.body.firstChild);
    }

    var rows = document.querySelectorAll("table tr");

    rows.forEach(function(row) {

        row.addEventListener("mouseover", function() {
            this.style.backgroundColor = "yellow";
        });

        row.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
        });

        row.addEventListener("click", function() {
            rows.forEach(function(r){
                r.style.backgroundColor = "";
            });
            this.style.backgroundColor = "lightgreen";
        });

        row.addEventListener("dblclick", function() {
            this.style.backgroundColor = "orange";
        });
    });

    document.querySelectorAll("nav a").forEach(function(link){
        link.addEventListener("click", function(e){
            e.preventDefault();

            var target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    var cards = document.querySelectorAll(".card");

    cards.forEach(function(card){
        card.addEventListener("mouseover", function(){
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 0 10px gray";
        });

        card.addEventListener("mouseout", function(){
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });

};