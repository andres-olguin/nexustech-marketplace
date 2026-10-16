Trabajo de semestre "desarrollo web y movil"
# NexusTech Store - Campus Hub UNAB (2026)

## Contexto del Proyecto

### Descripción de la problemática
Un Marketplace de hardware y soluciones informatica para los estudiantes de la comunidad universitaria ya que no cuentan con un espacio centralizado para comprar, vender o intercambiar productos usados (libros, 
tecnología, apuntes). Actualmente usan grupos dispersos en redes sociales, lo que dificulta la búsqueda y el orden.

##Funciones Principales
*   Visualización de catálogo de productos dinámico.
*   Filtros por categorías y presupuesto máximo.
*   Vista de detalle de los producto.
*   Gestión de carrito de compras simulado (local).
*   Mejora de calidad de datos por integrar API pública.

##Tecnologías ocupadas
*   **React + Vite**  arquitectura de componentes y estado.
*   **JavaScript (ES6+)** para la lógica.
*   **CSS3 / Bootstrap** para el diseño responsive y utilidades visuales.
*   **Fetch API** para el consumo de datos externos.

## Estructura
src/  
  ├── assets/         # Imágenes e íconos
  ├── components/     # Componentes reutilizables (Card, Navbar, Filtros)
  ├── data/           # Archivos JSON locales (productos iniciales)
  ├── pages/          # Vistas principales (Home, DetalleProducto, Carrito)
  ├── services/       # Funciones para llamadas a la API (fetch)
  ├── App.jsx         # Enrutamiento y configuración global
  └── main.jsx        # Punto de entrada


## Comandos de Git para Subir Cambios

git add index.html css/styles.css js/main.js README.md
git commit -m "docs: simplify comments, add README cheat sheet and sync project"
git push origin main
