<template>
  <div>
    <h1 class="col-7 mx-auto">Add Book</h1>
    <div class="shadow p-5 col-7 mx-auto">
      <form @submit.prevent="addBook">
        <div class="mb-3">
          <label for="bookName" class="form-label">Book name</label>
          <input
            type="text"
            class="form-control"
            id="bookName"
            aria-describedby="emailHelp"
            v-model="book_name"
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            aria-describedby="emailHelp"
            v-model="price"
          />
        </div>
        <div class="mb-3">
          <label for="language" class="form-label">language</label>
          <input
            type="text"
            class="form-control"
            id="language"
            aria-describedby="emailHelp"
            v-model="language"
          />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Img URL</label>
          <input
            type="text"
            class="form-control"
            id="image"
            aria-describedby="emailHelp"
            v-model="img"
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            aria-describedby="emailHelp"
            v-model="description"
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
  name: "addBookPage",
  data() {
    return {
      book_name: "",
      price: 0,
      language: "",
      img: "",
      description: "",
    };
  },

  methods: {
    addBook() {
      let book = {
        book_name: this.book_name,
        price: this.price,
        language: this.language,
        img: this.img,
        description: this.description,
      };
      axios.post(`http://localhost:3000/Books`, book).then((res) => {});
    },
  },
};
</script>

<style scoped></style>
