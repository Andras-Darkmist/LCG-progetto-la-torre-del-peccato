let Asmodeo;
let Asmodeo_img;

function preload_Asmodeo (s){
    Asmodeo_img = PP.assets.image.load(s, "assets/immagini/Asmodeo livello 1.PNG", 150, 150);
}

function create_Asmodeo (s) {
    Asmodeo = PP.assets.image.add(s, Asmodeo_img, -800, 620, 0, 1);
    PP.physics.add(s, Asmodeo, PP.physics.type.STATIC);
    Asmodeo.geometry.body_y = 520;
}