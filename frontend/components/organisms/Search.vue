<template>
    <div class="search">
        <form action="/action_page.php" method="get"> 
            <input class="input" type="text" placeholder="Busque por um paciente" name="text">
            <fa class="icon" icon="search"/>
            <button class="button" type="submit">Procurar</button>
        </form>
    </div>
</template>


<style lang="scss" scoped>
    .search{
        padding: 0.3rem;
        background: color(primary, darkest);
        height: 50px;
        width: 350px;
        top: 0;
        display: grid;
        align-items: center;
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.16);
        border-radius: 30px;
    }
    .input{
        height: 40px;
        padding: 10px;
        width: 230px;
        border-radius: 20px 0px 0px 20px;
    }
    .button{
        height: 30px;
        background: color(primary, darkest);
        color: color(primary, lightest);
        margin-left: 2px;
        cursor: pointer;
    }
    .icon {
        color: color(primary, lightest);
        margin-left: 4px;
    }
</style>