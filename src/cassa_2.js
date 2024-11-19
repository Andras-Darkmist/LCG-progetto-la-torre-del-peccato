
let cassa2;

function preload_cassa2 (s){
    img_cassa = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);

}

function create_cassa2 (s){
    cassa2 = PP.assets.image.add(s, img_cassa, 1150, 360, 0, 0);
    cassa2.geometry.scale_x = 0.2;
    cassa2.geometry.scale_y = 0.2;
    PP.physics.add(s, cassa2, PP.physics.type.DYNAMIC);
    //PP.physics.set_friction_x(cassa2, 1);
}

function update_cassa2 (s) {
    PP.physics.set_velocity_x(cassa2, 0);
}