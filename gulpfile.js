const { src, dest, series } = require('gulp');
const { deleteAsync } = require('del');
const path = require('path');

// Limpa a pasta public
function cleanPublic() {
  return deleteAsync(['public/**', '!public']);
}

// Copia todos os arquivos e pastas do projeto para public
function copyScientificSkinTech() {
  return src('Projects/ScientificSkinTech/**/*', { base: 'Projects' })
    .pipe(dest('public'));
}

function copyRootFiles() {
  return src(['links-referencia-designer.html'], { base: '.' })
    .pipe(dest('public'));
}

exports.default = series(cleanPublic, copyScientificSkinTech, copyRootFiles);
