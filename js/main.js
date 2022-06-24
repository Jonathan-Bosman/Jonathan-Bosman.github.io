let code = 0;
document.addEventListener('keydown', logKey);
function logKey(e) {
    if ((`${e.code}` == "ArrowRight" && code == 5) || (`${e.code}` == "ArrowRight" && code == 7)) {
        code = code+1;
    }
    if ((`${e.code}` == "ArrowLeft" && code == 4) || (`${e.code}` == "ArrowLeft" && code == 6)) {
        code = code+1;
    }
    if ((`${e.code}` == "ArrowDown" && code == 2) || (`${e.code}` == "ArrowDown" && code == 3)) {
        code = code+1;
    }
    if ((`${e.code}` == "ArrowUp" && code == 0) || (`${e.code}` == "ArrowUp" && code == 1)) {
        code = code+1;
    }
    if (`${e.code}` == "KeyB" && code == 8) {
        code = code+1;
    }
    if (`${e.code}` == "KeyQ" && code == 9) {
        code = code+1;
    }
    if (code==10) {
        document.getElementById("loisirs").innerHTML="<ol><br><br><br><li>Loisirs</li><li>Jeux vidéos (Shining Force, Dragon's Dogma...)</li><li>Animes (Mon voisin Totoro, Tiger&Bunny ...)</li><li>Jeux de rôles (Donjons et Dragons, Shadowrun...)</li></ol>";
    }
}