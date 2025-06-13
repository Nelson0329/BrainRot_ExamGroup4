# BrainRot Do List 🧠📝
¡Organiza tu caos con un toque de locura inspirada en Brain Rot!

## Descripción del Proyecto

BrainRot Do List es una innovadora aplicación web diseñada para ayudarte a gestionar tus tareas diarias o grupales, combinando la seriedad de la organización con el humor absurdo y creativo de los memes "Brain Rot" generados por IA. En un mundo lleno de distracciones, ¿quién mejor para ayudarte a mantener el rumbo que personajes peculiares y memorables?

Este proyecto busca ofrecer una experiencia de lista de tareas sencilla, funcional y visualmente atractiva, manteniendo una identidad única inspirada en el fenómeno "Brain Rot". Es una herramienta perfecta para quienes buscan una forma divertida y poco convencional de mantenerse productivos.

## Características Principales

* **Listas de Tareas:** Crea y organiza tus tareas de forma individual o colaborativa.
* **Interfaz Intuitiva:** Un diseño limpio y fácil de usar para una gestión de tareas sin complicaciones.
* **Estilo "Brain Rot":** Integración visual de personajes y estéticas inspiradas en memes generados por IA para un toque único y divertido.
* **Diseño Responsivo:** Adaptado para funcionar en cualquier dispositivo (móvil, tablet, escritorio).
* **Formulario de Contacto:** Un canal directo para retroalimentación o consultas.
* **Formulario de Autenticación:** Crear cuenta / Iniciar sesión, para gestionar usuarios y sus listas de tareas.

## Tecnologías Utilizadas

* **Astro.js:** Framework web moderno y de alto rendimiento para construir la interfaz de usuario.
* **HTML5:** Estructura de contenido web.
* **CSS3 (con Metodología BEM):** Estilos y diseño visual, implementando una convención de nomenclatura modular y escalable para el CSS.
* **JavaScript:** Interactividad y lógica del lado del cliente (ej. validaciones de formularios, funcionalidad de autenticación).
* **CSS:** Para una gestión de estilos consistente y fácil de mantener a través de todo el proyecto.

## Estructura del Proyecto (Archivos Clave)

* `src/pages/index.astro`: Página de bienvenida y presentación del proyecto.
* `src/pages/quizBrainRot.astro`: Sección de quiz e interacción lúdica relacionada con el tema "Brain Rot", para que el usuario eliga su avatar. 
* `src/pages/contact.astro`: Formulario de contacto para que los usuarios puedan comunicarse con nosotros por errores o propuestas.
* `src/pages/myForm.astro`: Formularios de autenticación (Crear cuenta / Iniciar sesión).
* `public/images/`: Contendrá las imágenes de los personajes "Brain Rot" generados por IA.
* `src/layouts/...`: Contendrá los componentes de layout de la estructura de cada página de la aplicación.


## Cómo Ejecutar el Proyecto Localmente

Para poner en marcha "BrainRot Do List" en tu entorno de desarrollo, sigue estos pasos:

1.  **Clona el repositorio (si aplica):**
    ```bash
    git clone git@github.com:Nelson0329/BrainRot_ExamGroup4.git
    cd brainrot-do-list
    ```
2.  **Instala las dependencias:**
    ```bash
    pnpm install
    ```
3.  **Inicia el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    Esto iniciará el servidor de desarrollo en `http://localhost:4323` 

4.  **Abre en tu navegador:**
    Visita `http://localhost:4323` para ver la aplicación en funcionamiento.
