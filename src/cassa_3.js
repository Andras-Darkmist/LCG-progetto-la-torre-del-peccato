
let cassa3;

function preload_cassa3 (s) {
    img_cassa = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);

}

function create_cassa3 (s){
    cassa3 = PP.assets.image.add(s, img_cassa, 850, 360, 0, 0);
    cassa3.geometry.scale_x = 0.2;
    cassa3.geometry.scale_y = 0.2;
    PP.physics.add(s, cassa3, PP.physics.type.DYNAMIC);
}

function update_cassa3 (s) {
    PP.physics.set_velocity_x(cassa3, 0);
}