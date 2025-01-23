let img_cool;
let img_cool_scarico;
let cool;
let cool_scarico;

function preload_cooldown (s) {
    img_cool = PP.assets.image.load(s, "assets/immagini/cool_carico.jpeg", 150, 156);
    img_cool_scarico = PP.assets.image.load(s, "assets/immagini/cool_scarico.jpeg", 150, 156);
}

function create_cooldown(s) {
    cool = PP.assets.image.add(s, img_cool, 750, 40, 0, 0);
    cool.geometry.scale_x = 0.5;
    cool.geometry.scale_y = 0.5;
    cool.tile_geometry.scroll_factor_x = 0;
    cool.tile_geometry.scroll_factor_y = 0;
    cool_scarico = PP.assets.image.add(s, img_cool_scarico, 750, -1000, 0, 0);
    cool_scarico.geometry.scale_x = 0.5;
    cool_scarico.geometry.scale_y = 0.5;
    cool_scarico.tile_geometry.scroll_factor_x = 0;
    cool_scarico.tile_geometry.scroll_factor_y = 0;
}

function cooldown_carico(s) {
    cool_scarico.geometry.y = -1000;
    cool.geometry.y = 40;
}

function cooldown_scarico(s) {
    cool.geometry.y = -1000;
    cool_scarico.geometry.y = 40;
}