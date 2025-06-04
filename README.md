# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

## Pagina Quiz de Brainrot para la elección de un avatar:

¡Hola! Soy Fiorella Terranova me encargué de realizar el quiz de Brainrot, transformando los diseños de Figma en una experiencia web interactiva y responsive. 

### Tareas realizadas:

1. **Diseño Fiel a Figma:** Implementación de la paleta de colores, tipografía y elementos interactivos, para mantener la estética original del proyecto creado en Figma. URL del Figma: "https://www.figma.com/design/iwa3AcQh527pDcN04vQQE4/UpTodo---Todo-list-app-UI-Kit--Community-?node-id=0-1&m=dev&t=CtAqprXLDGuDsqfm-1"
2. **Desarrollo con Astro:** Creación de componentes (`Quiz.astro`, `quizLayout.astro`) para una arquitectura limpia.
3. **Lógica Frontend:** Programación del flujo del quiz, desde la selección de preguntas y respuestas hasta la presentación de resultados.
4. **Responsividad:** Ajustes detallados con `@media queries` para asegurar una experiencia fluida y visualmente atractiva en cualquier dispositivo, especialmente móviles. 

### Instalación y Ejecución para el funcionamiento del Proyecto:

Para probar el quiz en tu entorno local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Nelson0329/BrainRot_ExamGroup4.git
    cd BrainRot_ExamGroup4
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener [pnpm](https://pnpm.io/installation) instalado globalmente (`npm install -g pnpm`), luego ejecuta:
    ```bash
    pnpm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    El quiz estará disponible en `http://localhost:4321/`.

4.  **Generar versión para producción (opcional):**
    ```bash
    pnpm build
    ```
    -> Esto creará una carpeta `dist/` con el sitio optimizado.

¡Espero que disfrutes explorando este quiz super divertido, y así sabes que Brain Rot sos!