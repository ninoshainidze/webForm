<template>
  <h1>Create account</h1>
  <CreateForm :inputs="form2Inputs" />
</template>

<script>
import CreateForm from "../components/form/CreateForm.vue";

export default {
  components: {
    CreateForm,
  },
  data() {
    return {
      form2Inputs: [
        { name: "accountName", label: "Account name", type: "text", value: "" },
        {
          name: "accountWebsite",
          label: "Account website",
          type: "text",
          value: "",
        },
        {
          name: "accountPhone",
          label: "Account phone",
          type: "text",
          value: "",
        },
      ],
    };
  },
};
</script>
