var siteurl = window.location.href;
var imgurl = "https://img30.360buyimg.com/pop/jfs/t1/184790/13/8055/33808/60bfb677E7f042349/d25574d9c2ea6525.png";
var imghtml = `<div style="position: fixed;top: 0;left: 0;bottom: 0;right: 0;background-color: rgba(0, 0, 0, .7);content: 0;z-index: 99999999999999">
<div style=" display: flex; width: 100%; height: 100vh; margin: 0 auto; align-items: center; justify-content: center; ">	
<div style="width: 300px; height: 400px;">
    <img src="${imgurl}" style="width: 100%;height: 100%;" alt="" srcset="">
</div>		
</div>
</div>`;
if(siteurl.indexOf('play') > -1 ){
    $("body").append(imghtml);  
}