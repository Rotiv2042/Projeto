import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    base: "/Projeto/",

    build: {
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL("./index.html", import.meta.url)),
                projetos: fileURLToPath(new URL("./projetos.html", import.meta.url)),
                contato: fileURLToPath(new URL("./contato.html", import.meta.url))
            }
        }
    }
});