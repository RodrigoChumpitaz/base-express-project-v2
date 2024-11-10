# Base Node Project

Estructura base para proyectos de node con typescript

## Características Principales

- **Express:** Framework de Node.js para construir aplicaciones web y APIs.
- **ESLint:** Herramienta para identificar y arreglar patrones de código problemáticos.
- **Prettier:** Formateador de código para mantener un estilo consistente.
- **Husky:** Herramienta para gestionar hooks de Git.
- **Mongoose:** ODM para MongoDB.
- **dotenv:** Carga variables de entorno desde un archivo `.env`.

## Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu máquina.

## Configuración

1. Clona o haz un fork del repositorio:
   ```bash
   git clone https://github.com/RodrigoChumpitaz/base-express-project
   cd base-express-project
   npm i | yarn
   ```
2. Crea un archivo `.env` basado en el archivo `.env.example`:
   ```bash
   cp .env.example .env
   ```

## Scripts disponibles

- **build:** Transpila el código con TypeScript.
- **start:** Ejecuta el código transpilado en modo PROD
- **dev:** Inicia el servidor en modo de desarrollo.
- **lint:** Inicia el servidor en modo de desarrollo.
- **prepare:** Instala Husky para gestionar hooks de Git.

## Estructura del proyecto

```bash
   ├── .env
   ├── .env.example
   ├── .eslintrc.js
   ├── .gitignore
   ├── .husky/
   │   ├── _/
   │   │   ├── .gitignore
   │   │   └── husky.sh
   ├── .nvmrc
   ├── .prettierignore
   ├── .prettierrc
   ├── package.json
   ├── README.md
   ├── scripts/
   │   └── build.sh
   ├── src/
   │   ├── app.ts
   │   ├── config/
   │   │   ├── dbconfig.ts
   │   │   ├── env.ts
   │   │   └── index.ts
   │   ├── index.ts
   │   ├── types/
   │   │   ├── genericObject.ts
   │   │   ├── index.ts
   │   │   └── statusCode.ts
   │   └── utils/
   │       ├── bcrypt.ts
   │       ├── index.ts
   │       ├── randomString.ts
   │       ├── response.ts
   │       └── UseCase.ts
   └── tsconfig.json
```

## Nota

Después de clonar o hacer fork del repositorio, puedes eliminar el historial de Git existente y comenzar un nuevo repositorio con estos pasos:

```bash
      rm -rf .git
      git init
      git add .
      git commit -m "Initial commit"
```
