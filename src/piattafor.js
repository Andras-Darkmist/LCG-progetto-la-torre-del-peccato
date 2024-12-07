let img_piatt;
let piatt = [];

function preload_piatt (s) {
    img_piatt = PP.assets.image.load(s, "assets/immagini/platform.png", 150, 156);
}

function create_piatt (s, x, y){
    let piatt_sing = PP.assets.image.add(s, img_piatt, x, y, 0, 0);
    PP.physics.add(s, piatt_sing, PP.physics.type.STATIC);
    piatt.push(piatt_sing);
}

function update_piatt (s) {
}