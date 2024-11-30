let img_porta;
let porta1;

function preload_porta1 (s) {
    img_porta = PP.assets.image.load(s, "assets/immagini/porta1.png", 150, 156);

}

function create_porta1 (s){
    porta1 = PP.assets.image.add(s, img_porta, 3250, 320, 0, 0);
    PP.physics.add(s, porta1, PP.physics.type.STATIC);
}

function update_porta1 (s) {
}