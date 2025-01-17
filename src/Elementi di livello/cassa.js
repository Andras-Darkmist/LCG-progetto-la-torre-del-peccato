let img_cassa;
let casse =[];

function preload_cassa (s) {
    img_cassa = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);

}

function create_cassa (s, x, y){
    let cassa = PP.assets.image.add(s, img_cassa, x, y, 0, 0);
    PP.physics.add(s, cassa, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(cassa, 7000);
    casse.push(cassa);
}

function update_cassa (s) {
}