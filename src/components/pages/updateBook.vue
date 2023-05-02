<template>
  <div>
    <h1 class="col-7 mx-auto">Update Book</h1>
    <div class="shadow p-5 col-7 mx-auto">
      <form @submit.prevent="editBook">
        <div class="mb-3">
          <label for="bookName" class="form-label">Book name</label>
          <input
            type="text"
            class="form-control"
            id="bookName"
            aria-describedby="emailHelp"
            v-model="book.book_name"
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            aria-describedby="emailHelp"
            v-model="book.price"
          />
        </div>
        <div class="mb-3">
          <label for="language" class="form-label">language</label>
          <input
            type="text"
            class="form-control"
            id="language"
            aria-describedby="emailHelp"
            v-model="book.language"
          />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Img URL</label>
          <input
            type="text"
            class="form-control"
            id="image"
            aria-describedby="emailHelp"
            v-model="book.img"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "updateBookPage",
  data() {
    return {
      ID: "",
      book: {},
    };
  },
  created() {
    this.getBookById();
  },
  methods: {
    getBookById() {
      this.ID = this.$route.params.id;
      axios.get(`http://localhost:3000/Books/${this.ID}`).then((res) => {
        this.book = res.data;
        console.log(this.book);
      });
    },

    editBook() {
      this.ID = this.$route.params.id;
      axios
        .put(`http://localhost:3000/Books/${this.ID}`, this.book)
        .then((res) => {});
    },
  },
};
</script>

<style scoped></style>
