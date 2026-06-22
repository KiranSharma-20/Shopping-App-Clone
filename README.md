# Myntra Clone

A React-based e-commerce UI prototype inspired by Myntra. This project uses Vite, React Router, Redux Toolkit, and React Hot Toast to build a responsive shopping experience.

## Features

- Home page with featured product sections
- Product listing and detail UI
- Shopping cart page with quantity and checkout flow
- Wishlist page
- Orders page to view placed orders
- User authentication screens: login and signup
- Address form and order confirmation flow
- Global state management with Redux Toolkit
- Client-side routing with React Router v7
- Toast notifications using `react-hot-toast`

## Tech stack

- React 19
- Vite
- Redux Toolkit
- React Router DOM
- React Hot Toast
- React Icons
- Bootstrap (installed but optional)

## Project structure

- `src/App.jsx` - main routing and app layout
- `src/redux/store.js` - Redux store setup
- `src/redux/Slice/productSlice.js` - product state management
- `src/layouts/HeaderLayout.jsx` - shared header layout wrapper for pages with header/navigation and global toast notifications
- `src/Components/` - reusable UI components such as `Header`, `Login`, `Signup`, `Address`, `OrderPlaced`, and product cards
- `src/screens/` - main app screens like `Home`, `Products`, `Cart`, `Orders`, and `WishList`
- `src/pages/` - page sections for categories, filters, and slider content
  - `src/pages/Categories/` - category browsing UI
    - `src/pages/Categories/index.jsx` - category section component
    - `src/pages/Categories/category.css` - category section styling
  - `src/pages/Filters/` - filter controls UI
  - `src/pages/Sliders/` - banner/slider components
    - `src/pages/Sliders/index.jsx` - slider section component
    - `src/pages/Sliders/slider.css` - slider styling
- `src/data/index.js` - sample product and collection data

## Main routes

- `/` - Home screen
- `/products` - Products listing
- `/login` - Login screen
- `/signup` - Signup screen
- `/cart` - Cart screen
- `/address` - Address form screen
- `/order_confirmation` - Order confirmation screen
- `/orders` - Orders history screen
- `/wishList` - Wishlist screen

## Setup

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open the app in the browser

The local Vite server URL is shown in the terminal, typically `http://localhost:5173`.

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Notes

- The project is currently using React Router nested routes with `HeaderLayout`.
- Bootstrap is available as a dependency but may not be enabled by default in the app.
- Adjust component styling in the `src/Components/` and `src/screens/` folders.

## License

This repository is for learning and demo purposes.
