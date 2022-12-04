import{_ as e,c as t,o as a,a as o}from"./app.98b259d4.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Input Buffer","slug":"input-buffer","link":"#input-buffer","children":[]}],"relativePath":"faq/87.md","lastUpdated":1670155583000}'),i={name:"faq/87.md"},s=o('<h2 id="input-buffer" tabindex="-1">Input Buffer <a class="header-anchor" href="#input-buffer" aria-hidden="true">#</a></h2><p>tags: input buffer</p><p>As with all (I guess, almost all) action games with move animation (non-cancelable), when you have to press buttons quickly, there is an input buffer.</p><p>i.e. if you press an input, it will be queued and executed at the next opportunity. <em>(this is because the game wants you to do moves one after another but can&#39;t reasonably expect you to press a button perfectly on the frame after the last move has finished)</em></p><p>If HF is still doing the end of her last AB, if you input A again, the A will get executed as soon as the AB finishes</p><p>however,</p><ol><li>the input buffer doesn&#39;t have unlimited time, and</li><li>it can only queue 1 input (it feels like 1 to me, so let&#39;s go with that)</li></ol><p>what this means is</p><ol><li>if you input the A too early, it&#39;ll get queued and then expire before the last AB has finished, and so no A will get executed</li><li>if you input A and then B before the last AB has finished, the B will overwrite the A and you will get AB and then B</li></ol><p>this is true for other moves in this game too</p><p>you may find this on DA, whose ults have long, non-cancelable move animation</p><p>sometimes you can input something before the last DA ult has finished and it never gets executed (because it has expired)</p><p>thus, for hf for example, you should input A as close to the end of the last AB as possible</p><p>note that A has a very short animation and B has a very long animation, so you can input B right after A, but you must not do it such that A has not even started, because that would lead to B overwriting the A</p><div class="info custom-block"><p class="custom-block-title">Disclaimer:</p><p>this is based on imy&#39;s experience; it may not be 100% accurate, but it &quot;feels&quot; like how the game behaves</p></div><blockquote><p>This one needs some love.</p></blockquote>',16),n=[s];function l(u,h,r,p,d,f){return a(),t("div",null,n)}const b=e(i,[["render",l]]);export{m as __pageData,b as default};
