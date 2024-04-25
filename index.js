export {WasiMathArithmeticF32} from './interfaces/wasi-math-arithmetic-f32.js';
export {WasiMathArithmeticF64} from './interfaces/wasi-math-arithmetic-f64.js';

let tryFindPort = false;
let {port, host} = {
    port: 8000,
    host: 'localhost'
};
if (port === undefined) {
    tryFindPort = true;
    port = '8000';
}
import {HTTPServer} from '@bytecodealliance/preview2-shim/http';

const server = new HTTPServer(mod.incomingHandler);

while (true) {
    try {
        server.listen(port, host);
        break;
    } catch (e) {
        if (e.code !== 'EADDRINUSE')
            throw e;
    }
    port++;
}
server.listen(port, host)

process.stdout.write(`Server listening on \${port}...`);