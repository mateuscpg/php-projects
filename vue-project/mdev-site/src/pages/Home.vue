<template>
    <main>
        <div class="text-top">Conteúdo novo <b>toda semana</b></div>
        <a href="https://www.instagram.com/mateuscpg/" target="blank">
            <img src="../assets/Instagram Icon Clipart Hd PNG, Instagram  Icon, Instagram Icons, Icons Icons, Com Con PNG Image For Free Download.png" alt="inscreva-se" id="subscribe"/>
        </a>
        <div class="text-bottom">instagram.com/mateuscpg</div>

    </main>
</template>

<script>

export default{
  name: 'Home'
}
</script>

<style scoped>
main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}
.text-top{
    color: var(--color-text-light);
    font-size: 22px;
}

#subscribe{
    width: 250px;
}

.text-bottom{
    color: var(--color-text-light);
    font-size: 18px;
}
@media (min-width: 700px){
    #subscribe{
        width: 380px;
    }
}
</style>
