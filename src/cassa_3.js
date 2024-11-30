
let cassa3;

function preload_cassa3 (s) {
    img_cassa = PP.assets.image.load(s, "assets/immagini/cassabassa.png", 150, 156);

}

function create_cassa3 (s){
    cassa3 = PP.assets.image.add(s, img_cassa, 1350, 360, 0, 0);
    PP.physics.add(s, cassa3, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(cassa3, 7000);
}

function update_cassa3 (s) {
}