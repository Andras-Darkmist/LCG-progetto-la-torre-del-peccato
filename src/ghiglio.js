let img_ghiglio;
let ghigliottine = [];
let numero_ghiglio = [];
let lama;

function preload_ghiglio (s) {
    ghigliottine = [];
    numero_ghiglio = [];

    img_ghiglio = PP.assets.image.load(s, "assets/immagini/ghiglio.png", 150, 156);
}

function create_ghiglio (s, x, y){
        ghiglio = PP.assets.image.add(s, img_ghiglio, x, y, 0, 0);
        PP.physics.add(s, ghiglio, PP.physics.type.DYNAMIC);
        PP.physics.set_allow_gravity(ghiglio, false);

        for (let i = 0; i < ghigliottine.length; i++){
            console.log("ses")
            lama = PP.assets.image.add(s, img_carta, ghigliottine[i].geometry.x, ghigliottine[i].geometry.y - 120, 0.5, 0.5);
        }
}

function update_ghiglio(s) {
    for (let i = 0; i < ghigliottine.length; i++) {
        if (Math.abs(ghigliottine[i].geometry.x - player.geometry.x) <= 100) {
            numero_ghiglio.push(i);
            console.log(numero_ghiglio);
            PP.timers.add_timer(s, 500, scatto_ghiglio, false);
        }
    }
    if (ghiglio.geometry.y >= 180 ){
        PP.physics.set_velocity_y(ghiglio, -100);
    }
          
}

function scatto_ghiglio(s){

    PP.physics.add(s, lama, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(lama, false);
    PP.physics.set_velocity_y(lama, -600);
    
    PP.timers.add_timer(s, 700, ritorno_ghiglio, false);
}

function ritorno(s){
    if (lama.geometry.y <= ghigliottine[i].geometry.y - 120)
    PP.physics.set_velocity_y(lama, 600);
}