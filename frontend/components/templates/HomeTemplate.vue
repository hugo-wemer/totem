<template>
    <div class="content">
        <div class="wrapper">
            <div class="search">
                <Search />
            </div>
            <div class="transfer">
                <TransferButton />
            </div>    
        </div>
        <div class="undone-lists">
            <SymptomaticList />
            <AsymptomaticList />
        </div>
        <div class="done-list">
            <Transfereds />
        </div>
  </div>
</template>

<style lang="scss" scoped>
.list {background-color: red;}
.wrapper {
    display: grid;
    justify-content: space-between;
    align-items: center;
    @include screen('small', 'medium'){
      grid-template-columns: 1fr; 
      grid-template-rows: 1fr 1fr; 
      justify-items: center;
      justify-content: center;
      }
}
.transfer {
    position: absolute;
    left: 70vw;
    @include screen('small', 'medium'){
      display: grid;
      position: relative;
      left: -50px;
      align-items: center;
      margin-top: 20px;
      
      }
    justify-content: center;
}
.undone-lists {
    display: grid;
    grid-template-columns: 1fr 1fr;
     @include screen('small', 'medium'){
      display: grid;
      grid-template-columns: 1fr;
      }
}

</style>