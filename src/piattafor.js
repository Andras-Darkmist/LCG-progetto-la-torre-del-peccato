let img_piatt;
let piatt1;

function preload_piatt (s) {
    img_piatt = PP.assets.image.load(s, "assets/immagini/platform.png", 150, 156);
}

function create_piatt (s){
    piatt1 = PP.assets.image.add(s, img_piatt, 3850, 310, 0, 0);
    PP.physics.add(s, piatt1, PP.physics.type.STATIC);
}

function update_piatt (s) {
}