
# pagina_de_profundizacion (fixed)

Proyecto Angular 16 (clásico) corregido para evitar errores de compilación.

Pasos:
1. Extrae este ZIP.
2. Ejecuta en la carpeta del proyecto:
   npm install
   npm run start

Notas:
- Se activó resolveJsonModule y esModuleInterop en tsconfig.json para permitir importar JSON.
- movies.json usa la clave 'anio' (sin ñ) para compatibilidad con el lexer de Angular.
- Asegúrate de usar Node.js y npm compatibles con Angular 16.
