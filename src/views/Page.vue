<template>
  <el-container id="page">
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <el-row class="is-full-width" type="flex" align="middle" justify="space-between">
          <div>
            <h1 class="header-title">
              {{ $route.name }}
            </h1>
          </div>
          <el-row type="flex" align="middle">
            <el-badge is-dot class="bell">
              <el-button type="text" @click="unavailableFeature()">
                <i class="fal fa-bell"></i>
              </el-button>
            </el-badge>
            <div class="user-info" @click="unavailableFeature()">
              <el-row type="flex" align="middle">
                <img class="user-avatar mr-4" src="@/assets/user.jpg" />
                <span>John Doe</span>
              </el-row>
            </div>
          </el-row>
        </el-row>
      </el-header>
      <el-main>
        <router-view class="component-container" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Menu from '@/components/Menu'

export default {
  name: 'Page',
  components: { Menu },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    ...mapMutations([]),
    ...mapActions(['unavailableFeature']),
  },
}
</script>

<style lang="scss" scoped>
#page {
  min-height: 100vh;
  background: #f5f5f5;
}
</style>

<style lang="scss">
#page {
  .el-aside {
    width: 220px !important;
    transition: all 0.25s ease;
  }
  @media screen and (max-width: 992px) {
    .el-aside {
      width: 3.5rem !important;
    }
  }
  .el-header {
    width: 100%;
    height: 120px !important;
    display: flex;
    align-content: center;
    padding: 2rem;
    .header-title {
      font-weight: 500;
      color: var(--color-text-primary);
    }
    .bell {
      .el-button {
        padding: 0;
        margin-top: -4px;
        margin-right: -7px;
      }
      i {
        transition: all 0.25s ease-in-out;
        &:hover {
          color: var(--color-primary);
        }
        font-size: 1.75rem;
        color: var(--color-text-primary);
      }
    }
    .user-avatar {
      border-radius: 50%;
      height: 3rem;
    }
    .user-info {
      margin-left: 2.5rem;
      cursor: pointer;
      transition: all 0.25s ease-in-out;
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  .el-main {
    // min-height: calc(100vh - 164px);
    // min-height: 600px;
    padding: 2rem;
    padding-top: 0;
    .component-container {
      min-height: 600px;
      padding: 2rem;
      background: white;
      border-radius: 20px;
    }
  }
}
</style>
