// Name: DeltaScript
// ID: deltascript
// Description: A Text Programming Language For Scratch
// By: Aness6040
// License: MPL-2.0

(() => {
  // src/compiler.js
  function compileCode(code2) {
    return code2;
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

  // src/index.js
  (function(Scratch2) {
    if (Scratch2.extensions.unsandboxed === false) {
      throw new Error("Sandboxed mode is not supported");
    }
    class DeltaScriptExt {
      blockIconURI;
      constructor(runtime) {
        this.runtime = runtime;
        this.blockIconURI = "data:image/png;base64,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";
      }
      getInfo() {
        return {
          id: "deltascript",
          name: "DeltaScript",
          color1: "#67a05a",
          color2: "#2d7635",
          blockIconURI: this.blockIconURI,
          blocks: [
            {
              blockType: Scratch2.BlockType.BUTTON,
              func: "docURL",
              text: "\u{1F4D6} Read Documentation"
            },
            {
              blockType: Scratch2.BlockType.BUTTON,
              func: "aboutDLTS",
              text: "\u{1F4D9} About"
            },
            "---",
            {
              blockType: Scratch2.BlockType.LABEL,
              text: "\u{1F4D0} Evaluating"
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "runStack",
              text: "run [CODE]",
              arguments: {
                CODE: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: 'console.log("sus")'
                }
              }
            },
            {
              blockType: Scratch2.BlockType.REPORTER,
              func: "runStack",
              opcode: "runReporter",
              text: "run [CODE]",
              arguments: {
                CODE: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Math.random()"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.BOOLEAN,
              opcode: "runBoolean",
              text: "run [CODE]",
              arguments: {
                CODE: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Math.round(Math.random()) === 1"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.HAT,
              func: "runBoolean",
              opcode: "whenCodetrue",
              text: "when [CODE] returns true",
              isEdgeActivated: true,
              arguments: {
                CODE: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Math.round(Math.random()) === 1"
                }
              }
            }
          ]
        };
      }
      docURL() {
        window.open("https://github.com/Aness6040/DeltaScript-Scratch/wiki", "_blank");
      }
      aboutDLTS() {
        alert("DeltaScript is a Text Programming Language for Scratch. It's a javascript addon that adds some engine mechanism. The FilE Extension is .dlts (JavaScript is .js)");
      }
      runStack(args, util) {
        return compile(args.CODE);
      }
      runBoolean(args) {
        if (!compile(args.CODE) === true) {
          return false;
        } else {
          return true;
        }
      }
    }
    Scratch2.vm.runtime.on("BEFORE_EXECUTE", () => {
      Scratch2.vm.runtime.startHats("deltascript_whenCodetrue");
    });
    if (Scratch2.vm && Scratch2.vm.runtime) {
      Scratch2.extensions.register(new DeltaScriptExt(Scratch2.runtime));
    } else {
      window.tempExt = {
        Extension: DeltaScript,
        info: {
          extensionId: "deltascript",
          name: "deltascript.name",
          description: "deltascript.description",
          featured: true,
          disabled: false,
          collaboratorList: [
            {
              collaborator: "Anesss6040",
              collaboratorURL: "https://github.com/Anesss6040"
            }
          ]
        },
        l10n: {
          en: {
            "deltascript.name": "DeltaScript",
            "deltascript.description": "A Text Programming Language For Scratch"
          }
        }
      };
    }
  })(Scratch);
})();
