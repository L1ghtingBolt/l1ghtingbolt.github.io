---
setup: import Layout from '../../layouts/Project.astro'
title: NullBOT
desc: A complex Discord bot to convert text to ASCII art, using FIGlet
permalink: /projects/nullbot
---
<div class="text-center flex flex-col items-center">
    <h1 class="text-xl text-gray-400">OpenSource Discord bot that uses FIGlet to conver text to ASCII art.</h1>
    <p class="mt-6 w-[70vw]">
        Even supports custom font importing using a command!
    </p>
    <code>
        v!ascii [font] [text]
    </code>
    <code>
        v!loadfont [name] [ATTACHMENT: .FLF font file]
    </code>
    <img src="/assets/nullbot.png" class="w-[50vw] mt-5"/>
    <a href="https://l1ghtingbolt.github.io/bluonkotype"  target="_blank" class="a">Try it!</a>
</div>
