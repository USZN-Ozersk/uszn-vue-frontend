<template>
    <div class="ml-5 mt-2">
        
        <div id="pos-banner-lock"> 
            <div class="pos-banner b2"> 
                <div class="b2__content"> 
                    <div class="pos-banner__text b2__text"> Расскажите о Вашей проблеме - решим ее вместе! 
                    </div> 
                    <div class="b2__logo-wrap"> <img src="https://pos.gosuslugi.ru/bin/banner/logo.svg" alt="" class="b2__logo"> </div> 
                    <!--Hint--> <div class="pos-banner__hint-icon b2__hint-icon pos-banner__hint-icon_center-right"> <span class="pos-banner__hint-icon-symbol">?</span> </div> 
                    <div class="pos-banner__hint-message"> Направляемые сообщения не являются обращениями граждан, рассматриваемыми в порядке, установленном Федеральным законом от 2 мая 2006 г. № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации». </div> <!--/Hint--> </div> 
                    <div class="b2__bg-wrap"> <img src="https://pos.gosuslugi.ru/bin/banner/banner-bg-2.svg" alt="" class="b2__bg"> </div> <div class="pos-banner__button-wrap b2__button-wrap"> <!-- pos-banner-btn не удалять; другие классы не добавлять --> <button type="button" class="pos-banner-btn" id="js-show-iframe-wrapper">Написать</button> </div> 
                </div> 
            </div> 
    </div>
</template>

<script>

export default {
    methods: {
        Widget: function (src, opaId, isFz59) {
            let fz59 = isFz59 ? 'true' : 'false';
            src += '?opaId=' + opaId + '&fz59=' + fz59;

            let div = document.createElement('div');
            let header = document.createElement('header');
            let overlay = document.createElement('div');
            let body = document.getElementsByTagName('body')[0];

            //  css
            div.style.background = 'white';
            div.style.position = 'fixed';
            div.style.maxWidth = '620px';
            div.style.maxHeight = '768px';
            div.style.margin = 'auto';
            div.style.top = '0';
            div.style.bottom = '0';
            div.style.left = '0';
            div.style.right = '0';
            div.style.zIndex = '999999999';

            overlay.style.position = 'fixed';
            overlay.style.zIndex = '999999998';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.backgroundColor = 'rgba(0,0,0,.3)';

            // attr
            div.setAttribute('id', 'js-iframe-wrapper');
            overlay.setAttribute('id', 'js-iframe-overlay');
            let iframe = document.createElement('iframe');

            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = '0';

            iframe.setAttribute('src', src);
            iframe.setAttribute('id', 'js-iframe-widget');
            iframe.referrerPolicy = 'unsafe-url';

            div.appendChild(iframe);
            header.innerHTML = 'Новое обращение';

            function destroy() {
                let body = document.getElementsByTagName('body')[0];
                let wOverlay = document.getElementById('js-iframe-overlay');
                let wWrapper = document.getElementById('js-iframe-wrapper');
                body.removeChild(wWrapper);
                body.removeChild(wOverlay);
            } 

            function create() {
                body.appendChild(div);
                body.appendChild(overlay);
            }

            function closeWidget(){
                destroy()
            }

            function showWidget(){
                create()
            }

            const openWidgetBtn = document.getElementById('js-show-iframe-wrapper');

            const openWidgetListener = function (e) {
                e.preventDefault();
                showWidget()
            };

            openWidgetBtn.addEventListener('click', openWidgetListener);

            openWidgetBtn.addEventListener('touchstart', function (e) {
                e.preventDefault();
                showWidget();
            });

            window.addEventListener('message', function(event) {
                if(event.data.close) {
                    closeWidget();
                }
            }, false);

    }
    },
   onload() {
       this.Widget("https://pos.gosuslugi.ru/form", 218620);
   }
}
</script>

