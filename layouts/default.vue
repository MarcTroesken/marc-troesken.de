<template>
    <div class="font-sans text-grey-dark leading-normal flex flex-col min-h-screen">
        <header class="border-t-14 border-red">
            <nav class="container mx-auto flex justify-between items-center py-8">
                <a class="no-underline text-grey-darkest" href="/">
                    <h1 class="logo font-4xl"><span class="text-red lowercase leading-tight">Marc</span><span class="lowercase leading-tight">Tr&ouml;sken</span></h1>
                </a>
                <ul class="uppercase tracking-wide font-bold flex items-center list-reset">
                    <li class="mr-8">
                        <a href="https://github.com/MarcTroesken" target="_blank" class="text-grey-darkest hover:text-grey-dark no-underline">Github</a>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="flex-grow">
            <nuxt />
        </div>

        <footer class="bg-red text-white">
            <div class="container mx-auto flex items-center justify-between py-8">
                <div>Copyright 2019. All rights reserved</div>
                <ul class="list-reset flex items-center">
                    <li class="mr-8">
                        <a class="text-white" target="_blank" href="https://www.facebook.com/marc.troesken"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li class="mr-8">
                        <a class="text-white" target="_blank" href="https://twitter.com/MarcTroesken"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li class="mr-8">
                        <a class="text-white" target="_blank" href="https://www.twitch.tv/mulibu2k"><i class="fa fa-twitch" aria-hidden="true"></i></a>
                    </li>
                    <li class="mr-8">
                        <a class="text-white" target="_blank" href="https://www.xing.com/profile/Marc_Troesken"><i class="fa fa-xing" aria-hidden="true"></i></a>
                    </li>
                    <li class="mr-8">
                        <a class="text-white" target="_blank" href="https://github.com/MarcTroesken"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>
