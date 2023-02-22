const wasmCode = await Deno.readFile("test.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const square = wasmInstance.exports.square as (input: number) => number;
console.log(square(25));
