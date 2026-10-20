# Del Taller 1 a React

Se trabajó sobre el proyecto NexusTech recibido. La estructura nueva organiza sus funciones en componentes, vistas, datos, estilos y controladores.

| Base recibida | Adaptación |
| --- | --- |
| index.html: cabecera y presentación. | Navbar y CatalogHero. |
| main.js: renderizarCatalogo con innerHTML. | CatalogPage y ProductCard con map y key. |
| FAMILIAS_PRODUCTO, MARCAS y demás listas. | catalogConfig.json conserva esos datos. |
| Bucle de 2.400 productos. | createProducts conserva la combinatoria, nombres, categorías, precios y vendedores. |
| Filtros obtenidos del DOM. | Estados controlados de búsqueda, categoría, presupuesto y orden. |
| renderizarPaginadores. | Pagination y slice de 24 productos. |
| Ventana de detalle y reseñas. | ProductDetail, Badge, Field y Dialog. |
| Offcanvas del carrito. | CartPanel dentro de Dialog con presentación lateral. |
| agregarAlCarritoRapido / Completo. | useShop.addToCart; las variantes se identifican por id y acabado. |
| toggleFavorito. | useShop.toggleFavorite y pantalla Favoritos. |
| Formulario de publicación. | PublishForm y validación con mensajes asociados a los campos. |
| Eliminar mediante confirm del navegador. | Ventana de confirmación y aviso para deshacer. |
| Checkout que mostraba un código en alert. | CheckoutForm guarda un pedido local y permite abrir su rastreo. |
| rastreo.html con una guía estática. | TrackingPage mantiene la guía 9876543210 y consulta los pedidos creados. |
| login.html con marca VetConnect. | LoginPage y perfil coherentes con NexusTech. |
| contacto.html y contacto (1).html idénticos. | Una ContactPage compartida con validación y registro local. |
| styles.css y fotos remotas. | CSS organizado y fotografías del catálogo incorporadas como recursos locales. |

La descripción comercial y las reseñas se identifican como datos de ejemplo. La nueva aplicación no afirma certificaciones reales de hardware.

## Interacciones que ahora son declarativas

ProductCard recibe product y los callbacks onFavorite, onDetail, onAdd y onDelete. Un clic invoca la función del padre. El controlador cambia el estado y React actualiza la interfaz.

Los formularios controlan sus valores con estado. El código no reemplaza el HTML de las tarjetas para actualizar el catálogo.

## Conservación de los originales

base-taller1 contiene exactamente los ocho archivos recibidos. Sus rutas y textos se conservan para comparar; la aplicación React se ejecuta desde la raíz del proyecto.
