<template>
  <div>
    <div class="d-flex justify-content-center flex-wrap container gap-4">
      <div v-for="book in Books" :key="book.id">
        <div class="card shadow border-0" style="width: 18rem">
          <img
            :src="book.img"
            class="card-img-top object-fit-contain"
            :alt="book.description"
            style="height: 15rem"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold text-capitalize">
              {{ book.book_name }}
            </h5>
            <div class="d-flex justify-content-between">
              <p class="fst-italic">{{ book.language }}</p>
              <p class="card-text">$ {{ book.price }}</p>
            </div>

            <div class="d-flex gap-2 mb-2 justify-content-center">
              <router-link
                :to="`/books/${book.id}/update`"
                class="btn btn-warning badge border-0 text-capitalize"
                >edit</router-link
              >
              <button
                class="btn btn-danger badge border-0 text-capitalize"
                @click="handleDelete(book.id)"
              >
                delete
              </button>
            </div>

            <router-link
              :to="`/books/${book.id}`"
              class="btn btn-dark justify-content-center d-flex text-capitalize"
              >see more</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "booksPage",
  data() {
    return {
      Books: [],
    };
  },
  created() {
    this.getAllBooks();
  },
  methods: {
    getAllBooks() {
      axios.get("http://localhost:3000/Books").then((res) => {
        this.Books = res.data;
        console.log(this.Books);
      });
    },

    handleDelete(Id) {
      axios.delete(`http://localhost:3000/Books/${Id}`).then((res) => {
        this.getAllBooks();
      });
    },
  },
};
</script>

<style scoped></style>
