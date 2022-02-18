<template>
  <el-col id="side-menu">
    <div class="mb-6 is-full-width" @click="go('/')">
      <el-row type="flex" justify="center">
        <img class="p-2 logo hidden-sm-and-down" alt="Logo" src="@/assets/neokli-logo.png" />
        <img class="p-2 logo hidden-md-and-up" alt="Logo" src="@/assets/neokli-small-logo.png" />
      </el-row>
    </div>
    <div class="is-flex-grow-1">
      <el-row class="menu-item-container px-4 mb-3" type="flex" align="middle" v-for="(v, k) in menu" :key="k">
        <div class="menu-item" :class="v.name === $route.name ? 'is-active' : ''" @click="go(v.path)">
          <el-row class="menu-contents" type="flex" align="middle">
            <i :class="v.icon"></i>
            <span class="hidden-sm-and-down">{{ v.name }}</span>
          </el-row>
          <div class="shape"></div>
        </div>
      </el-row>
    </div>
    <div>
      <el-row class="menu-item-container px-4 mb-3" type="flex" align="middle">
        <div class="menu-item" :class="'Paramètres' === $route.name ? 'is-active' : ''" @click="go('settings')">
          <el-row class="menu-contents" type="flex" align="middle">
            <i class="fal fa-cog"></i>
            <span class="hidden-sm-and-down">Paramètres</span>
          </el-row>
          <div class="shape"></div>
        </div>
      </el-row>
      <el-row class="menu-item-container px-4 mb-3" type="flex" align="middle">
        <div class="menu-item" @click="unavailableFeature()">
          <el-row class="menu-contents" type="flex" align="middle">
            <i class="fal fa-sign-out"></i>
            <span class="hidden-sm-and-down">Déconnexion</span>
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
@media screen and (max-width: 992px) {
  #side-menu {
    width: 56px !important;
    .menu-item-container {
      justify-content: center !important;
      .menu-item {
        padding: 0.75rem 0 !important;
        .menu-contents {
          justify-content: center !important;
          i {
            position: relative !important;
          }
        }
      }
    }
  }
}
#side-menu {
  width: 220px;
  min-height: 100vh;
  background: white;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  transition: all 0.25s  ease;

  .logo {
    height: 30px;
    cursor: pointer;
    transition: all 0.5s  ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .menu-item {
    color: var(--color-text-secondary);
    cursor: pointer;
    padding: 0.75rem;
    transition: all 0.25s ease-in-out;
    .menu-contents {
      min-height: 1rem;
    }
    i,
    span {
      transition: all 0.25s  ease-in-out;
      white-space: nowrap;
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
