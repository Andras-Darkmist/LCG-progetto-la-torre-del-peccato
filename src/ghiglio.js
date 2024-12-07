let img_ghiglio;
let ghigliottine = [];
let numero_ghiglio = [];

function preload_ghiglio (s) {
    img_ghiglio = PP.assets.image.load(s, "assets/immagini/ghiglio.png", 150, 156);
}

function create_ghiglio (s, x, y){
    let ghiglio = PP.assets.image.add(s, img_ghiglio, x, y, 0, 0);
    PP.physics.add(s, ghiglio, PP.physics.type.DYNAMIC);
    ghiglio.geometry.body_y = -190
    ghigliottine.push(ghiglio);
}

function update_ghiglio(s) {
    for (let i = 0; i < ghigliottine.length; i++) {
        if (Math.abs(ghigliottine[i].geometry.x - player.geometry.x) < 10)
            let (i);
            numero_ghiglio.push(i);
            console.log(numero_ghiglio);
            PP.timers.add_timer(s, 500, scatto_ghiglio(), false);
    }
}

function scatto_ghiglio(s){
    let i = numero_ghiglio.shift();
    PP.physics.set_velocity_y(ghigliottine[i], 300);
}