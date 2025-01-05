let img_porta;
let img_porta_aperta;
let porte_aperte = [];
let porte = [];

function preload_porta (s) {
    porte = [];
    porte_aperte = []
    img_porta = PP.assets.image.load(s, "assets/immagini/porta1.png", 150, 156);
    img_porta_aperta = PP.assets.image.load(s, "assets/immagini/porta1aperta.png", 150, 156);
}

function create_porta (s, x, y){
    let porta = PP.assets.image.add(s, img_porta, x, y, 0, 0);
    PP.physics.add(s, porta, PP.physics.type.STATIC);
    let porta_aperta = PP.assets.image.add(s, img_porta_aperta, x, y - 2000, 0, 0);
    PP.physics.add(s, porta_aperta, PP.physics.type.STATIC);
    porte.push(porta);
    porte_aperte.push(porta_aperta);
}

function update_porta (s) {
}