<template>
    <b-row class="justify-content-md-center">
        <b-card class="text-center">
            <h5>
                Тестовое задание для frontend-разработчика
            </h5>
            <p class="text-left">
                Проект разработан с использованием библиотек Vue/Vuex/Vue-router.
            </p>
            <p class="text-left">
                Используется асинхронная подгрузка компонентов в роутере, то есть данные пождгружаются только после перехода на страницу
            </p>
            <ul class="list-unstyled text-left">
                <dt class="col-md-4">
                    <router-link to="/fractions">Дроби</router-link>
                </dt>
                <dd class="col-md-8">
                    Используется готовая библиотека для работы с дробями, в принципе можно было самому реализовать логику, но не увидел в этом смысла.
                </dd>
                <dt class="col-md-4">
                    <router-link to="/websocket">
                        Вебсокеты
                    </router-link>
                </dt>
                <dd class="col-md-8">
                    Реализовано удаление комментариев через события вебсокет используя глобальное хранилище Vuex.
                    Реализовал автоматический реконнект и подписку и удаление обработчиков.
                    Для работы использовал готовую библиотеку <b>vue-native-websockets</b>.
                </dd>
            </ul>
        </b-card>
    </b-row>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>

</style>