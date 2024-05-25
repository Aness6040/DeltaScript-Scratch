
function compileCode(code) {
    return code;
}
function compile(code) {
    try {
        const result = eval(compileCode(code));
        
        // Vérifier si le résultat est un objet et non nul
        if (typeof result === 'object' && result !== null) {
            return JSON.stringify(result);
        }
        
        // Optionnel : Si vous voulez aussi gérer les chaînes JSON
        if (typeof result === 'string' && isJSON(result)) {
            return result; // Déjà une chaîne JSON valide
        }
        
        return result; // Retourne le résultat original s'il n'est pas JSON
    } catch (err) {
        if (Scratch.extensions.isPenguinMod) {
            throw err;
        }
        console.error(err);
    }
}


export { compile, compileCode}; // Exporter la fonction pour qu'elle soit accessible depuis d'autres fichiers
