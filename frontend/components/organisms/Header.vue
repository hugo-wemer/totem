<template>
    <header class="header">
        <nav>
            <ul class="items">
                <li class="item">
                    <NuxtLink to="/">
                        <Logo />
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/">Início</NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/transferidos">Transferidos</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        display: grid;
        justify-content: center;
        nav {
            box-shadow: -1px 8px 26px 5px rgba(0, 0, 0, 0.12);
            background: color('primary', 'darkest');
            width: 308px;
            height: 50px;
            padding: 0 10px;
            border-radius: 35px;
            align-items: center;
            .items {
            display: grid;
            grid-template-columns: repeat(3, auto);
            align-items: center;
            justify-content: space-around;
            height: 100%;
            }
            .item a {
            color: color('primary');
            position: relative;
            font-weight: 500;
            &.nuxt-link-exact-active:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                background: white;
                left: 0;
                bottom: -6px;
            }
            }
        }
    }
</style>