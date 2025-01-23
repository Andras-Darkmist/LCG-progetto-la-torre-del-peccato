let img_porta_3;
let porta3;

function preload_porta3 (s) {
    img_porta_3 = PP.assets.image.load(s, "assets/immagini/porta di ferro.png", 150, 156);
}

function create_porta3 (s, x, y){
    porta3 = PP.assets.image.add(s, img_porta_3, x, y, 0, 0);
    PP.physics.add(s, porta3, PP.physics.type.STATIC);
}

function update_porta3 (s) {
    if (morte_animazioni_caricatore == true)
    {
            porta3.geometry.body_y = 0;
            porta3.geometry.y = 0;
    }
}