function Rogzites() {
    let datum = document.getElementById("datum").value;
    let idotartam = parseInt(document.getElementById("idotartam").value);
    let tavolsag = parseInt(document.getElementById("tavolsag").value);
    let atlagsebesseg = parseInt(document.getElementById("atlagsebesseg").value);
    let suly = parseInt(document.getElementById("suly").value);

    if (isNaN(idotartam) || isNaN(tavolsag) || datum === "" || atlagsebesseg === "" || suly === "") {
        alert("Kérem, töltse ki az összes mezőt helyesen!");
        return;
    }

    let tablaTorzs = document.getElementById("tabla_torzs");
    let ujSor = document.createElement("tr");
    ujSor.innerHTML = `
        <td>${datum}</td>
        <td>${idotartam}</td>
        <td>${tavolsag}</td>
        <td>${atlagsebesseg}</td>
        <td>${suly*7.7*idotartam/60}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Törlés</button></td>
        <td><button onclick="szerkesztes(this)">Szerkesztés</button></td>
    `;
    tablaTorzs.appendChild(ujSor);

    // mezők ürítése
    document.getElementById("datum").value = "";
    document.getElementById("idotartam").value = "";
    document.getElementById("tavolsag").value = "";
    document.getElementById("atlagsebesseg").value = "";
    document.getElementById("suly").value = "";
}

// Szerkesztés funkció
function szerkesztes(gomb) {
    let sor = gomb.parentElement.parentElement;
    let cells = sor.querySelectorAll("td");
    for (let i = 0; i < 5; i++) {
        let value = cells[i].innerText;
        cells[i].innerHTML = `<input type="text" value="${value}">`;
    }
    cells[6].innerHTML = `<button onclick="mentes(this)">Mentés</button>`;
}

// Mentés funkció
function mentes(gomb) {
    let sor = gomb.parentElement.parentElement;
    let cells = sor.querySelectorAll("td");
    for (let i = 0; i < 5; i++) {
        let input = cells[i].querySelector("input");
        cells[i].innerText = input.value;
    }
    // Gomb visszaállítása Szerkesztésre
    cells[6].innerHTML = `<button onclick="szerkesztes(this)">Szerkesztés</button>`;
}

//összesítés
function osszesites() {
    let tablaTorzs = document.getElementById("tabla_torzs");
    let sorok = tablaTorzs.getElementsByTagName("tr");
    let osszTavolsag = 0;
    let osszKaloria = 0;
    let osszatlagsebesseg = 0;
    let db = 0;
    for (let i = 0; i < sorok.length; i++) {
        let cells = sorok[i].getElementsByTagName("td");
        if (cells.length >= 5) {
            osszTavolsag += parseFloat(cells[2].innerText);
            osszatlagsebesseg += parseFloat(cells[3].innerText);
            osszKaloria += parseFloat(cells[4].innerText);
            db++;
        }
    }
    let atlagSebesseg = db > 0 ? (osszatlagsebesseg / db).toFixed(2) : 0;
    let celSzoveg = "";
    if (celTavolsag > 0) {
        if (osszTavolsag >= celTavolsag) {
            celSzoveg = "\nGratulálok! Elérted a kitűzött célt! 🎉";
        } else {
            celSzoveg = `\nMég ${Math.max(0, (celTavolsag - osszTavolsag).toFixed(2))} km hiányzik a célhoz.`;
        }
    }
    alert(`Összesített adatok:
Összes megtett táv: ${osszTavolsag} km
Átlagos sebesség: ${atlagSebesseg} km/h
Összes elégetett kalória: ${osszKaloria} kcal${celSzoveg}`);
}

let celTavolsag = 0;

function celBeallitas() {
    let celInput = document.getElementById("cel").value;
    celTavolsag = parseFloat(celInput);
    if (isNaN(celTavolsag) || celTavolsag <= 0) {
        document.getElementById("cel_kiiras").innerText = "Adj meg egy pozitív számot!";
        document.getElementById("cel_kiiras").style.color = "red";
        celTavolsag = 0;
    } else {
        document.getElementById("cel_kiiras").innerText = `Cél: ${celTavolsag} km`;
        document.getElementById("cel_kiiras").style.color = "green";
    }
}
