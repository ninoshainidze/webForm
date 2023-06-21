<template>
  <h1>Create deal</h1>
  <CreateForm :inputs="form1Inputs" />
</template>

<script>
import CreateForm from "../components/form/CreateForm.vue";

export default {
  components: {
    CreateForm,
  },
  data() {
    return {
      form1Inputs: [
        { name: "dealName", label: "Deal name", type: "text", value: "" },
        { name: "dealStage", label: "Deal stage", type: "text", value: "" },
      ],
    };
  },
};
</script>
