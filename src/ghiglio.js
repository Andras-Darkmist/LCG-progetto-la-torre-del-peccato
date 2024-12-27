let img_lama;
let img_ghiglio;
let ghigliottine = [];
let numero_ghiglio = [];
let lame = [];
let blocco_temporaneo_lama = []; // permette di bloccare le lame dopo che si è già attivata in modo che non possa riscendere prima di essere tornata al suo posto

let distanza_scatto = 120;
let velocità_lama_giu = 600;
let velocità_lama_su = -400;


function preload_ghiglio(s) {
    ghigliottine = [];
    numero_ghiglio = [];
    lame = [];

    img_ghiglio = PP.assets.image.load(s, "assets/immagini/ghiglio.png", 150, 156);
    img_lama = PP.assets.image.load(s, "assets/immagini/carata.jpg");
    
    for (let i = 0; i < ghigliottine.length; i++) {
        blocco_temporaneo_lama[i] = false;
    }
}

function create_ghiglio(s, x, y) {
    let ghiglio = PP.assets.image.add(s, img_ghiglio, x, y, 0.5, 0.5);
    PP.physics.add(s, ghiglio, PP.physics.type.STATIC);
    ghiglio.geometry.body_y = 480;
    ghigliottine.push(ghiglio);

    let i = (ghigliottine.length) - 1;

    let lama;
    lama = PP.assets.image.add(s, img_lama, ghigliottine[i].geometry.x, ghigliottine[i].geometry.y - 345, 0.5, 0.5);
    lama.geometry.scale_x = 4.5;
    lama.geometry.scale_y = 4.5;
    PP.physics.add(s, lama, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(lama, false);
    PP.physics.set_immovable(lama, true);
    blocco_temporaneo_lama.push(false);
    lame.push(lama);
}

function update_ghiglio(s) {
    for (let i = 0; i < ghigliottine.length; i++) {
        if (Math.abs(ghigliottine[i].geometry.x - player.geometry.x) <= distanza_scatto && blocco_temporaneo_lama[i] == false && lame[i].geometry.y <= 610) {
            console.log("lol")
            blocco_temporaneo_lama[i] = true;
            
            PP.timers.add_timer(s, 600, scatto_ghiglio, false);
            numero_ghiglio.push(i);
            //console.log(numero_ghiglio);
        }

        if (lame[i].geometry.y <= 20 && PP.physics.get_velocity_y(lame[i]) != velocità_lama_giu){
            blocco_temporaneo_lama[i] = false;
            PP.physics.set_velocity_y(lame[i], 0);
        }
        if (lame[i].geometry.y >= 620 && PP.physics.get_velocity_y(lame[i]) != velocità_lama_su){
            PP.physics.set_velocity_y(lame[i], 0);
        }
    }


}

function scatto_ghiglio(s){
    i = numero_ghiglio.shift();
    PP.physics.set_velocity_y(lame[i], velocità_lama_giu);
    
    PP.timers.add_timer(s, 2000, ritorno_ghiglio, false);
    numero_ghiglio.push(i);
}

function ritorno_ghiglio(s) {
    i = numero_ghiglio.shift();
    console.log(i)
        PP.physics.set_velocity_y(lame[i], velocità_lama_su);
}

function decapitazione(s){
    if (invincibilità == false) {
        console.log("sus morto")
        vita_persa (s);
    }
}