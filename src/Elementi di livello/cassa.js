let img_cassa;
let casse =[];
let altezza_cassa = [];

function preload_cassa (s) {
    img_cassa = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);
    altezza_cassa = [];
}

function create_cassa (s, x, y){
    let cassa = PP.assets.image.add(s, img_cassa, x, y, 0, 0);
    altezza_cassa.push(y);
    PP.physics.add(s, cassa, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(cassa, 7000);
    casse.push(cassa);
}

function update_cassa(s) {
    for (let i = 0; i < casse.length; i++) {
        if (casse[i].geometry.y > altezza_cassa[i] + 420) {
            casse[i].geometry.y = altezza_cassa[i];
        }
    }
}