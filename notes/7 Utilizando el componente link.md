# Enlazando páginas

Para hacerlo se puede aprovechar una feature de Nextjs

## Componente Link

Debe contener un "a" u otro elemento para que funciones

Si clickeamos en un Link.

1. **Client Side Rendering**
2. Cambia solo lo que falta
3. Cambia la ruta en el navegador


## Abriendo un nuevo tab

1. Si se abre un nuevo Tab, se aplica **Server Side Rendering**
2. Carga todo el HTML, CSS y JS
3. Crea una nueva sesión

## ¿Cómo funciona prefetch?
1. Precarga sólo HTML, CSS y JS
2. **¡No precarga getIniitial Props!**
3. Se puede usar en listas, ya que en una página (aunque se repita) se precarga solamente una vez
4. Solo funciona en producción
5. `npm run build && npm start`