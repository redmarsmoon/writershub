const fs = require('fs');

const cssFile = 'C:/Users/Home/Desktop/writershub/assets/css/custom-gform-2.css';
let css = fs.readFileSync(cssFile, 'utf8');
css = css.replace(/#gform_wrapper_2/g, '.gform_wrapper');
css = css.replace(/#field_2_(\d+)/g, '[id^="field_"][id$="_$1"]');
css = css.replace(/#gform_2/g, 'form[id^="gform_"]');
fs.writeFileSync(cssFile, css);

const jsFile = 'C:/Users/Home/Desktop/writershub/assets/js/custom-gform-2.js';
let js = fs.readFileSync(jsFile, 'utf8');
// Convert JS to be ID-agnostic
js = js.replace(/#gform_wrapper_2/g, '.gform_wrapper');

// Add the resizer script to the top
const resizerScript = `// Load iframe resizer contentWindow script for automatic height stretching
if (!window.iFrameResizer) {
    var script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js";
    document.head.appendChild(script);
}

`;
if (!js.includes('iframeResizer.contentWindow.min.js')) {
    js = resizerScript + js;
}
fs.writeFileSync(jsFile, js);

console.log('Successfully updated JS and CSS!');
