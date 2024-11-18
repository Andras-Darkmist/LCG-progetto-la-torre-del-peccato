let img_cassa;
let cassa;
let sus;

function preload_cassa (s) {
    img_cassa = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);

}

function create_cassa (s){
    cassa = PP.assets.image.add(s, img_cassa, 870, 160, 0, 0);
    cassa.geometry.scale_x = 0.2;
    cassa.geometry.scale_y = 0.2;
    PP.physics.add(s, cassa, PP.physics.type.DYNAMIC);
}

function update_cassa (s) {
    PP.physics.set_velocity_x(cassa, 0);
}