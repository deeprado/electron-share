<template>
  <section class="index" style="">
    <div class="index-info">
      <div class="index-info__attr">
        <img
          :src="avatarPng"
          v-real-img="github.avatar_url"
          default-img="https://hxkj.vip/demo/vueImgOnerror/img/logo.16af1ba4.png"
        />
      </div>
      <div class="index-info__content">
        <h3 class="index-info__name">{{ github.login }}</h3>
        <p class="index-info__des">{{ github.bio }}</p>
        <div class="index-info__content--link">
          <router-link :to="{ name: 'home' }">
            首页
          </router-link>
          <router-link to="about">
            统计
          </router-link>
          <router-link :to="{ name: 'cheat' }">
            <Icon class="index-icon__star" type="md-thumbs-up" />
          </router-link>
        </div>
        <div class="index-info__content--link">
          <router-link :to="{ name: 'search' }">
            <Icon type="ios-search-outline" class="index-icon__search" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      avatarPng: require('@/assets/avatar.png'),
      defaultImg: 'this.src="' + require('@/assets/avatar.png') + '"',
    }
  },
  methods: {
    open(link) {},
  },
  computed: {
    github() {
      return this.$store.getters.github
    },
  },
}
</script>

<style lang="less">
.index {
  width: 100%;
  display: flex;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  background: url('~@/assets/bg.jpg') center center no-repeat;

  &-info {
    width: 600px;
    padding: 15px;
    margin: 0 auto;
    background: 'green';

    &__name {
      margin: 15px 0;
      font-size: 20px;
      color: #fff;
    }

    &__des {
      margin: 15px 0;
      color: #fff;
    }

    &__attr {
      width: 100px;
      height: 100px;
      margin: auto;
      border: 1px solid #eee;
      border-radius: 50px;
      overflow: hidden;
      display: flex;

      img {
        width: 100%;
        height: 100%;
        z-index: 9;
      }
    }

    &__content {
      text-align: center;

      &--link {
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        a,
        span {
          align-items: center;
          display: block;
          padding: 10px 30px;
          text-decoration: none;
          color: #fff;
          cursor: pointer;
          font-size: 20px;

          &:hover {
            color: salmon;
          }
        }
      }
    }
  }

  &-icon__star {
    font-size: 30px;

    &.active {
      color: #ff0000;
    }
  }

  &-icon__search {
    font-size: 30px;

    &.active {
      color: #ff0000;
    }
  }
}
</style>
