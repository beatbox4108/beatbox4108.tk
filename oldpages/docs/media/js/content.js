function load_header(){
    document.querySelector(".content-js[data-content-type=\"footer\"]").innerHTML=`
    <section>
    <section>
        <div class="ninja_onebutton">
            <script type="text/javascript">
            //<![CDATA[
            (function(d){
            if(typeof(window.NINJA_CO_JP_ONETAG_BUTTON_f3e8c789623f68cca067cd2d06a1d48c)=='undefined'){
                document.write("<sc"+"ript type='text\/javascript' src='//omt.shinobi.jp\/b\/f3e8c789623f68cca067cd2d06a1d48c'><\/sc"+"ript>");
            }else{
                window.NINJA_CO_JP_ONETAG_BUTTON_f3e8c789623f68cca067cd2d06a1d48c.ONETAGButton_Load();}
            })(document);
            //]]>
            </script><span class="ninja_onebutton_hidden" style="display:none;"></span><span style="display:none;" class="ninja_onebutton_hidden"></span>
        </div>           
    </section>
    <section>
        <table style="margin: auto;">
            <tr><th colspan="6">beatbox4108</th></tr>
            <tr><td colspan="3"><a href="http://www.beatbox4108.tk/index.html">TopPage</a></td><td colspan="3"><a href="http://wtool.beatbox4108.tk/index.html">WebToolbox</a></td></tr>
            <tr><th colspan="6">WebToolbox</th></tr>
            <tr><td colspan="6"><a href="http://wtool.beatbox4108.tk/index.html">TopPage</a></td></tr>
            <tr>
                <td colspan="2"><a href="http://wtool.beatbox4108.tk/tageraser.html">HTMLTagEraser</a></td>
                <td colspan="2"><a href="http://wtool.beatbox4108.tk/mwc.html">Microwave wattage transducer</a></td>
                <td colspan="2"><a href="http://wtool.beatbox4108.tk/textedit.html">Memo</a></td>
            </tr>
            <tr>
                <td colspan="6"><a href="http://beatbox4108.github.io/bwctc/index.html"><s>World Clock</s></a></td>
            </tr>
        </table>
    </section>
    <section>
        <small>&copy;2021 beatbox4108 All rights reserved.</small>
    </section>
</section>
`
}

document.addEventListener("DOMContentLoaded",()=>{
    load_header()
})
