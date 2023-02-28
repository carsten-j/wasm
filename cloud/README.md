## WASM i Cloud

Vi så at en wasm container ikke kan køre i Scaleway. Support for Wasm i Cloud er stadig meget eksperimentelt. Der er dog nogle Cloud udbydere som understøtter Wasm, fx Fermyon.

Fermyon har en SDK og CLI til at bygge og deploye wasm applikationer til deres egen cloud.

## Demo

Spin CLI kommandoer minder en hel del om Docker CLI kommandoer.

```bash
spin new
spin build
spin up
spin deploy
```

Bemærk Rust target når vi skriver `spin build`.

Fermyon har et eksempel på deres website Bartholomew som er en microCMS udelukkende baseret på Spin applikationer og wasm.

### Referencer

[Spin](https://developer.fermyon.com/)
