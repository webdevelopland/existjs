function exportAll(lib) {
  for (var name in lib) {
    if (!exports.hasOwnProperty(name)) exports[name] = lib[name];
  }
}

exportAll(require('./js/check-types'));
exportAll(require('./js/exist'));
exportAll(require('./js/or'));
