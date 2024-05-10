// let contentPath = `./assets/JSON/contenido${navigator.language.startsWith('ca') ? 'ca' : navigator.language.startsWith('es') ? 'es' : 'en'}.json`;
// document.getElementById('switch-container').style.display = 'block';
// console.log(contentPath)

const idioma_cat = './assets/JSON/contenidocat.json'
const idioma_cast = './assets/JSON/contenidoes.json'
const idioma_en = './assets/JSON/contenidoen.json'

const error_cat = 'Error al carregar l\'arxiu JSON'
const error_cast = 'Error al carrgar el archivo JSON'
const error_en = 'Error to load the JSON file'

json_cat();

function idiomes(idioma, error_msg) {

    fetch(idioma)
        .then(response => response.json())
        .then(data => {


            const menu = data.menu[0];
            const aptitudes_tecnicas = data.aptitudes_tecnicas[0];
            const experiencia_laboral = data.experiencia_laboral[0];
            const educacion = data.educacion[0];
            const carrusel = data.carrusel[0];
            const about_me_info = data.about_me[0];


            const inicio = document.getElementById('inicio');
            const hardSkills_menu = document.getElementById('hardSkills');
            const SoftSkills = document.getElementById('SoftSkills');
            const Educacion = document.getElementById('Educacion');
            const Contacto = document.getElementById('Contacto');


            const about_me = document.getElementById('about-me');
            const contenido = document.getElementById('contenido');
            const aboutMe2 = document.getElementById('aboutMe2');


            const hardSkills = document.getElementById('hardSkill');
            const Software = document.getElementById('Software');
            const Hardware = document.getElementById('Hardware');
            const Wordpress = document.getElementById('Wordpress');
            const html = document.getElementById('html');
            const css = document.getElementById('css');
            const react = document.getElementById('react');
            const php = document.getElementById('php');
            const tailwind = document.getElementById('tailwind');
            const python = document.getElementById('python');
            const soft = document.getElementById('soft');
            const soft1 = document.getElementById('soft1');
            const soft2 = document.getElementById('soft2');
            const soft3 = document.getElementById('soft3');
            const soft4 = document.getElementById('soft4');


            const expTitol = document.getElementById('expTitol');
            const nombre1 = document.getElementById('nombre1');
            const lugar_fecha1 = document.getElementById('lugar_fecha1');
            const descripcion1 = document.getElementById('descripcion1');
            const descripcion2 = document.getElementById('descripcion2');
            const descripcion2b = document.getElementById('descripcion2b');
            const descripcion3 = document.getElementById('descripcion3');
            const nombre2 = document.getElementById('nombre2');
            const lugar_fecha2 = document.getElementById('lugar_fecha2');
            const descripcion4 = document.getElementById('descripcion4');
            const descripcion5 = document.getElementById('descripcion5');
            const descripcion6 = document.getElementById('descripcion6');
            const descripcion7 = document.getElementById('descripcion7');
            const nombre3 = document.getElementById('nombre3');
            const lugar_fecha3 = document.getElementById('lugar_fecha3');
            const descripcion8 = document.getElementById('descripcion8');
            const descripcion9 = document.getElementById('descripcion9');
            const descripcion10 = document.getElementById('descripcion10');

            const tituloExp = document.getElementById('tituloExp');
            const experiencia1 = document.getElementById('experiencia1');
            const lugar_fecha4 = document.getElementById('lugar_fecha4');
            const experiencia2 = document.getElementById('experiencia2');
            const lugar_fecha5 = document.getElementById('lugar_fecha5');


            const tituloCafe = document.getElementById('cafetitle');

            const titulo2 = document.getElementById('titulo2');

            const titulo3 = document.getElementById('titulo3');


            inicio.innerHTML = `${menu.texto1}`;
            hardSkills_menu.innerHTML = `${menu.texto2}`;
            SoftSkills.innerHTML = `${menu.texto3}`;
            Educacion.innerHTML = `${menu.texto4}`;
            Contacto.innerHTML = `${menu.texto5}`;

            about_me.innerHTML = `${about_me_info.titulo}`;
            contenido.innerHTML = `${about_me_info.contenido}`;
            aboutMe2.innerHTML = `${about_me_info.contacto}`;

            hardSkills.innerHTML = `${aptitudes_tecnicas.titulo}`;
            Software.innerHTML = `${aptitudes_tecnicas.skills1}`;
            Hardware.innerHTML = `${aptitudes_tecnicas.skills2}`;
            Wordpress.innerHTML = `${aptitudes_tecnicas.skills3}`;
            html.innerHTML = `${aptitudes_tecnicas.skills4}`;
            css.innerHTML = `${aptitudes_tecnicas.skills5}`;
            react.innerHTML = `${aptitudes_tecnicas.skills6}`;
            php.innerHTML = `${aptitudes_tecnicas.skills8}`;
            tailwind.innerHTML = `${aptitudes_tecnicas.skills9}`;
            python.innerHTML = `${aptitudes_tecnicas.skills10}`;
            soft.innerHTML = `${aptitudes_tecnicas.SoftTitol}`;
            soft1.innerHTML = `${aptitudes_tecnicas.soft1}`;
            soft2.innerHTML = `${aptitudes_tecnicas.soft2}`;
            soft3.innerHTML = `${aptitudes_tecnicas.soft3}`;
            soft4.innerHTML = `${aptitudes_tecnicas.soft4}`;



            expTitol.innerHTML = `${experiencia_laboral.titulo}`;
            nombre1.innerHTML = `${experiencia_laboral.nombre1}`;
            lugar_fecha1.innerHTML = `${experiencia_laboral.lugar_fecha1}`;
            descripcion1.innerHTML = `${experiencia_laboral.descripcion1}`;
            descripcion2.innerHTML = `${experiencia_laboral.descripcion2}`;
            descripcion2b.innerHTML = `${experiencia_laboral.descripcion2b}`;
            descripcion3.innerHTML = `${experiencia_laboral.descripcion3}`;
            nombre2.innerHTML = `${experiencia_laboral.nombre2}`;
            lugar_fecha2.innerHTML = `${experiencia_laboral.lugar_fecha2}`;
            descripcion3.innerHTML = `${experiencia_laboral.descripcion3}`;
            descripcion4.innerHTML = `${experiencia_laboral.descripcion4}`;
            descripcion5.innerHTML = `${experiencia_laboral.descripcion5}`;
            descripcion6.innerHTML = `${experiencia_laboral.descripcion6}`;
            descripcion7.innerHTML = `${experiencia_laboral.descripcion7}`;
            nombre3.innerHTML = `${experiencia_laboral.nombre3}`;
            lugar_fecha3.innerHTML = `${experiencia_laboral.lugar_fecha3}`;
            descripcion8.innerHTML = `${experiencia_laboral.descripcion8}`;
            descripcion9.innerHTML = `${experiencia_laboral.descripcion9}`;
            descripcion10.innerHTML = `${experiencia_laboral.descripcion10}`;

            tituloExp.innerHTML = `${educacion.titulo}`;
            experiencia1.innerHTML = `${educacion.experiencia1}`;
            lugar_fecha4.innerHTML = `${educacion.lugar_fecha4}`;
            experiencia2.innerHTML = `${educacion.experiencia2}`;
            lugar_fecha5.innerHTML = `${educacion.lugar_fecha5}`;

            tituloCafe.innerHTML = `${carrusel.titulo}`;

            titulo2.innerHTML = `${carrusel.titulo2}`;

            titulo3.innerHTML = `${carrusel.titulo3}`;
        })
        .catch(error => console.error(error_msg, error))
}

function json_cat() {
    idiomes(idioma_cat, error_cat)
}
function json_cast() {
    idiomes(idioma_cast, error_cast)
}
function json_en() {
    idiomes(idioma_en, error_en)
}