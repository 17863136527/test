function siteCtrl(){
    const btn_1=document.getElementById('sitebtn_1')
    const btn_2=document.getElementById('sitebtn_2')
    const site=document.getElementById('site')
    const cover=document.getElementById('sitecover')
    const state=btn_1.innerHTML=='点击收起'
    if(state){
        site.style.height='300px';
        cover.style.display='block'
        btn_1.innerHTML='点击展开';
        btn_2.innerHTML='点击展开';
    }
    else{
        site.style.height='auto';
        cover.style.display='none';
        btn_1.innerHTML='点击收起';
        btn_2.innerHTML='点击收起';
    }
}

function playmusic(){
    const audio=document.getElementById('bgmusic')
    if(audio.paused){
        audio.play()
    }
    else{
        audio.pause()
    }
}