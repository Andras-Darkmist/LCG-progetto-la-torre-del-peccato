let img_ghiglio;
let ghiglio1;

function preload_ghiglio (s) {
    img_ghiglio = PP.assets.image.load(s, "assets/immagini/ghigliottina.png", 150, 156);
}

function create_ghiglio (s){
    ghiglio1 = PP.assets.image.add(s, img_ghiglio, 6000, 0, 0, 0);
    PP.physics.add(s, ghiglio1, PP.physics.type.DYNAMIC);
}

function update_ghiglio (s) {
}