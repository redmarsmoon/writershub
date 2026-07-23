const fs = require('fs');
const file = 'C:/Users/Home/Desktop/writershub/new-orders.html';
const content = fs.readFileSync(file, 'utf8');

const startTag = '    <!-- Gravity Form Hardcoded -->';
const endTag = '                        </form></div>';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag) + endTag.length;

if (startIndex !== -1 && endIndex !== -1) {
    const newContent = content.substring(0, startIndex + startTag.length) + '\n' +
`    <div id="gravity-form-container" class="max-w-4xl mx-auto bg-white border border-border-low-contrast rounded-xl shadow-lg overflow-hidden p-8">
        <iframe 
            src="https://orders.writershubplus.com/order-now/" 
            id="whp-order-iframe"
            style="width: 100%; border: none; min-height: 1200px;" 
            scrolling="no">
        </iframe>

        <!-- This script automatically stretches the iframe height when the user clicks 'Next' -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"></script>
        <script>
            iFrameResize({ log: false, checkOrigin: false }, '#whp-order-iframe');
        </script>
    </div>` +
    content.substring(endIndex);
    
    fs.writeFileSync(file, newContent);
    console.log('Success!');
} else {
    console.log('Could not find start or end tag.');
    if (startIndex === -1) console.log('Start tag missing');
    if (endIndex - endTag.length === -1) console.log('End tag missing');
}
