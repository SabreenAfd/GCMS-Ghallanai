# Overview

<<<<<<< HEAD
 web application for GCMS (Government Commerce & Management Sciences College) built with modern web technologies. The application serves as the institution's official website, showcasing academic programs, faculty information, student achievements, sports activities, and college gallery. It features a professional, responsive design with a carousel-based hero section, interactive components, and comprehensive institutional information.
=======
The application serves as the institution's official website, showcasing academic programs, faculty information, student achievements, sports activities, and college gallery. It features a professional, responsive design with a carousel-based hero section, interactive components, and comprehensive institutional information.
>>>>>>> bf034e1cc0374475d9eca9f9a479f5b8ae118f29

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture  
- **Server Framework**: Express.js with TypeScript for API development
- **Data Storage**: In-memory storage implementation with interface-based design for easy database migration
- **Development Setup**: Custom Vite integration for seamless full-stack development experience
- **API Design**: RESTful API structure with `/api` prefix and centralized error handling

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Connection**: Neon Database serverless PostgreSQL integration

## Component Architecture
- **Layout Structure**: Modular component design with dedicated sections (Header, Hero, Faculty, Sports, Gallery, Footer)
- **Responsive Design**: Mobile-first approach with breakpoint-specific styling
- **Interactive Elements**: Carousel components, modal dialogs, smooth scrolling navigation
- **Content Management**: Static content with external image hosting for college assets

## Development Workflow
- **Type Safety**: Comprehensive TypeScript configuration across client, server, and shared modules
- **Code Organization**: Clear separation of concerns with `/client`, `/server`, and `/shared` directories
- **Asset Management**: Vite-based asset processing with path aliasing for clean imports
- **Development Tools**: ESBuild for server bundling and development-specific tooling

# External Dependencies

## Core Technologies
- **React 18**: Modern React with hooks and concurrent features
- **Express.js**: Web application framework for Node.js
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Next-generation frontend tooling for development and builds

## Database & ORM
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Drizzle Kit**: Database migration and introspection tools

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom theming
- **Radix UI**: Unstyled, accessible component primitives
- **Shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Icon library for consistent iconography

## State Management & Data Fetching
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library

## Development Tools
- **PostCSS**: CSS processing with Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds
- **Wouter**: Minimalist routing library for React applications

## Deployment & Hosting
- **Replit**: Cloud-based development and hosting platform
- **Static Assets**: External hosting for images and media files
- **Environment Variables**: Configuration management for database connections
