let img_ultima_cassa;
let ultima_cassa;

function prleoad_ultima_cassa(s)
{
    img_ultima_cassa = PP.assets.image.load (s, "Assets/immagini/ultima_cassa.png");
}

function create_ultima_cassa(s)
{
    ultima_cassa = PP.assets.image.add (s, img_ultima_cassa, 1800, 620, 0, 1);
    PP.physics.add(s, ultima_cassa, PP.physics.type.STATIC);

}
