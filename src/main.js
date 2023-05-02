import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import addBookPage from "./components/pages/addBook.vue";
import BookPage from "./components/pages/bookDetails.vue";
import notFoundPage from "./components/pages/error.vue";
import updateBookPage from "./components/pages/updateBook.vue";
import booksPage from "./components/pages/books.vue";
import "./style.css";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: booksPage,
    alias: "/books",
  },
  {
    path: "/books/:id",
    component: BookPage,
  },
  {
    path: "/books/:id/update",
    component: updateBookPage,
  },
  {
    path: "/newBook",
    component: addBookPage,
  },
  {
    path: "/:notFound(.*)*",
    component: notFoundPage,
    meta: { hideNavBar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
