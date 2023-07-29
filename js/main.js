'use strict';

{
  var menus = new Vue({
    el: '#AppMenu',
    data: {
      menus: [
        ['TOP', 'https://satop0.github.io/'],
        ['SITE', 'https://satop0.github.io/site'],
        ['SELF MADE', 'https://satop0.github.io/selfmade'],
        ['SAMPLE', '#'],
      ]
    },
  });

  var menus2 = new Vue({
    el: '#AppMenu2',
    data: {
      menus: [
        ['TOP', 'https://satop0.github.io/'],
        ['SITE', 'https://satop0.github.io/site'],
        ['SELF MADE', 'https://satop0.github.io/selfmade'],
        ['SAMPLE', '#'],
      ]
    },
  });

  var link = new Vue({
    el: '#AppLink',
    data: {
      urls: [
        ['おみくじ', 'https://satop0.github.io/page/omikuji'],
        ['ビンゴシート', 'https://satop0.github.io/page/bingo/'],
        ['カレンダー', 'https://satop0.github.io/page/calender/'],
        ['ストップウォッチ', 'https://satop0.github.io/page/stopwatch/'],
        ['タイピングゲーム', 'https://satop0.github.io/page/typinggame/'],
        ['三択クイズ', 'https://satop0.github.io/page/quizapp/'],
        ['スライドショー', 'https://satop0.github.io/page/slideshow/'],
        ['スロット', 'https://satop0.github.io/page/slotmachine/'],
        ['ナンバーゲーム', 'https://satop0.github.io/page/numbersgame/'],
        ['モーダルウィンドウ', 'https://satop0.github.io/page/modalwindow/'],
        ['タブメニュー', 'https://satop0.github.io/page/tabmenu/'],
        ['チャット風デザイン', 'https://satop0.github.io/page/cssbubble/'],
        ['ハートアニメーション', 'https://satop0.github.io/page/heartanimation/'],
        ['ハンバーガーメニュー', 'https://satop0.github.io/page/hamburgermenu/'],
        ['アコーディオンUI', 'https://satop0.github.io/page/accordionjs'],
        ['交差検知', 'https://satop0.github.io/page/intersectionobserver'],
        ['Todoリスト(Vue)', 'https://satop0.github.io/page/vue1/'],
        ['Likeカウンター(Vue)', 'https://satop0.github.io/page/vue2/'],
      ]
    }
  });

  var link_SITE = new Vue({
    el: '#AppLinkSite',
    data: {
      urls: [
        ['ホームページサンプル1', 'https://satop0.github.io/page/HPsample/'],
        ['ホームページサンプル2', 'https://satop0.github.io/page/HPsample2/'],
      ]
    }
  });

  var link_SITE = new Vue({
    el: '#AppLinkSelfmade',
    data: {
      urls: [
        ['画像圧縮(vue.js)', 'https://satop0.github.io/page/imagecompress/'],
      ]
    }
  });
  
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay')
  const close = document.getElementById('close');
  console.log("aaa")

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}
