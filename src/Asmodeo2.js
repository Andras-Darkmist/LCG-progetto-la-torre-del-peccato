let Asmodeo_ologrammo;
let Asmodeo_ologrammo_img;

function preload_Asmodeo_ologrammo (s){
    Asmodeo_ologrammo_img = PP.assets.image.load(s, "assets/immagini/Asmodeo livello 2.PNG", 150, 150);
}

function create_Asmodeo_ologrammo (s) {
    Asmodeo_ologrammo = PP.assets.image.add(s, Asmodeo_ologrammo_img, 600, 620, 0, 1);
    PP.physics.add(s, Asmodeo_ologrammo, PP.physics.type.STATIC);
    Asmodeo_ologrammo.geometry.scale_x=1.5;
    Asmodeo_ologrammo.geometry.scale_y=1.5;
}