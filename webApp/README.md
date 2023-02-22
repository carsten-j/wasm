wasmtime --tcplisten localhost:5258 --env ASPNETCORE_URLS=http://localhost:5258 bin/release/net7.0/webApp.wasm

Virker pt kun med wasmtime, så kan ikke laves til Docker image, da Docker bruger
WasmEdge.


https://github.com/SteveSandersonMS/dotnet-wasi-sdk