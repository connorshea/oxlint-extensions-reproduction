// This should pass because the extension is included, even with different casing.
// ESLint passes on this, oxlint does not currently.
import foo from './foo.JS';

// If I uncomment the below line it does pass in oxlint for some reason.
// console.log(foo);
