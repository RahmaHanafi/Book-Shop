<template>
  <div>
    <!-- <h1>Book</h1> -->
    <div class="card mb-3 border-0 shadow col-7 mx-auto">
      <div class="row g-0">
        <div class="col-md-6">
          <img
            :src="book.img"
            class="img-fluid rounded-start object-fit-contain"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <div class="card-body mx-5">
            <h5 class="card-title fw-bold text-success">
              {{ book.book_name }}
            </h5>

            <p class="card-text">{{ book.description }}</p>
            <p class="card-text fst-italic text-info-emphasis">
              {{ book.language }}
            </p>
            <p class="card-text">
              <small class="text-success">$ {{ book.price }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookPage",
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
  },
};
</script>

<style scoped></style>
