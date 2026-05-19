# Cuestionario de la Actividad 10: “Caza errores”

## Datos del estudiante

- Nombre completo: emmanuel carmona villada 
- Grupo: mañana-tarde
- Fecha:12-05-2026
- Nombre del proyecto revisado:

---

# Parte A. Reconocimiento de sintaxis y estructura HTML

Responde con tus propias palabras. Cuando sea necesario, copia el fragmento de código corregido.

## 1. Estructura básica

¿Cuáles son las partes mínimas que debe tener un archivo HTML para que el navegador lo interprete correctamente?

**Respuesta:**
las partes minimas son <!DOCTYPE html> , <html> , <head> y <body>
---

## 2. Etiquetas y cierre correcto

Explica qué puede ocurrir en una página web cuando una etiqueta HTML queda mal cerrada o mal anidada.

**Respuesta:**
La pagina puede verse dañada desordenada o algunas cosas pueden dejar de funcionar porque el navegador se confunde al leer el codigo

---

## 3. Rutas de archivos

En el proyecto, algunos recursos no cargan correctamente. Explica qué es una ruta de archivo y por qué una ruta incorrecta puede impedir que aparezca una imagen, un estilo o un script.

**Respuesta:**

Una ruta es la direccion donde esta guardado un archivo dentro del proyecto

Si la ruta esta mal escrita la pagina no encuentra la imagen el CSS o el JavaScript y por eso no cargan o no funcionan bien
---

## 4. Enlace de CSS

Observa este fragmento:

```html
<link rel="stylesheet" href="css/style.css">
```

Si el archivo real se llama `styles.css`, ¿cuál es el error y cómo se corrige?

**Respuesta:**
la parte css/style.css de la linea esta mal escrita deberia ser "styles" en vez de "style"

---

## 5. Atributos HTML

Explica para qué sirven los atributos `src`, `href`, `id`, `class` y `alt`.

**Respuesta:**
src sirve para poner la ruta de una imagen o archivo

href sirve para poner links o conectar archivos como css

id es un nombre unico para un elemento

class es un nombre para agrupar varios elementos

alt es un texto que aparece si la imagen no carga

---

# Parte B. Reconocimiento de errores frecuentes en CSS

## 6. Selectores CSS

¿Cuál es la diferencia entre un selector de clase y un selector de identificador?
La clase se usa para varios elementos
El id se usa solo para uno

Ejemplo clase en CSS

.caja {
  color: red;
}

Ejemplo id en CSS

#titulo {
  color: blue;
}
Incluye un ejemplo de cada uno.

**Respuesta:**


---

## 7. Clases mal escritas

Si en HTML aparece:

```html
<div class="hero-contnet">
```

pero en CSS aparece:

```css
.hero-content {
  max-width: 600px;
}
```

¿Qué problema se genera y cómo se corrige?

**Respuesta:**
la parte hero_content  esta mal escrita y se debe escribir bien en ambas partes par poder que funcione 

---

## 8. Propiedades inválidas

Observa este fragmento:

```css
.menu-grid {
  display: grips;
}
```

¿Qué error tiene y cuál debe ser la corrección?

**Respuesta:**
El error es que grips no existe en CSS

La palabra correcta es grid

Correccion

.menu-grid {
  display: grid;
}

---

## 9. Variables CSS

Observa este fragmento:

```css
.primary {
  background: linear-gradient(135deg, var(--dorado), var(--coral));
}
```

Si la variable `--dorado` no existe, ¿qué efecto puede tener en el diseño? ¿Cómo lo diagnosticarías?

**Respuesta:**
Si no existe la variable el color puede no aparecer o verse raro porque el navegador no sabe que usar

Para verlo revisaria la consola del navegador y tambien inspeccionaria el elemento para ver si la variable esta definida en el CSS

---

## 10. Diseño responsive

¿Qué función cumple una media query en CSS? Explica qué error tiene este ejemplo:

```css
@media (max-wdith: 760px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
```

**Respuesta:**
Una media query sirve para cambiar el diseño segun el tamaño de la pantalla por ejemplo en celular o computador

El error es que max-width esta mal escrito

correccion

@media (max-width: 760px) {
  .menu-grid {
    grid-template-columns: 1fr;

---

# Parte C. Diagnóstico técnico

## 11. Herramientas del navegador

Menciona tres herramientas o pestañas del navegador que puedes usar para diagnosticar errores y explica para qué sirve cada una.

**Respuesta:**
consola
sirve para ver errores del codigo y mensajes

inspeccionar elemento
sirve para ver el html y css de la pagina y probar cambios

network o red
sirve para ver si los archivos cargan bien o si algo no se esta encontrando

---

## 12. Error 404

¿Qué significa que en la pestaña Network/Red aparezca un error 404 al cargar un archivo CSS, JS o una imagen?

**Respuesta:**
significa que el archivo no se encontro

normalmente pasa porque la ruta esta mal escrita o el archivo no existe en la carpeta correcta

---

## 13. Consola del navegador

¿Para qué sirve la consola del navegador durante la corrección de un proyecto web?

**Respuesta:**
sirve para ver errores del codigo y entender que esta fallando en la pagina
tambien ayuda a encontrar problemas en javascript y rutas de archivos

---

## 14. Método de corrección

¿Por qué no es recomendable corregir todos los errores al mismo tiempo sin probar cada cambio?

**Respuesta:**
porque si cambias muchas cosas a la vez no sabes cual arreglo el problema o cual lo daño
es mejor probar uno por uno para entender que funciona y que no

---

# Parte D. Documentación y buenas prácticas

## 15. Bitácora técnica

¿Qué información debe contener una buena bitácora de errores?

**Respuesta:**
debe tener el error que paso
la causa del error
como se soluciono
y que se hizo para probar que ya funciono

---

## 16. Buenas prácticas

Escribe cinco buenas prácticas que aplicarías en tus próximos proyectos HTML y CSS para evitar errores similares.

**Respuesta:**

1.usar nombres claros en archivos y carpetas
2.revisar bien las rutas antes de guardar
3.probar la pagina cada vez que haga un cambio
4.mantener ordenado el codigo
5.usar consola e inspeccionar para detectar errores

---

## 17. Reflexión final

Después de corregir el proyecto, responde:

- ¿Qué error fue el más difícil de encontrar?
- ¿Qué aprendiste sobre la relación entre HTML, CSS y JavaScript?
- ¿Qué harías diferente al crear tu próximo proyecto web?

**Respuesta:**
-el mas dificil fue un error de javascript porque la pagina se veia bien pero no funcionaba una parte

-aprendi que html es la estructura css el diseño y javascript las funciones y que todo debe coincidir bien

-haria el codigo mas ordenado revisaria rutas desde el inicio y probaria mas seguido mientras hago el proyecto


