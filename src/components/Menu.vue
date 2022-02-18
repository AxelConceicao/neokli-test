<template>
  <el-col id="side-menu">
    <div class="mb-6 is-full-width" @click="go('/')">
      <el-row type="flex" justify="center">
        <img class="p-2 logo" alt="Logo" src="@/assets/neokli-logo.png" />
      </el-row>
    </div>
    <div class="is-flex-grow-1">
      <el-row type="flex" align="middle" v-for="(v, k) in menu" :key="k" class="px-4 mb-3">
        <div class="menu-item p-3" :class="v.name === $route.name ? 'is-active' : ''" @click="go(v.path)">
          <el-row type="flex" align="middle">
            <i :class="v.icon"></i>
            <span>{{ v.name }}</span>
          </el-row>
          <div class="shape"></div>
        </div>
      </el-row>
    </div>
    <div>
      <el-row type="flex" align="middle" class="px-4 mb-3">
        <div class="menu-item p-3" :class="'Paramètres' === $route.name ? 'is-active' : ''" @click="go('settings')">
          <el-row type="flex" align="middle">
            <i class="fal fa-cog"></i>
            <span>Paramètres</span>
          </el-row>
          <div class="shape"></div>
        </div>
      </el-row>
      <el-row type="flex" align="middle" class="px-4 mb-3">
        <div class="menu-item p-3" @click="unavailableFeature()">
          <el-row type="flex" align="middle">
            <i class="fal fa-sign-out"></i>
            <span>Déconnexion</span>
          </el-row>
          <div class="shape"></div>
        </div>
      </el-row>
    </div>
  </el-col>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'SideMenu',
  computed: {
    ...mapState({ menu: (state) => state.menu.menu }),
    ...mapGetters([]),
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    ...mapMutations([]),
    ...mapActions(['unavailableFeature']),
    go(path) {
      this.$router.push(path).catch(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
#side-menu {
  min-height: 100vh;
  background: white;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;

  .logo {
    height: 30px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .menu-item {
    color: var(--color-text-secondary);
    cursor: pointer;
    i,
    span {
      -webkit-transition: all 0.25s ease;
      -moz-transition: all 0.25s ease;
      -ms-transition: all 0.25s ease;
      -o-transition: all 0.25s ease;
      transition: all 0.25s ease;
    }
    i {
      position: absolute;
      font-size: 1.25rem;
    }
    span {
      padding-inline-start: 2.25rem;
      font-weight: 500;
    }
    &:hover,
    &.is-active {
      i {
        color: var(--color-primary);
      }
      span {
        color: var(--color-secondary);
      }
    }
    &.is-active {
      .shape {
        opacity: 1;
      }
    }
    .shape {
      border: thin solid var(--color-primary);
      background: var(--color-primary);
      border-radius: 4px;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>

<style lang="scss">
#side-menu {
}
</style>
