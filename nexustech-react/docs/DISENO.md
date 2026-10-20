# Diseño previo de la adaptación a React

Esta propuesta se definió después de revisar los archivos del Taller 1 y antes de implementar la nueva interfaz. Continúa NexusTech, el marketplace de hardware y soluciones informáticas para la comunidad universitaria.

## Identidad que se conserva

NexusTech, Campus Hub UNAB, fondo azul oscuro, acentos cian, categorías Workstations, Hardware, Periféricos y Soluciones, precios en CLP y catálogo local de 2.400 productos.

La nueva jerarquía prioriza buscar, comparar productos, ver detalle, guardar favoritos y revisar el carrito. Se unifican acceso, contacto y rastreo bajo la misma marca; los HTML de acceso y contacto recibidos todavía usan VetConnect.

## Pantallas y navegación

| Pantalla | Contenido principal | Acciones |
| --- | --- | --- |
| Catálogo | Presentación, buscador, categorías, presupuesto, orden y productos paginados. | Ver detalle, guardar favorito, agregar al carrito, publicar. |
| Favoritos | Productos guardados usando las mismas tarjetas. | Quitar favorito, ver detalle, agregar al carrito. |
| Rastreo | Buscador de código e historial de pedidos de demostración. | Consultar una orden y avanzar su estado simulado. |
| Contacto | Datos del proyecto y formulario de consulta. | Validar y registrar una consulta local de demostración. |
| Acceso | Formulario de acceso simulado y perfil. | Iniciar o cerrar una sesión local. |

El carrito se presenta en un panel lateral. El detalle, la publicación y la compra simulada se abren en ventanas. La compra confirmada genera una orden local que puede consultarse en Rastreo.

## Flujos principales

1. Buscar o filtrar → ver detalle → elegir cantidad y acabado → agregar al carrito.
2. Abrir carrito → ajustar cantidades → completar despacho → confirmar compra simulada → consultar código de rastreo.
3. Publicar → completar campos → validar → agregar el producto al catálogo.
4. Guardar favorito → abrir Favoritos → recuperar el producto después de recargar.
5. Consultar referencia USD → cargar API → mostrar tasa, fecha y conversión; si falla, mantener los precios CLP y ofrecer reintento.

## Jerarquía y distribución

La cabecera contiene marca, navegación y acciones. El título y el buscador identifican el propósito del catálogo. Los filtros ocupan una columna izquierda en computadora y se despliegan sobre los resultados en celular. Las tarjetas usan imagen, categoría, nombre, vendedor, precio y acciones en ese orden.

La información principal no dependerá de ventanas alert ni de colores sin texto. Los campos tendrán etiquetas, los errores aparecerán cerca del campo y los botones de ícono tendrán nombres accesibles.

## Componentes repetibles previstos

Button, Badge, Card, Field, Alert, Dialog, EmptyState, Navbar, ProductCard, Pagination, FilterPanel, ProductDetail y CartPanel.

## Estilo y responsive

- Fondo #090e1a y superficies #101b2d.
- Cian #00d2ff para acciones principales y precios.
- Texto principal #f5f7fb y secundario #a8b6ca.
- Tipografía del sistema, sin descarga de fuentes.
- Controles de al menos 44 px de alto y foco visible.
- Tres columnas de productos en pantallas grandes, dos en tableta y una en celular.
- Menú compacto, filtros plegables y formularios en una columna en pantallas pequeñas.

Los SVG de wireframe en esta carpeta representan la distribución planeada. Las fotografías del catálogo proceden de los enlaces ya incluidos en el trabajo original y se incorporarán como recursos locales cuando estén disponibles.
