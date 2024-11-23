
let cassa2;

function preload_cassa2 (s){
    img_cassa = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);

}

function create_cassa2 (s){
    cassa2 = PP.assets.image.add(s, img_cassa, 850, 160, 0, 0);
    PP.physics.add(s, cassa2, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(cassa2, 7000);
}

function update_cassa2 (s) {
}