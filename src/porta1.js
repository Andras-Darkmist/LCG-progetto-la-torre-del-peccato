let img_porta;
let porte = [];

function preload_porta (s) {
    porte = [];
    img_porta = PP.assets.image.load(s, "assets/immagini/porta1.png", 150, 156);

}

function create_porta (s, x, y){
    let porta = PP.assets.image.add(s, img_porta, x, y, 0, 0);
    PP.physics.add(s, porta, PP.physics.type.STATIC);
    porte.push(porta)
}

function update_porta (s) {
}