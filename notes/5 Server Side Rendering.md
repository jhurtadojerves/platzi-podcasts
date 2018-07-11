# Server Side Rendering

Mejora el performance y SEO automático de Nextjs

## Client Side Rendering

1. El cliente recibe un HTML básico, en el que se linkea un archiv js.
2. El navegador descarja el JS
3. El navegadr ejecuta React
4. La aplicación funciona y se puede ver en el navegador

## Server Side Rendering

1. El servidor envía HTML y CSS de la App
2. El navegador muestra la página y descarga el JS
3. El navegador ejecuta React
4. La aplicación funciona en el navegador

## Ventajas
1. Mejorar Performance y UX
2. Mejora la indexación

La principal diferencia entre Server Side Rendering y Client Side Rendering es que **con SSR el server envía el HTML con todo el contenido listo para renderizar.** Esto es mucho más performante (ya que para nuestro browser es como si fuese un sitio estático) e indexa mejor en buscadores, ya que podemos acceder a todo el contenido fácilmente con curl/wget.

En comparación, con CSR tradicional el server manda un HTML vacío, y tenemos que descargar toda la aplicación y esperar que haga lo suyo para poder empezar a ver el contenido. Esto es mucho más lento y requiere un browser que ejecute JS para funcionar correctamente.

Next.JS usa una mezcla de los dos: SSR para la carga inicial (por ser más rápido), y CSR cada vez que clickeamos en un link con la app inicializada, ya que ahí puede aplicar varias optimizaciones y mecanismos de precarga que hacen que todo funcione lo más rápido posible.