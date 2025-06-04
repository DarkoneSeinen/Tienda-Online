# 🛍️ Tienda-Online

Una aplicación web moderna de comercio electrónico construida con Next.js y NestJS, utilizando Prisma como ORM.

## 🚀 Características Actuales

- **Gestión de Productos**
  - ✅ Listado de productos con interfaz moderna y responsiva
  - ✅ Creación de nuevos productos
  - ✅ Edición de productos existentes
  - ✅ Eliminación de productos
  - ✅ Vista detallada de productos

## 🎯 Próximas Características

- **Autenticación y Usuarios** 🔒
  - [ ] Registro de usuarios
  - [ ] Inicio de sesión
  - [ ] Roles (Admin/Cliente)
  - [ ] Perfil de usuario personalizable

- **Carrito de Compras** 🛒
  - [ ] Agregar productos al carrito
  - [ ] Gestionar cantidades
  - [ ] Persistencia del carrito
  - [ ] Proceso de checkout

- **Categorías y Filtros** 🏷️
  - [ ] Categorización de productos
  - [ ] Filtros avanzados
  - [ ] Búsqueda inteligente
  - [ ] Ordenamiento personalizado

- **Proceso de Pago** 💳
  - [ ] Integración con pasarela de pagos
  - [ ] Múltiples métodos de pago
  - [ ] Facturación automática

- **Características Adicionales** ⭐
  - [ ] Sistema de reseñas y calificaciones
  - [ ] Lista de deseos
  - [ ] Historial de pedidos
  - [ ] Panel de administración avanzado
  - [ ] Notificaciones en tiempo real
  - [ ] Gestión de inventario

## 🛠️ Tecnologías

### Frontend
- **Next.js** (v15.3.3)
  - React Server Components
  - App Router
  - Serverless Functions
- **Tailwind CSS**
  - UI Components modernos
  - Diseño responsivo
- **TypeScript**
  - Tipado estático
  - Mejor mantenibilidad

### Backend
- **NestJS** (v11.0.7)
  - Arquitectura modular
  - Inyección de dependencias
  - Decoradores TypeScript
- **Prisma**
  - ORM moderno
  - Migraciones tipo-seguras
  - Schema-driven development
- **SQLite** (Desarrollo)
  - Base de datos relacional
  - Fácil configuración

## 📁 Estructura del Proyecto

\`\`\`
tienda-online/
├── tienda-frontend/           # Aplicación Next.js
│   ├── src/
│   │   ├── app/              # App Router y páginas
│   │   ├── components/       # Componentes reutilizables
│   │   └── lib/             # Utilidades y configuraciones
│   └── public/              # Archivos estáticos
│
└── tienda-backend/           # API NestJS
    ├── src/
    │   ├── products/        # Módulo de productos
    │   └── prisma/          # Servicio de Prisma
    └── prisma/
        └── schema.prisma    # Schema de la base de datos
\`\`\`

## 🚀 Comenzando

### Requisitos Previos
- Node.js (v18 o superior)
- npm o yarn
- Git

### Instalación

1. Clona el repositorio:
\`\`\`bash
git clone https://github.com/DarkoneSeinen/tienda-online.git
cd tienda-online
\`\`\`

2. Instala las dependencias del frontend:
\`\`\`bash
cd tienda-frontend
npm install
\`\`\`

3. Instala las dependencias del backend:
\`\`\`bash
cd ../tienda-backend
npm install
\`\`\`

4. Configura la base de datos:
\`\`\`bash
npx prisma migrate dev
\`\`\`

5. Inicia el desarrollo:
\`\`\`bash
# Terminal 1: Backend
cd tienda-backend
npm run start:dev

# Terminal 2: Frontend
cd tienda-frontend
npm run dev
\`\`\`

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, lee el archivo CONTRIBUTING.md para detalles sobre nuestro código de conducta y el proceso para enviarnos pull requests.

## 📝 Estado del Proyecto

Este proyecto está en desarrollo activo. Estamos trabajando constantemente en nuevas características y mejoras.

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - vea el archivo [LICENSE](LICENSE) para más detalles.