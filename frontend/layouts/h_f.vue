<template>
  <div class="pages-layout">
    <Header />
    <Container>
      <Nuxt />
    </Container>
    <clientOnly>
        <notifications position="bottom center" classes="notifications" :max="1" />
    </clientOnly>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.pages-layout {
  margin-top: 2.313rem;
  display: grid;
  grid-gap: 3.75rem;
  .container {
    padding-bottom: 6.75rem;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    position: fixed;
  }
}
</style>
