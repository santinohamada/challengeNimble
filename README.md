
# Nimble Gravity Challenge — Frontend

Aplicación frontend desarrollada en React como resolución del challenge técnico para el rol de Junior Fullstack Developer en Nimble Gravity.

La aplicación consume la API provista para validar un candidato mediante email, obtener posiciones abiertas y permitir el envío de una postulación incluyendo la URL del repositorio del proyecto.

 

## Descripción

El objetivo del proyecto es implementar una interfaz simple y clara que permita:

- Obtener los datos del candidato desde la API mediante su email.
- Listar las posiciones disponibles.
- Permitir ingresar la URL del repositorio asociado a la postulación.
- Enviar la postulación a la API.
- Manejar estados de carga y errores de red en la interfaz.

El foco del desarrollo estuvo en la claridad del código, separación de responsabilidades y manejo correcto del flujo de datos.

 

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Fetch API
- TailwindCSS



## Instalación y ejecución local

### Requisitos previos

- Node.js 18 o superior
- npm o yarn

### Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/TU-REPO
cd TU-REPO
````

### Instalar dependencias

```bash
npm install
```

### Ejecutar en entorno de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```



## Flujo de la aplicación

1. El usuario ingresa su email.
2. La aplicación consulta la API y obtiene los datos del candidato.
3. Se listan las posiciones abiertas.
4. El usuario ingresa la URL del repositorio.
5. Se envía la postulación mediante POST.
6. La interfaz muestra feedback de éxito o error según la respuesta.


## Estructura del proyecto

```
src/
 ├── components/     Componentes de UI reutilizables
 ├── lib/            Lógica de acceso a API y utilidades
 ├── types/          Definiciones de tipos TypeScript
 ├── App.tsx         Componente raíz de la aplicación
```

La organización busca mantener separada la lógica de red, la representación visual y los tipos del dominio.

 

## Decisiones técnicas

* Se utilizó estado local con hooks dado el alcance acotado del challenge.
* Se separó la lógica de acceso a la API en módulos independientes.
* Se implementó parseo de errores de la API para mostrar mensajes claros al usuario.
* Se evitó incorporar librerías adicionales para mantener la solución simple y enfocada.
* Se priorizó legibilidad y mantenimiento del código por sobre optimizaciones prematuras.

 

## Posibles mejoras

En un entorno productivo podrían incorporarse:

* Validaciones más robustas del repositorio ingresado.
* Tests unitarios y de integración.
* Manejo global de errores.
* Persistencia de sesión del candidato.
* Feedback visual adicional en el proceso de envío.
* Configuración de variables de entorno para la URL de la API.

 

## Autor
| Colaborador                                | Perfil                                       |
|              --|               -|
| ![Santino Hamada](https://github.com/santinohamada.png) | [Santino Hamada](https://github.com/santinohamada) |

