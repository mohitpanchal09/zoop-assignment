# 🛍️ E-commerce Product Listing Page

This is a simple **E-commerce Product Listing Page** built using **Next.js** with **SSR (Server-Side Rendering)**. It fetches product data from a mock API, implements filtering, sorting, and includes a shopping cart with **Redux Toolkit** for state management.

## 🚀 Features

- ✅ **Product Listing**: Displays product images, titles, prices, and categories.
- ✅ **Filtering & Sorting**: Filter by category and sort by price.
- ✅ **Product Details Page**: Clicking on a product redirects to its detailed view.
- ✅ **Shopping Cart**: Add, remove, and update product quantities using Redux.
- ✅ **SSR with Next.js**: Uses server-side rendering for better SEO and performance.
- ✅ **Responsive Design**: Works seamlessly on both desktop and mobile screens.
- ✅ **Styled with SCSS**: Modern and maintainable styles with SCSS.

## 📂 Project Structure

```
📦 zoop-assignment
├── 📂 app
│   ├── 📂 cart          # Shopping cart logic
│   ├── 📂 product       # Product listing and details
│   ├── 📂 styles        # SCSS stylesheets
│   ├── 📜 layout.tsx    # Main layout component
│   ├── 📜 page.tsx      # Homepage (Product Listing)
│
├── 📂 components
│   ├── 📂 ui            # UI Components
│   ├── 📜 Navbar.tsx    # Navigation bar
│   ├── 📜 ProductCard.tsx  # Product card component
│   ├── 📜 ProductFilters.tsx  # Filtering UI
│   ├── 📜 ProductGrid.tsx    # Grid for displaying products
│   ├── 📜 AddToCartButton.tsx  # Add to cart button
│
├── 📂 lib
│   ├── 📂 store         # Redux store configuration
│   ├── 📜 cartSlice.ts  # Redux slice for cart state
│   ├── 📜 store.ts      # Redux store setup
│   ├── 📜 api.ts        # API fetching logic
│   ├── 📜 utils.ts      # Helper functions
│
├── 📜 .eslintrc.json    # ESLint configuration
├── 📜 package.json      # Project dependencies
├── 📜 next.config.js    # Next.js configuration
├── 📜 README.md         # Documentation
```

## 🏗️ Setup & Installation

1. **Clone the repository**:
   ```sh
   git clone git@github.com:mohitpanchal09/zoop-assignment.git
   cd zoop-assignment
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the development server**:
   ```sh
   npm run dev
   ```

4. **Build for production**:
   ```sh
   npm run build
   npm start
   ```

## ⚡ Tech Stack

- **Next.js** - Server-side rendering & React framework
- **Redux Toolkit** - State management
- **SCSS** - Styling
- **TypeScript** - Static typing
- **FakeStoreAPI** - Mock API for products

## 📌 API Reference

This project fetches data from **FakeStoreAPI**:
- Base URL: `https://fakestoreapi.com`
- Fetch all products: `GET /products`
- Fetch a single product: `GET /products/:id`

## 🎯 Features to Improve

- ✅ Add user authentication.
- ✅ Implement persistent cart storage.
- ✅ Improve UI/UX with animations.
- ✅ Integrate a real payment gateway.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Developed by **Mohit Kumar** 🚀  
🔗 GitHub: [mohitpanchal09](https://github.com/mohitpanchal09)  
📧 Email: panchalmohitg2002@gmail.com

---

💡 *If you like this project, don't forget to ⭐ the repo!*
