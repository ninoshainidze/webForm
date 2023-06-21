<template>
  <div></div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "sweetAlert",
  methods: {
    showSuccessAlert() {
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
    showErrorAlert() {
      Swal.fire({
        title: "Error!",
        text: "Form submission failed.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  },
};
</script>