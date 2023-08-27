const Midjourney = [
    " __  __ _    _  _                            ",
    "|  \\/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ ",
    "| |\\/| | / _| || / _ \\ || | '_| ' \\/ -_) || |",
    "|_|  |_|_\\__,_|/ \\___/\\_,_|_| |_||_\\___|\\_, |",
    "             |__/                       |__/ ",
];
const initialTextColumns = [
    "/imagine close up, modern cowboy on a ranch, his eyes are filled with the cosmos, realistic",
    "    /imagine city areal perspective. streets glowing, concrete architecture, green roofs, people on the streets",
    "    /imagine the beginning of the universe by Monet",
    "    /imagine looking up a never ending staircase by Jean Giraud Moebius",
    "    /imagine abstract, cycle, organic, powerful, behance",
    "    /imagine gorgeous bouquet still life painting in the style of Odilon Redon and Henri Fantin-Latour",
    "    /imagine a warm sunny beach near an ocean full of pikachu's",
    "    /imagine 3d render of gold rings, geometric, circles, triangles, psychedelic, infinity pool, eccojams, vaporwave, oneohtrix point never, golden hour, glossy reflections and light rays, portals into other worlds",
    "    /imagine intricate jungle landscape by albrecht durer, henri rousseau, pieter brueghel the elder, mattisse",
    "    /imagine cyberpunk cat rabbit hacker, googles, anime style",
    "    /imagine banana with glasses dancing, ghibli style",
    "    /imagine corgis dancing in vibrant victorian dresses, Rococo style, in a large luxurious ballroom",
    "    /imagine A wise/meditating/fantasy wizard sitting in complex/intricate meadow with mountains/fields, painted by Japanese artist Koji Miromoto using detailed/hyperfine/lineart/print black paper ink techniques and exotic glowy psychedelic ink, autochrome colors/style. Stylized/detailed/textured, gradients, graduated colors, fine line details.",
    "    /imagine 1960s illustration of the beginning of life on Earth",
    "    /imagine commodore 1351 mouse. 80s sythwave style. hyper realistic",
    "    /imagine map of steampunk desert",
    "    /imagine francisco goya scene oil painting watercolor sci-fi science fiction cyberpunk time machine",
    "    /imagine Portrait of a cyber glitch sorceress causing video corruption with her magic",
    "    /imagine a realistic ancient temple, crumbling stone, vines, extreme detail, statues, octane render, volumetric fog, realistic lighting, reflections",
    "    /imagine giant red crystals in a desert with two suns",
    "    /imagine Robin Williams in the style of John Allison",
    "    /imagine standing in front of a castle",
    "    /imagine a professional photorealistic Portrait of an Astronaut by Peter Mohrbacher,Shaun Tan and Seb McKinnon,realistic eyes,realistic hair,,Beautiful Hit Tech costume and Helmet details,Beautiful dramatic dark moody lighting,Cinematographic Atmosphere,photorealism glossy magazine painting,Octane Render,Deep Color,8k Resolution,High Details,Flickr,DSLR,CGsociety,Artstation",
    "    /imagine Matter condensed from energy, life built upon matter, consciousness upon life",
    "    /imagine hyperreal swirling watercolors trapped in a soap bubble, 4k render",
    "    /imagine beautiful painting of clouds with sunrise, by john martin, Trending on artstation, pastel aesthetic",
    "    /imagine modern futuristic lampshade with art nouveau inspiration",
    "    /imagine photo shot on Leica IIIf with 50mm f/2 Summar; 1/50 sec; f/4",
    "    /imagine sharp alphabet typography by Walter Gropius",
    "    /imagine four dogs playing poker in a crowded room, by Malcolm Liepke and Lovis Corinth, oilpainting",
    "    /imagine invitation made with old paper written with cursive font pyrographic words in the center | red wax seal above in the top-left corner, cinematic light, artstation",
    "    /imagine aisle view of the festival street market in AlUla, many booths, seating areas, natural materials, cinematic shot",
    "    /imagine japanese temple, sakura, detailed oil painting, by Mateusz Urbanowicz",
    "    /imagine a stegosaurus drawn by John Singer Sargent",
    "    /imagine a mysterious forest with many fireflies, trees with large roots covered in moss, green vegetation, Studio Ghibli animation style, Japanese animation film background,",
    "    /imagine the universe in our ancestors eyes",
    "    /imagine The inside of a gothic cathedral that looks like a tropical alien utopian jungle rainforest, dramatic cinematic lighting",
    "    /imagine A hero stands alone, artstation, highly detailed, cinematic",
    "    /imagine symmetric texture repetition on a tree on a beautiful mountain landscape",
    "    /imagine midcentury luchador mask, risograph",
    "    /imagine ultra detailed line drawing, black and white and red, pen and ink, high tech cyberpunk geisha with headphones and sunglasses and VR goggles in style of Shohei Otomo",
    "    /imagine interior of master bedroom in victorian mansion, window, dan mindel cinematography, 35mm, movie scene, pitch black, realistic lighting, perspective shots, moody atmosphere, light coming from outside, HDRI",
    "    /imagine the alien robot queen holding a party at the dome castle in HQ Cloud City during a technicolor sunset",
    "    /imagine corporate memphis style, mural, pride month, white background, vector, characters waving pride flags, celebration",
    "    /imagine abstract painting of coral reef",
    "    /imagine a calico cat taking a nap on a kiwi",
    "    /imagine Dreamy landscape depiction inspired by the works of Katsushika Hokusai, trending on artstation",
    "    /imagine garden bridge over swan pond monet garden lillies and hanging trees art",
    "    /imagine green dragon roosting above its lair in the ruins of a fantasy medieval city",
    "    /imagine rainwater flowing through a complex system of ancient stone pipes and a gargoyle watching",
    "    /imagine butterflies flit in a sunlit field. Hiroshige Japanese woodblock print.",
    "    /imagine an illustration of a wooden magic wand with an aura of void around it, stars glitter subtly around it, closeup, fantasy card game art trending on artstation concept art by Jason Chan",
];

