let img_lama;
let img_ghiglio;
let ghigliottine = [];
let numero_ghiglio = [];
let lame = [];


function preload_ghiglio (s) {
    ghigliottine = [];
    numero_ghiglio = [];
    lame = [];

    img_ghiglio = PP.assets.image.load(s, "assets/immagini/ghiglio.png", 150, 156);
    img_lama = PP.assets.image.load(s, "assets/immagini/carata.jpg");
}

function create_ghiglio(s, x, y) {
    let ghiglio = PP.assets.image.add(s, img_ghiglio, x, y, 0, 0);
    PP.physics.add(s, ghiglio, PP.physics.type.STATIC);
    ghiglio.geometry.body_y = 480;

    for (let i = 0; i < ghigliottine.length; i++) {
        console.log("ses")
        let lama;
        lama = PP.assets.image.add(s, img_lama, ghigliottine[i].geometry.x + 25, ghigliottine[i].geometry.y - 150, 0, 0);
        lama.geometry.scale_x = 4.5;
        lama.geometry.scale_y = 4.5;
        PP.physics.add(s, lama, PP.physics.type.DYNAMIC);
        PP.physics.set_allow_gravity(lama, false);
        PP.physics.set_immovable(lama, true);
        lame.push(lama);
    }
    ghigliottine.push(ghiglio);
}

function update_ghiglio(s) {
    for (let i = 0; i < ghigliottine.length; i++) {
        if (Math.abs(ghigliottine[i].geometry.x - player.geometry.x) <= 80) {
            PP.timers.add_timer(s, 500, scatto_ghiglio, false);
            numero_ghiglio.push(i);
            //console.log(numero_ghiglio);
        }

        if (lame[i].geometry.y <= 20 && PP.physics.get_velocity_y(lame[i]) != 600){
            PP.physics.set_velocity_y(lame[i], 0);
        }
        if (lame[i].geometry.y >= 620 && PP.physics.get_velocity_y(lame[i]) != -600){
            PP.physics.set_velocity_y(lame[i], 0);
        }
    }


}

function scatto_ghiglio(s){
    i = numero_ghiglio.shift();
    PP.physics.set_velocity_y(lame[i], 600);
    
    PP.timers.add_timer(s, 1000, ritorno_ghiglio, false);
    numero_ghiglio.push(i);
}

function ritorno_ghiglio(s) {
    i = numero_ghiglio.shift();
    console.log(i)
        PP.physics.set_velocity_y(lame[i], -600);
}

function decapitazione(s){
    console.log("sus morto")
    morte(s);    
    PP.timers.add_timer(s, 1000, game_over, false);
}