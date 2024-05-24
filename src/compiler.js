// Contenu de autreFichier.js
function compileCode(code) {
    return code;
}
function compile(code) {
    try {
        return eval(compileCode(code));
      } catch (err) {
        if (Scratch.extensions.isPenguinMod) {
          throw err;
        }
        console.error(err);
     }
}

export { compile, compileCode }; // Exporter la fonction pour qu'elle soit accessible depuis d'autres fichiers
