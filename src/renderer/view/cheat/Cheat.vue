<template>
  <div class="cheat">
    <Layout>
      <Header>
        <router-link :to="{ name: 'index' }">
          <span>返回</span>
        </router-link>
      </Header>
      <Content>
        <webview
          id="star"
          class="cheat-webview"
          src="https://github.com/deeprado?tab=stars"
        ></webview>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  mounted () {
    onload = () => {
      const webview = document.getElementById('star')
      // const indicator = document.querySelector('.indicator')

      const loadstart = () => {
        this.$loading()
      }

      const loadstop = () => {
        this.$close()
      }

      webview.addEventListener('did-start-loading', loadstart)
      webview.addEventListener('did-stop-loading', loadstop)
    }
    onload()
  }
}
</script>

<style lang="less">
.cheat {
  &-webview {
    width: 100vw;
    height: 100vh;
  }
}
.goback {
  font-size: 20px;
  color: blue;
}
</style>
