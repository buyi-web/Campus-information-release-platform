<template>
  <div class="button-list">
    <div
      class="button-item"
      :class="{ active: index == selectedIndex }"
      v-for="(item, index) in data"
      :key="index"
      @click="clickHandel(item, index)"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      selectedIndex: 0
    }
  },
  methods: {
    clickHandel(item, index) {
      this.selectedIndex = index
      this.$emit('buttonHandel', item)
    }
  }
}
</script>
<style lang="scss" scoped>
.button-list {
  overflow: hidden;
  .button-item {
    float: left;
    width: 60px;
    padding: 10px 20px;
    background: #ccc;
    text-align: center;
    background: #f5f5f5;
    border: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    border-top: 2px solid #d7d7d7;
    border-left: none;
    color: #6f7579;
    &.active {
      color: #395996;
      background: #fff;
      border-bottom: 2px solid #fff;
      border-top: 2px solid #395996;
    }
  }
}
</style>
