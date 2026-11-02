# Errores típicos de React (paso 11)

Los tres errores se provocaron a propósito en el proyecto, se registró el mensaje
que mostró la consola del navegador y luego se revirtieron. La aplicación quedó
funcionando y con la consola sin errores.

## 1. Usar `class` en vez de `className`

**Qué se hizo:** en `src/components/Header/Header.jsx` se cambió `className` por `class`
en los elementos del header.

**Mensaje registrado en la consola:**

```
Invalid DOM property `class`. Did you mean `className`?
```

**Por qué ocurre:** en HTML la atributo se llama `class`, pero en JSX `class` es una
palabra reservada de JavaScript. React exige `className` y avisa cuál usar.

---

## 2. Devolver dos nodos raíz

**Qué se hizo:** en `src/App.jsx` se agregó una función que devolvía dos elementos JSX
adyacentes sin envolverlos.

**Mensaje registrado (overlay de Vite) y en consola:**

```
Transform failed with 1 error:

[PARSE_ERROR] Adjacent JSX elements must be wrapped in an enclosing tag.
    ╭─[ src/App.jsx:30:5 ]
    │
 30 │     <p>Segundo nodo raíz</p>
    │     ┬
    │     ╰──
    │
    │ Help: Did you want a JSX fragment `<>...</>`?
────╯
```

**Por qué ocurre:** un componente de React debe devolver un único nodo raíz. La
solución es envolver los elementos en un fragmento `<>...</>`.

---

## 3. Olvidar la clave en el `map`

**Qué se hizo:** en `src/components/MovieList/MovieList.jsx` se quitó la prop `key`
del `<li>` que se renderiza dentro del `.map()`.

**Mensaje registrado en la consola:**

```
Each child in a list should have a unique "key" prop.
See https://react.dev/link/warning-keys for more information.

Check the render method of `MovieList`.
```

**Por qué ocurre:** React usa `key` para identificar cada elemento de una lista y
actualizar el DOM de forma eficiente. Sin ella, React no sabe qué elemento cambió y
avisa. Aquí la clave es `movie.id`.

---

## Verificación final

Tras revertir los tres cambios y recargar la página, la consola quedó sin errores ni
advertencias de React y se siguen renderizando las 9 tarjetas de la cartelera.
