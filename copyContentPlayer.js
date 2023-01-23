const path = require('path');
const fs = require('fs-extra');

srcPath = path.join(__dirname, '/node_modules/@project-sunbird/content-player');
destinationPath = path.join(__dirname, '/shared/content/preview');

try {
    const files = fs.readdirSync(srcPath);

    files.forEach(function (file) {
        if (!(['node_modules', 'preview.html', 'README.md', 'chunks', 'preview_cdn.html', 'package.json'].includes(file))) {
            fs.copySync(path.join(srcPath, file), path.join(destinationPath, file));
        }
    });
    console.log('copied from node_modules/content to shared/content/preview');
} catch (e) {
    console.error(e);
}



