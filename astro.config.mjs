import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Quita o comenta esta línea si quieres que index.astro sea el default
  // build: {
  //   assetsPrefix: '/your-base-path', // Si estás desplegando en un subdirectorio
  // },
  // Nueva configuración para cambiar el directorio de páginas por defecto
  pages: {
    directory: './src/pages/', // La carpeta donde están tus páginas
    // Aquí puedes especificar el archivo principal si el que quieres no es 'index.astro'
    // La forma más sencilla es simplemente renombrar intro.astro a index.astro si quieres que sea la página de inicio.
    // Si no, puedes añadir un "redirect" en tu plataforma de despliegue o configurar Astro para que lo haga si es posible.
    // Astro por defecto busca index.astro. La forma más fácil es renombrar intro.astro a index.astro.
  }
});