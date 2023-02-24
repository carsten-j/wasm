# WebAssembly server-side

Der er ikke noget i Wasm specifikationen som binder Wasm til en browser.


indsæt tegning

WASI


Der findes en række runtimes som understøtter Wasm på serveren. Her er en liste over nogle af dem:

* [WasmEdge](https://wasmedge.org/) (CNCF) - [Second State](https://www.secondstate.io/)
* [Wasmtime](https://wasmtime.dev/)
* [wasmer](https://wasmer.io/)

## Demo
Vi genbruger vores Wasm kode fra browseren og kører den server-side med Deno.

``` bash
deno run  main.ts
```

Deno forhindret som standard, at man tilgår OS resourcer, med mindre man har givet eksplicit tilladelse til det.

``` bash
deno run --allow-read main.ts
```

## Hvorfor er det interesarnt at køre Wasm på serveren?

Size og dermed speed

arkitektur uafhængig

JIT vs AOT

### Referencer

[Deno](https://deno.land/manual@v1.12.2/getting_started/webassembly)
