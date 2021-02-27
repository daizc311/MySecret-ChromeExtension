<template>
  <div class="collapseDiv">
    <el-collapse
        @change="collapseChange"
        v-infinite-scroll="addCollapses"
        :infinite-scroll-disabled="disabled"
        :infinite-scroll-distance="10"
        :infinite-scroll-immediate="true"
        :accordion="true">
      <el-collapse-item
          v-for="collapse in collapseList"
          :key="collapse.id"
          :title="collapse.title"
          :name="collapse.id"
      >
        <!--        <PwdItemTable v-if="collapse.content" :tableData="collapse.content"/>-->
      </el-collapse-item>
      <div style="text-align: center;margin: 3px"  v-if="noMore">没有更多了</div>
    </el-collapse>
  </div>
</template>

<script>
import PwdItemTable from "./PwdItemTable.vue"


export default {
  name: "PwdItems",
  data() {
    return {
      // 当前激活的CollapseItem的Key
      currentActiveCollapseKey: null,
      query: {},
      pageParam: {
        pageNum: 1,
        pageSize: 10,
        total: 100,
      },
      loading: false,
      collapseList: [],
    };
  },
  created() {
    // this.addCollapses()
  },
  computed: {
    disabled() {
      return this.loading || this.noMore
    },
    noMore() {
      return this.collapseList.length >= this.pageParam.total
    }
  },
  methods: {
    pagePasswordGroup(pageNum, pageSize) {
      //TODO axios
      return Array(pageSize).fill(1).map((value, index, array) => {
        index += (pageNum - 1) * pageSize
        let item = {
          id: 1,
          title: "www.baidu.com",
          content: "null"
        };
        item.id = index
        item.title = `www.baidu${index}.com`
        return item
      })
    },
    addCollapses() {
      this.loading = true
      this.collapseList = this.collapseList.concat(this.pagePasswordGroup(this.pageParam.pageNum, this.pageParam.pageSize))
      this.pageParam.pageNum++
      this.loading = false
    },
    collapseChange(activeName, b) {
      // 清除上一个激活的节点
      this.collapseList.forEach(collapse => {
        if (collapse.id === this.currentActiveCollapseKey) {
          collapse.content = null;
        }
        if (collapse.id === activeName) {
          //TODO axios
          collapse.content = []
        }
      })
      // 记录当前激活节点
      this.currentActiveCollapseKey = activeName
    },

  },
  components: {
    // PwdItemTable
  }
}
</script>

<style scoped>
.collapseDiv{
  overflow:auto;
  height: 350px;
  width: -webkit-fill-available;
}
</style>