<style> 
#pos-banner-lock{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:100%}#pos-banner-lock .pos-banner{position:relative;width:-webkit-min-content;width:-moz-min-content;width:min-content;max-width:100%;min-width:220px;font-family:ALS Ekibastuz,sans-serif;box-shadow:0 2px 10px 2px rgba(0,0,0,.25);box-sizing:border-box}#pos-banner-lock .pos-banner *{box-sizing:border-box}#pos-banner-lock .pos-banner__text{font-style:normal;font-weight:700;font-size:16px;line-height:21px;color:#0066b3}#pos-banner-lock .pos-banner__button-wrap{text-align:center}#pos-banner-lock .pos-banner .pos-banner-btn{width:190px;max-width:100%;padding:9px;border:none;outline:0;border-radius:4px;background:#0066b3;color:#fff;font-family:Helvetica Neue,sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:19px}#pos-banner-lock .pos-banner .pos-banner-btn:active,#pos-banner-lock .pos-banner .pos-banner-btn:focus,#pos-banner-lock .pos-banner .pos-banner-btn:hover{border:none;outline:0;cursor:pointer;background:#005ca1}#pos-banner-lock .pos-banner__hint-icon{position:absolute;top:16px;right:16px;display:flex;justify-content:center;align-items:center;width:22px;height:22px;background-color:#f5f5f5;text-align:center;font-family:Helvetica Neue,sans-serif;font-size:12px;font-weight:700;color:#3e3e3e;border:1px solid gray;border-radius:50%;cursor:pointer}#pos-banner-lock .pos-banner__hint-icon:hover~.pos-banner__hint-message{display:block;-webkit-animation:fadeInFromNone .5s ease-out;animation:fadeInFromNone .5s ease-out}#pos-banner-lock .pos-banner__hint-icon_center-right{top:initial;right:16px;bottom:16px;left:initial}#pos-banner-lock .pos-banner__hint-icon_center-right~.pos-banner__hint-message{top:100%;right:calc(16px - 3px);bottom:initial;left:initial}#pos-banner-lock .pos-banner__hint-icon_center-right~.pos-banner__hint-message:after{content:"";position:absolute;top:-5px;right:10px;bottom:initial;left:initial}#pos-banner-lock .pos-banner__hint-icon_center-left{top:initial;right:initial;bottom:16px;left:16px}#pos-banner-lock .pos-banner__hint-icon_center-left~.pos-banner__hint-message{top:100%;right:initial;bottom:initial;left:calc(16px - 3px)}#pos-banner-lock .pos-banner__hint-icon_center-left~.pos-banner__hint-message:after{content:"";position:absolute;top:-5px;right:initial;bottom:initial;left:10px}#pos-banner-lock .pos-banner__hint-icon_bottom-right{top:initial;right:16px;bottom:16px;left:initial}#pos-banner-lock .pos-banner__hint-icon_bottom-right~.pos-banner__hint-message{top:initial;right:calc(16px - 3px);bottom:calc(22px + 16px + 20px);left:initial}#pos-banner-lock .pos-banner__hint-icon_bottom-right~.pos-banner__hint-message:after{content:"";position:absolute;top:initial;right:10px;bottom:-5px;left:initial}#pos-banner-lock .pos-banner__hint-icon_bottom-left{top:initial;right:initial;bottom:16px;left:16px}#pos-banner-lock .pos-banner__hint-icon_bottom-left~.pos-banner__hint-message{top:initial;right:initial;bottom:calc(22px + 16px + 20px);left:calc(16px - 3px)}#pos-banner-lock .pos-banner__hint-icon_bottom-left~.pos-banner__hint-message:after{content:"";position:absolute;top:initial;right:initial;bottom:-5px;left:10px}#pos-banner-lock .pos-banner__hint-icon_top-left{top:16px;right:initial;bottom:initial;left:16px}#pos-banner-lock .pos-banner__hint-icon_top-left~.pos-banner__hint-message{top:calc(22px + 16px + 20px);right:initial;bottom:initial;left:calc(16px - 3px)}#pos-banner-lock .pos-banner__hint-icon_top-left~.pos-banner__hint-message:after{content:"";position:absolute;top:-5px;right:initial;bottom:initial;left:10px}#pos-banner-lock .pos-banner__hint-icon-symbol{background-color:transparent;font-size:14px;font-weight:400}#pos-banner-lock .pos-banner__hint-message{position:absolute;top:calc(22px + 16px + 20px);right:calc(16px - 3px);display:none;width:85%;padding:10px;background-color:#fff;color:#3e3e3e;font-family:Arial,sans-serif;font-size:11px;font-weight:400;line-height:1.2;box-shadow:0 0 6px rgba(0,0,0,.2)}#pos-banner-lock .pos-banner__hint-message:after{content:"";position:absolute;top:-5px;right:10px;width:10px;height:10px;background:#fff;border-radius:1px;transform:matrix(-.7,-.8,.63,-.7,0,0)}@-webkit-keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@font-face{font-family:"Als Ekibastuz Heavy";src:url('https://pos.gosuslugi.ru/bin/banner/als_ekibastuz_heavy-webfont.woff2') format("woff2"),url('https://pos.gosuslugi.ru/bin/banner/als_ekibastuz_heavy-webfont.woff') format("woff");font-weight:400;font-style:normal} 
#pos-banner-lock .b2{display:grid;grid-template-columns:1fr;grid-template-rows:minmax(calc(284px - 92px - 75px),auto) 92px 75px;background:#fff}#pos-banner-lock .b2__content{position:relative;display:flex;align-items:flex-start;justify-content:space-between;padding:16px 16px 16px 16px}#pos-banner-lock .b2__logo{width:43px;margin-left:6px}#pos-banner-lock .b2__bg-wrap{width:100%;overflow:hidden}#pos-banner-lock .b2__bg{display:block;height:100%}#pos-banner-lock .b2__button-wrap{padding:18px 16px 16px 16px;text-align:center} 
</style>