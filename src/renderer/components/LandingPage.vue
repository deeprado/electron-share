<template>
  <section class="page">
    <div class="info">
      <div class="info__attr">
        <img :src="user.avatar_url">
      </div>
      <div class="info__content">
        <h3>{{ user.login }}</h3>
        <p>
          这是一名程序员
        </p>
        <div class="info__content--link">
          <a href="about">
            关于我
          </a>
          <a href="works">
            作品
          </a>
          <a :href="user.html_url">
            github
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: {SystemInformation},
    data () {
      return {
        user: {}
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    },
    async mounted () {
      this.$loading()
      const httpParams = {
        url: this.$api.users,
        path: {user: 'HuaRongSAO', repos: 'talib-document'},
        method: 'get'
      }
      const {data} = await this.$http(httpParams)
      console.log(data)
      this.user = data
    }
  }
</script>

<style lang="less">
  .page {
    width: 100%;
  }

  .info {
    width: 600px;
    padding: 15px;
    margin: 0 auto;
    background: #fff;
    &__attr {
      width: 100px;
      height: 100px;
      margin: -80px auto 0;
      border: 1px solid #eee;
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
        a {
          display: block;
          padding: 10px 30px;
          text-decoration: none;
          color: #333;
          &:hover {
            color: salmon;
          }
        }
      }
    }
  }
</style>
