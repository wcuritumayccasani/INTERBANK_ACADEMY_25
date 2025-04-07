# Reto Técnico: Procesamiento de Transacciones Bancarias (CLI)

## Objetivo:

Desarrolla una aplicación de línea de comandos (CLI) que procese un archivo CSV con transacciones bancarias y genere un reporte que incluya:

- **Balance Final:**  
  Suma de los montos de las transacciones de tipo "Crédito" menos la suma de los montos de las transacciones de tipo "Débito".

- **Transacción de Mayor Monto:**  
  Identificar el ID y el monto de la transacción con el valor más alto.

- **Conteo de Transacciones:**  
  Número total de transacciones para cada tipo ("Crédito" y "Débito").

---

## Instrucciones

1. **Repositorio Base:**  
   Clona o haz un fork del repositorio base disponible en:  
   `https://github.com/codeableorg/interbank-academy-25`

2. **Entrada de Datos:**  
   La aplicación deberá leer un archivo CSV. Ejemplo de contenido:

   ```
   id,tipo,monto
   1,Crédito,100.00
   2,Débito,50.00
   3,Crédito,200.00
   4,Débito,75.00
   5,Crédito,150.00
   ```

3. **Salida del Programa:**  
   La aplicación debe mostrar el reporte final en la terminal.  
   Ejemplo de salida:

   ```
   Reporte de Transacciones
   ---------------------------------------------
   Balance Final: 325.00
   Transacción de Mayor Monto: ID 3 - 200.00
   Conteo de Transacciones: Crédito: 3 Débito: 2
   ```

4. **Lenguaje de Programación:**  
   Utiliza el lenguaje de tu preferencia.
   - JavaScript (Node.js)

5. **README del Proyecto:**  

   - **Introducción:** Breve descripción del reto y su propósito.
      - Aplicacion para para el procesamiento de transacciones bancarias realizada con Node JS.
   - **Instrucciones de Ejecución:** 
    
     - **Clonar el repositorio**
       - git clone https://github.com/TU_USUARIO/INTERBANK_ACADEMY_25.git
    
     - **Navega al directorio del proyecto:**
       - cd INTERBANK_ACADEMY_25
       - npm install
    
     - Asegurate de tener el archivo data.csv
    
     - **Ejecutar la aplicacion:**
       - node app.js
    
     - **Ver el reporte en la consola de la terminal.**

   - **Enfoque y Solución:** Lógica implementada y decisiones de diseño.
  
     ## Enfoque y Solución

        ### Lógica Implementada
        
        La aplicación CLI está diseñada para procesar un archivo CSV con transacciones bancarias y generar un reporte que incluya el **balance final**, la **transacción de mayor monto** y el **conteo de transacciones** por tipo.
        
        1. **Lectura del archivo CSV**:
           Utilizamos el paquete `csv-parser` para leer el archivo CSV. Cada línea del archivo se procesa y se almacena en una estructura de datos, en este caso, un arreglo. El archivo debe tener el formato de tres columnas: `id`, `tipo` y `monto`.
        
        2. **Cálculo del Balance Final**:
           La aplicación realiza el cálculo del balance final sumando los montos de las transacciones de tipo "Crédito" y restando los montos de las transacciones de tipo "Débito". Este cálculo se realiza en un solo paso mientras procesamos el archivo.
        
        3. **Identificación de la Transacción de Mayor Monto**:
           Durante la lectura del archivo CSV, mantenemos un registro de la transacción con el mayor monto. Cada vez que encontramos una transacción con un monto mayor al almacenado anteriormente, actualizamos el registro de la transacción con el monto más alto.
        
        4. **Conteo de Transacciones**:
           La aplicación mantiene un contador separado para las transacciones de tipo "Crédito" y "Débito". A medida que se leen las transacciones, incrementamos los contadores según el tipo de cada transacción.
        
        5. **Generación del Reporte**:
           Una vez que el archivo CSV ha sido procesado y se han calculado todos los valores necesarios, la aplicación imprime el reporte en la terminal. El reporte incluye:
           - **Balance Final**: La diferencia entre los créditos y débitos.
           - **Transacción de Mayor Monto**: El ID y monto de la transacción con el valor más alto.
           - **Conteo de Transacciones**: La cantidad de transacciones de tipo "Crédito" y "Débito".
        
        ### Decisiones de Diseño
        
        1. **Elección de la estructura de datos**:
           Se usó un arreglo para almacenar las transacciones ya que el procesamiento es secuencial y no requiere un acceso aleatorio a los elementos. Esto facilita la iteración sobre las transacciones y permite hacer cálculos acumulativos como el balance final y el conteo de transacciones.
        
        2. **Uso de la librería `csv-parser`**:
           Se usó la librería `csv-parser` para leer el archivo CSV ya que es simple de integrar en proyectos de Node.js, eficiente para manejar archivos CSV de tamaño medio y fácil de usar para realizar el procesamiento de cada fila.
        
        3. **Manejo de archivos locales**:
           El archivo `data.csv` se maneja de manera local, permitiendo a los usuarios cambiar el archivo CSV si lo desean sin necesidad de modificar el código.
        
        4. **Salida en consola**:
           La decisión de imprimir los resultados directamente en la consola permite que el programa sea utilizado de forma sencilla en un entorno de línea de comandos.
        
        5. **Simplicidad y claridad**:
           La lógica implementada es simple para garantizar que la aplicación sea fácil de entender y mantener.
        
        ### Conclusión
        La aplicación proporciona una solución rápida y eficiente para procesar transacciones bancarias, calcular el balance final y generar un reporte en la consola.

   - **Estructura del Proyecto:**
       
        ### Descripción de los Archivos:
        
        - **`app.js`**:
          Este es el archivo principal de la aplicación. Contiene la lógica que procesa el archivo CSV, calcula el balance final, identifica la transacción de mayor monto y genera el reporte en la consola.
        
        - **`data.csv`**:
          Este archivo contiene las transacciones bancarias que la aplicación procesará. Tiene tres columnas: `id`, `tipo` (Crédito o Débito) y `monto`. Debes asegurarte de que este archivo esté presente en el mismo directorio que `app.js` o actualizar el código para apuntar a la ruta correcta.
        
        - **`package.json`**:
          Este archivo gestiona las dependencias del proyecto, los scripts de ejecución y otra información sobre el proyecto. Es necesario para que puedas instalar y manejar las dependencias, como `csv-parser`, de manera eficiente usando npm.
        
        - **`package-lock.json`**:
          Este archivo es generado automáticamente cuando se instala una dependencia mediante npm.
        
        - **`README.md`**:
          Este es el archivo que contiene toda la documentación sobre el proyecto. En él, se explica el propósito del proyecto, cómo ejecutarlo, y se detallan las decisiones de diseño y la estructura del proyecto.
        
        ### Notas Adicionales:
        - Todos los archivos deben estar en el mismo directorio raíz, para asegurar que la ejecución del programa sea correcta.


6. **Documentación y Calidad del Código:**
   - Código bien documentado y fácil de leer.
   - Comentarios explicando pasos clave y lógica del programa.
