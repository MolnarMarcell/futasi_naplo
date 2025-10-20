

function Rogzites() {
    let datum = document.getElementById("datum").value;
    let idotartam = parseInt(document.getElementById("idotartam").value);
    let tavolsag = parseInt(document.getElementById("tavolsag").value);
    let atlagsebesseg = parseInt(document.getElementById("atlagsebesseg").value);
    let kaloria = parseInt(document.getElementById("kaloria").value);

    if (isNaN(idotartam) || isNaN(tavolsag) || datum === "" || atlagsebesseg === "" || kaloria === "") {
        alert("Kérem, töltse ki az összes mezőt helyesen!");
        return;
    }

    let ujBejegyzes = document.createElement("div");
    ujBejegyzes.className = "bejegyzes";
    ujBejegyzes.innerHTML = `
        <h3>Dátum: ${datum}</h3>
        <p>Időtartam: ${idotartam} perc</p>
        <p>Távolság: ${tavolsag} km</p>
        <p>Átlagsebesség: ${atlagsebesseg} km/h</p>
        <p>Kalória: ${kaloria} kcal</p>
        <hr>
    `;
    document.getElementById("bejegyzesek").appendChild(ujBejegyzes);
    //mezők ürítése
    datum = "";
    idotartam = "";
    tavolsag = "";
    atlagsebesseg = "";
    kaloria = "";
}
