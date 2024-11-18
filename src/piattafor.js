let img_piatt;
let piatt;

function preload_piatt (s) {
    img_piatt = PP.assets.image.load(s, "assets/immagini/platform.png", 150, 156);
}

function create_piatt (s){
    piatt = PP.assets.image.add(s, img_piatt, 350, 310, 0, 0);
    //piatt.geometry.scale_x = 0.2;
    //piatt.geometry.scale_y = 0.2;
    PP.physics.add(s, piatt, PP.physics.type.STATIC);
}

function update_piatt (s) {
}