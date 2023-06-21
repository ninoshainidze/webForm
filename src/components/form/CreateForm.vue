<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="input in inputs" :key="input.name" class="form-floating mb-3">
      <input
        class="form-control"
        :placeholder="input.name"
        :id="input.name"
        :type="input.type"
        :name="input.name"
        v-model="input.value"
      />
      <label :for="input.name">{{ input.label }}</label>
    </div>
    <button type="submit" class="btn btn-primary">Click me</button>

    <sweet-alert ref="sweetAlertComponent"></sweet-alert>
  </form>
</template>

<script>
import SweetAlert from "../alert/SweetAlert.vue";

export default {
  name: "CreateForm",
  props: {
    inputs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      formSuccess: true,
    };
  },
  components: {
    SweetAlert,
  },
  methods: {
    handleSubmit() {
      console.log(this.$props);
      // Perform form submission logic

      // Set alert data based on success/error
      if (this.formSuccess) {
        this.$refs.sweetAlertComponent.showSuccessAlert();
      } else {
        this.$refs.sweetAlertComponent.showErrorAlert();
      }
    },
  },
};
</script>