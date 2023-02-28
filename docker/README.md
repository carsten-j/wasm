# Docker og WebAssembly

Med Docker har vi en måde at pakke applikationer og deres afhængigheder sammen i en container, som efterhånden er velkendt blandt udviklere.

Skal vi genopfinde alt det for WebAssembly? Eller kan vi bruge Docker til at pakke Wasm applikationer sammen? Det mener Docker som har eksperimentiel understøttelse af Wasm i deres container runtime.

Lad os se på et eksempel

## Demo - Wasm i Docker via Rust

Med udgangspunkt i Rust program kan vi bygge programmet

```bash
cargo build
```

og afvikle det

```bash
cargo run
```

For at kompilere Rust til wasm med wasi tilføjer vi et build target

```bash
rustup target add wasm32-wasi
```

og bygger

```bash
cargo build --target wasm32-wasi --release
```

Vi kan nu afvikle Wasm modulet med wasmtime

```bash
wasmtime ./target/wasm32-wasi/release/hello-docker.wasm
```

For at bygge et Docker image med Wasm modulet, bruger man et base image som ikke indeholder Ubuntu eller andet Linux distribution og man bygger med et build target som er wasm32-wasi.

```bash
docker buildx build --platform wasi/wasm -t docker-wasm:0.1 .
```

Det kræver også nogle særlige flag at køre Wasm modulet i Docker

```bash
docker container run --rm --name=dockerwasm \
 --runtime=io.containerd.wasmedge.v1 \
 --platform=wasi/wasm \
   docker-wasm:0.1
```

## Docker og Rust

Til sammenligning er et Docker image med Rust noget større. Teknisk set bør det være muligt at få en mindre image, da Rust er statisk kompileret, så man bør ikke have behov for en runtime afhængigheder, men da jeg forsøgte blev jeg ved med at få en C runtime fejl.

## Docker og Cloud

I sidste uge havde vi DevOps sparring, hvor Christian gav en introduktion til Scaleway. I Scaleway så vi, hvordan kan kunne køre serverless med en Docker container. Jeg har forsøgt at starte min Rust wasm container i Scaleway, men det virker ikke. Lad os se på fejlbeskeden.

Så kan man i det hele taget lige nu afvikle wasm i Cloud?

### Referencer

[Docker og WebAssembly](https://www.docker.com/blog/build-share-run-webassembly-apps-docker/)

[Rust og WebAssembly](https://rustwasm.github.io/docs/book/introduction.html)
