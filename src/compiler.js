// Contenu de autreFichier.js
function compileCode(code) {
    return code;
}
function compile(code) {
    try {
        eval(compileCode(code));
      } catch (err) {
        if (Scratch.extensions.isPenguinMod) {
          throw err;
        }
        console.error(err);
     }

     return new Promise((resolve) => {
        SandboxRunner.execute(code).then(result => {
            // result is { value: any, success: boolean }
            // in PM, we always ignore errors
            return resolve(result.value);
        })
    })
}

export { compile, compileCode }; // Exporter la fonction pour qu'elle soit accessible depuis d'autres fichiers
