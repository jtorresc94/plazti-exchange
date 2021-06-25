<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
    ></bounce-loader>
    <px-assets-table :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import api from "@/api.js";
export default {
  name: "Home",
  components: {
    PxAssetsTable,
  },
  data() {
    return {
      assets: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    (async () => {
      const data = await api.getAssets();
      this.assets = data.data;
      this.isLoading = false;
    })();
  },
};
</script>

<style scoped>
</style>