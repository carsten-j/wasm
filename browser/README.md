# WebAssembly i browseren

For .NET udviklere er Blazor måske det tætteste i har været på webassembly. Blazor har 2 hosting modeller: server-side og webassembly. Hvis man forsøger at finde ud af, hvordan en Blazor webassembly app bliver loaded ind i browseren, så er det ikke helt oplagt. Kigger man på index.html i wwwroot så ligner det ikke det man kan læse på MDN om
webassembly i browseren.

Så lad os starte et andet sted. Lad os tage en lille C program og kompilere det til WASM og så kalde det fra JS i en browser.

Kompiler C kode til WASM fx med
https://mbebenita.github.io/WasmExplorer/

WAT vs WASM

Vi har brug for en HTTP server som vi kan loade vores WASM kode i. 
Det kunne være en simpel Python server:

python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

python3 -mhttp.server 8081

browse nu til localhost:8081/index.html
og kig på console output

Man kan også debugge WASM i browseren. 
Læs mere på https://developer.chrome.com/blog/wasm-debugging-2020/

Hvis man skulle gøre dette selv, så ville man installere Emscripten og bruge det til at kompilere C kode til WASM.  Emscripten understøtter primært sprog som bruger LLVM.

Referencer:
https://developer.mozilla.org/en-US/docs/WebAssembly
https://emscripten.org/index.html
