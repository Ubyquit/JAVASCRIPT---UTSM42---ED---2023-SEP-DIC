### Ejercicio 1: El Torneo de Artes Marciales

Se está organizando un Torneo de Artes Marciales y diferentes luchadores están registrándose. Tu tarea es gestionar la lista de luchadores.

1. Crea un arreglo llamado `luchadores` que contenga los nombres: `['Goku', 'Vegeta', 'Krillin']`.
2. Usando el método `push()`, agrega a `Piccolo` y `Tien` al final de la lista.
3. Usando el método `unshift()`, añade a `Yamcha` al inicio de la lista.
4. `Krillin` decide no participar en el torneo. Usa el método adecuado para eliminarlo de la lista.
5. Imprime la lista de luchadores usando `forEach()`.

---

### Ejercicio 2: Equipo Pokémon

Eres un Entrenador Pokémon y debes preparar tu equipo para una batalla.

1. Crea un arreglo llamado `equipoPokemon` con los Pokémon: `['Charizard', 'Pikachu', 'Bulbasaur']`.
2. Te das cuenta de que `Charizard` está lastimado y no puede pelear, así que necesitas sacarlo del equipo y en su lugar poner a `Squirtle` al inicio. Usa los métodos adecuados para hacer estos cambios.
3. Durante la batalla, capturas un `Geodude`. Añade este Pokémon al final de tu equipo.
4. Para saber con quién contarás en la próxima ronda, crea un nuevo arreglo llamado `proximosEnLuchar` que contenga los dos primeros Pokémon de tu equipo. Utiliza `slice()` para hacerlo.
5. Muestra la lista de `proximosEnLuchar` usando `forEach()`.

---

### Ejercicio 3: Los Akatsuki

El grupo criminal Akatsuki de la serie Naruto quiere reorganizar sus miembros:

1. Crea un arreglo llamado `akatsuki` que contenga los nombres: `['Itachi', 'Kisame', 'Deidara']`.
2. `Tobi` se revela como líder y quiere estar al inicio de la lista. Usa el método adecuado para agregarlo.
3. Lamentablemente, `Itachi` fallece en combate. Elimínalo del arreglo.
4. Aprovecha el método `map()` para crear un nuevo arreglo donde todos los miembros tengan el título "Akatsuki" antes de su nombre, por ejemplo: "Akatsuki Tobi".
5. Imprime este nuevo arreglo usando `forEach()`.

---

### Ejercicio 4: Frutas del Diablo

Los piratas de One Piece buscan las frutas del diablo. Para ello, guardan en un registro las frutas que ya poseen.

1. Crea un arreglo llamado `frutas` con los valores: `['Gomu Gomu', 'Mera Mera', 'Hito Hito']`.
2. Durante su viaje, encuentran la fruta `Suke Suke` y la añaden a su registro.
3. Chopper decide que no quiere que otros usen la `Hito Hito`, así que la quitan del registro.
4. Usando `filter()`, crea un nuevo arreglo que contenga solo las frutas que tienen "Mera" en su nombre.
5. Imprime la lista de frutas filtradas usando `forEach()`.

---

### Ejercicio 5: Shinobi de Konoha

Konoha está formando equipos para una misión especial y necesita organizar a sus shinobi:

1. Crea un arreglo llamado `shinobi` con los nombres: `['Naruto', 'Sasuke', 'Sakura']`.
2. Konohamaru quiere unirse a la misión, así que lo añaden al final de la lista.
3. Kakashi decide liderar el equipo, por lo que se agrega al inicio de la lista.
4. Usa el método `slice()` para seleccionar solo los tres primeros miembros del equipo para la misión principal, dejando a los demás en reserva.
5. Con el equipo principal seleccionado, utiliza `reduce()` para contar cuántas letras hay en total en los nombres de los miembros del equipo (por ejemplo, 'Naruto' tiene 6 letras).