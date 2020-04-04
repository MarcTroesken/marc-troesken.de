<template>
    <div>
        <section class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-16 text-grey-darkest">
            <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
                <div>Full-stack web developer &amp; Software Engineer</div>
                <div class="text-red">Welcome to my website</div>
            </div>
            <div class="mt-8 sm:mt-0 sm:w-2/5">
                <img class="mx-auto sm:mx-0" src="@/assets/images/coder.svg" alt="Coding Image">
            </div>
        </section>

        <section class="container-inner mx-auto">
            <p class="text-xl text-red-darkest">
                Hi there! I'm Marc. I love programming and developing web applications.
                I enjoy working with <a class="no-underline text-red" href="https://laravel.com">Laravel PHP</a> and <a class="no-underline text-red" href="https://adonisjs.com/">Adonis JS</a> on backend projects, on the frontend
                I use <a class="no-underline text-red" href="https://vuejs.org/">Vue.js</a> and <a class="no-underline text-red" href="https://tailwindcss.com/">Tailwind CSS</a> for styling.
            </p>
            <div class="flex justify-between items-center py-16">
                <div class="w-full sm:w-1/2 mr-8 p-6">
                    <img src="@/assets/images/vue.svg" alt="Vue JS Coding">
                </div>
                <div class="w-1/2 justify-end">
                    <img src="@/assets/images/editor.svg" alt="Editor Coding">
                </div>
            </div>
        </section>

        <section class="container-inner mx-auto text-xl border-gray-500 border-b border-t py-16 mb-16 relative">
            <h3 class="font-bold mb-6 text-grey-darkest">That is me:</h3>
            <div class="flex flex-col sm:flex-row justify-between items-center">
                <div>
                    <img class="w-32 rounded-full mb-8 lg:mb-0" src="@/assets/images/me.jpg" alt="Avatar">
                </div>
                <div class="flex-1 text-lg sm:text-xl ml-6 text-red-darkest">
                    So this is me. Marc. 33 years old. Living in Erlangen, Germany. If you want to know me more, just get in touch ;)
                </div>
            </div>

        </section>

        <div class="contact-me container-inner mx-auto text-xl pb-4 mb-4">
            <h3 class="font-bold mb-6 text-grey-darkest">Contact me:</h3>
            <div class="text-lg sm:text-xl mb-16 text-red-darkest">
                If you want to get in touch with me for any business related things or to ask me anything, feel free to <a class="no-underline text-red" href="mailto:m.troesken@mail.de">email me</a>.
                I’ll try to respond as soon as I can.
            </div>
        </div>
    </div>
</template>
