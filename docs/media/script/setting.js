function setfontsize(x){
    localStorage.setItem("fontsize",x)
    applysettings()
}
function applysettings(){
    const fontsize = localStorage.getItem("fontsize");
    if (fontsize){document.body.style.fontSize=fontsize+"em"}
}
applysettings()

function localStoragestat(s){
    if(! localStorage.getItem("setting_localstorageStat")){
        localStorage.setItem("setting_localstorageStat","accept")
    }
    if(s==="get"){
        return localStorage
    }
    localstorage.setItem("setting_localstorageStat",s)
}
function localstorage_delete(s){
    if(s.settings){
        localStorage.removeItem("fontsize")
        localStorage.removeItem("setting_localstorageStat")
    }
    if(s.apps){}
}