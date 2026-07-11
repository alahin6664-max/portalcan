# 🎨 PortalCan Design System

## Objetivo

El Design System de PortalCan centraliza todos los tokens de diseño para mantener una interfaz coherente, escalable y fácil de mantener.

**Regla principal:** ningún componente debe utilizar valores "hardcodeados" para colores, tipografías, espaciados, radios o sombras. Todo debe obtenerse desde los tokens definidos en `src/styles/tokens`.

---

# Estructura

```
src/
└── styles/
    ├── README.md
    ├── theme.css
    └── tokens/
        ├── colors.css
        ├── typography.css
        ├── spacing.css
        ├── radius.css
        ├── shadows.css
        └── animations.css
```

---

# Filosofía

El sistema está basado en **Design Tokens**.

Cada token representa una decisión de diseño y no un valor aislado.

Ejemplo:

```css
--pc-color-primary
```

En lugar de:

```css
#d4af37
```

Esto permite modificar el branding de toda la aplicación desde un único lugar.

---

# Convención de nombres

Todos los tokens utilizan el prefijo:

```
--pc-
```

Categorías disponibles:

| Prefijo           | Descripción         |
| ----------------- | ------------------- |
| `--pc-color-*`    | Colores             |
| `--pc-font-*`     | Tipografías         |
| `--pc-text-*`     | Tamaños de texto    |
| `--pc-spacing-*`  | Espaciados          |
| `--pc-radius-*`   | Bordes redondeados  |
| `--pc-shadow-*`   | Sombras             |
| `--pc-duration-*` | Duraciones          |
| `--pc-ease-*`     | Curvas de animación |

---

# Organización

Cada categoría tiene su propio archivo.

## colors.css

Colores del branding y estados.

Ejemplos:

* Primary
* Background
* Surface
* Card
* Border
* Success
* Warning
* Error

---

## typography.css

Define:

* Familias tipográficas
* Tamaños
* Pesos
* Alturas de línea

---

## spacing.css

Escala oficial de espaciados.

Todos los márgenes, paddings y separaciones deben utilizar esta escala.

---

## radius.css

Escala oficial de bordes redondeados.

---

## shadows.css

Sombras oficiales para toda la aplicación.

No crear sombras personalizadas dentro de los componentes.

---

## animations.css

Duraciones y curvas de animación.

Todos los componentes deben reutilizar estos valores.

---

# Buenas prácticas

✅ Utilizar siempre tokens.

✅ Mantener una nomenclatura consistente.

✅ Añadir nuevos tokens únicamente cuando exista una necesidad real.

✅ Reutilizar antes de crear.

✅ Mantener la escala de diseño.

---

# Evitar

❌ Colores hexadecimales dentro de componentes.

❌ Márgenes o paddings arbitrarios.

❌ Sombras diferentes para componentes similares.

❌ Radios distintos sin justificación.

❌ Animaciones con tiempos diferentes sin necesidad.

---

# Objetivo a largo plazo

Este Design System debe servir como base para:

* Web PortalCan
* Panel de administración
* Herramientas internas
* Futuras aplicaciones móviles
* Biblioteca de componentes reutilizables
* Storybook (si se incorpora en el futuro)

---

# Mantenimiento

Antes de añadir un nuevo token, comprobar:

1. ¿Ya existe uno equivalente?
2. ¿Es reutilizable?
3. ¿Encaja en la escala actual?
4. ¿Aporta consistencia al sistema?

Si la respuesta es **no**, reutiliza un token existente.

---

**Versión:** 1.0.0

**Proyecto:** PortalCan

**Estado:** En desarrollo
