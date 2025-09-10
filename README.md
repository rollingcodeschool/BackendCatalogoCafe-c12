# ☕ Café Catalog API

Una API RESTful robusta y segura diseñada para gestionar el catálogo de productos de una cafetería. Este backend proporciona endpoints completos para la administración de productos, se puede crear usuarios y realizar la autenticación.  

## ✨ Características Principales
- Gestión Completa de Productos: CRUD completo para el catálogo de productos de cafetería
- Sistema de Autenticación Seguro: Registro y login de usuarios con JWT y bcrypt
- Validación de Datos Rigurosa: Implementación de express-validator para validaciones robustas
- Seguridad Mejorada: Middlewares de CORS y logging con morgan
- Arquitectura Escalable: Estructura organizada para fácil mantenimiento y expansión
- Documentación Completa: Endpoints bien documentados para fácil integración


## 🚀 Tecnologías Utilizadas
- Node.js - Entorno de ejecución JavaScript del lado del servidor
- Express.js - Framework web minimalista y flexible para Node.js
- express-validator - Middleware para validación y sanitización de datos de entrada
- bcrypt - Librería para encriptación segura de contraseñas
- jsonwebtoken (JWT) - Tokens de autenticación stateless y seguros
- cors - Middleware para habilitar Cross-Origin Resource Sharing
- morgan - Logger de peticiones HTTP para monitoreo y debugging

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura modular organizada en capas:

```
public
└── index.html       # Archivo estatico
db
└── config.js        # Configuración de la aplicación (database)
server
└── config.js        # Configuración del servidor, middlewares.
src/
├── controllers/     # Lógica de negocio y manejo de requests
    ├── producto.controllers.js 
    └── usuario.controllers.js 
├── models/          # Definición de modelos de datos y esquemas
├── routes/          # Definición de endpoints y enrutamiento
├── middleware/      # Middlewares personalizados (auth, validations, error handling)
├── helpers/         # Configuración de la aplicación  (cloudinary)
└── index.js         # Punto de entrada principal de la aplicación
``` 

## 📦 Instalación y Configuración

- Node.js (versión 22 o superior)
- npm o yarn
- MongoDB (local o en la nube)

### Pasos de Instalación

1. Clonar el repositorio:
```
git clone [repo de github](http://github.com/rollingcodeschool/BackendCatalogoCafe-c12.git)
cd BackendCatalogoCafe-c12
```
 
1. Instalar dependencias
`npm install`
1. Configura las variables de entorno:
    1. Crear el archivo `.env`
    1. El archivo debe contener las siguientes variables: PORT, MONGODB, SECRET_JWT

1. Iniciar la aplicación:
```
# Comando de desarrollo 
npm run dev

# Comando de producción
npm start
```
1. asd
1. asd

## 📋 Documentación de los Endpoints de la API

Mira la documentación aqui

## 👨‍💻👩‍💻 Autores

- Emilse Arias