const O = 23;
const T = 602;
const rowLength = 1250;
const K = function (e, a, t) {
    return e < a ? a : e > t ? t : e;
};

// t < e < a: a
// e < a < t: a
// e < t < a: a
// a < e < t: e
// a < t < e: t
// t < a < e: t

const Z = function (e, a, t) {
    return e * (1 - t) + a * t;
};

let textColumns: [
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text,
    Text
];
let B: number;
let R: number;

function G(e) {
    if (
        (requestAnimationFrame(G),
        B || (B = 0.001 * e),
        R || (R = e),
        !("visible" !== document.visibilityState || e - R < 42))
    ) {
        R = e;
        for (
            var a = 0.001 * e - B,
                t = (function (e) {
                    return e < 0.5
                        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
                        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
                })(K(0.5 * (a - 1), 0, 1)),
                rol = (window.innerWidth, window.innerHeight, 0);
            rol < textColumns.length;
            rol++
        ) {
            for (
                var i = "",
                    r = "",
                    s = 1 - (2 * rol) / textColumns.length,
                    c = 0;
                c < rowLength;
                c++
            ) {
                var o = (2 * c) / rowLength - 1,
                    d = Math.sqrt(o * o + s * s),
                    l = (0.1 * a) / Math.max(0.1, d),
                    f = Math.sin(l),
                    b = Math.cos(l),
                    u = o * f - s * b,
                    m = Math.round(((o * b + s * f + 1) / 2) * rowLength),
                    h =
                        Math.round(((u + 1) / 2) * initialTextColumns.length) %
                        initialTextColumns.length,
                    g =
                        m < 0 ||
                        m >= rowLength ||
                        h < 0 ||
                        h >= textColumns.length
                            ? " "
                            : initialTextColumns[h][m] || " ";
                if (
                    rol > O &&
                    rol < O + Midjourney.length + 1 &&
                    c > T &&
                    c < T + Midjourney[0].length + 1
                ) {
                    var p = c - T - 1,
                        x = rol - O - 1,
                        v = Midjourney[x][p] || g,
                        y = " " != Midjourney[x][p - 1],
                        j = " " != Midjourney[x][p + 1];
                    if (" " != v || y || j) {
                        var w = g.charCodeAt(0),
                            _ = v.charCodeAt(0);
                        (r += g = String.fromCharCode(Math.round(Z(w, _, t)))),
                            1 == t && (g = " ");
                    } else r += " ";
                    c == T + Midjourney[0].length &&
                        ((I[x].textContent = r),
                        I[x].setAttribute("fill-opacity", t));
                }
                i += g;
            }
            textColumns[rol].textContent = i;
        }
    }
}
