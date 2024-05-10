var estil = window.getComputedStyle(document.documentElement);
var activat = estil.getPropertyValue('--activat');


// variables modo dark
var bg_color_dark = estil.getPropertyValue('--bg-color-dark');
var bg_color_dark2 = estil.getPropertyValue('--bg-color-dark2');
var bg_color_dark3 = estil.getPropertyValue('--bg-color-dark3');
var bg_color_dark4 = estil.getPropertyValue('--bg-color-dark4');
var text_color_dark = estil.getPropertyValue('--text-color-dark');
var text_color_dark2 = estil.getPropertyValue('--text-color-dark2');
var img_header_dark = estil.getPropertyValue('--img-header-dark');
var img_bg_dark = estil.getPropertyValue('--img-bg-dark');

// variables modo light
var bg_color_light = estil.getPropertyValue('--bg-color-light');
var bg_color_light2 = estil.getPropertyValue('--bg-color-light2');
var bg_color_light3 = estil.getPropertyValue('--bg-color-light3');
var bg_color_light4 = estil.getPropertyValue('--bg-color-light4');
var text_color_light = estil.getPropertyValue('--text-color-light');
var img_header_light = estil.getPropertyValue('--img-header-light');
var img_bg_light = estil.getPropertyValue('--img-bg-light');

function toggleTheme() {
  activat = !activat;

      if (activat === false) {
          document.documentElement.style.setProperty('--bg-color', bg_color_dark); 
          document.documentElement.style.setProperty('--bg-color2', bg_color_dark2); 
          document.documentElement.style.setProperty('--bg-color3', bg_color_dark3); 
          document.documentElement.style.setProperty('--bg-color4', bg_color_dark4); 
          document.documentElement.style.setProperty('--text-color', text_color_dark); 
          document.documentElement.style.setProperty('--text-color2', text_color_dark2); 
          document.documentElement.style.setProperty('--img-header', img_header_dark); 
          document.documentElement.style.setProperty('--img-bg', img_header_dark); 

      } else {
        document.documentElement.style.setProperty('--bg-color', bg_color_light); 
        document.documentElement.style.setProperty('--bg-color2', bg_color_light2); 
        document.documentElement.style.setProperty('--bg-color3', bg_color_light3); 
        document.documentElement.style.setProperty('--bg-color4', bg_color_light4); 
        document.documentElement.style.setProperty('--text-color', text_color_light); 

        document.documentElement.style.setProperty('--img-header', img_header_light); 
        document.documentElement.style.setProperty('--img-bg', img_header_light); 
      }

  }

  // swictherTheme.addEventListener('click', toggleTheme);



