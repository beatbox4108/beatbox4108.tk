//header
const header=document.createElement("header")
header.classList.add("header","nav")
document.body.insertAdjacentElement("beforeend",header)
header.innerHTML=`<a class="header title item" data-order="1" href="/index.html">beatbox4108.tk</div>\
<a class="header navigation-item item" href="/index.html" data-order="2">Top</div>
<a class="header navigation-item item" href="/about.html" data-order="3">About</div>
<a class="header navigation-item item" href="/services/index.html" data-order="4">Services</div>`
const navigation=document.createElement("nav")
document.body.insertAdjacentElement("beforeend",navigation)
navigation.innerHTML=`
<a href="//www.beatbox4108.tk/index.html">Home</a><br>
<a href="//www.beatbox4108.tk/about.html">About</a><br>
<a href="//www.beatbox4108.tk/services/index.html">Services</a><br>
<details open>
    <summary>Webtoolbox</summary>
    <a href="//wtool.beatbox4108.tk/index.html">Top</a><br>
    <a href="//wtool.beatbox4108.tk/textedit.html">Memo</a><br>
    <a href="//wtool.beatbox4108.tk/tageraser.html">HTML Tag Eraser</a><hr>
    <a href="//wtool.beatbox4108.tk/index.html">see all tools</a>
</details>`
const footer=document.createElement("footer")
document.body.insertAdjacentElement("beforeend",footer)
footer.innerHTML=`
`
