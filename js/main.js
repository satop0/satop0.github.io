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
        ['おみくじ', 'https://satop0.github.io/omikuji/'],
        ['ビンゴシート', 'https://satop0.github.io/bingo/'],
        ['カレンダー', 'https://satop0.github.io/calender/'],
        ['ストップウォッチ', 'https://satop0.github.io/stopwatch/'],
        ['タイピングゲーム', 'https://satop0.github.io/typinggame/'],
        ['三択クイズ', 'https://satop0.github.io/quizapp/'],
        ['スライドショー', 'https://satop0.github.io/slideshow/'],
        ['スロット', 'https://satop0.github.io/slotmachine/'],
        ['ナンバーゲーム', 'https://satop0.github.io/numbersgame/'],
        ['モーダルウィンドウ', 'https://satop0.github.io/modalwindow/'],
        ['タブメニュー', 'https://satop0.github.io/tabmenu/'],
        ['チャット風デザイン', 'https://satop0.github.io/cssbubble/'],
        ['ハートアニメーション', 'https://satop0.github.io/heartanimation/'],
        ['ハンバーガーメニュー', 'https://satop0.github.io/hamburgermenu/'],
        ['アコーディオンUI', 'https://satop0.github.io/accordionjs'],
        ['交差検知', 'https://satop0.github.io/intersectionobserver'],
        ['Todoリスト(Vue)', 'https://satop0.github.io/vue1/'],
        ['Likeカウンター(Vue)', 'https://satop0.github.io/vue2/'],
      ]
    }
  });

  var link_SITE = new Vue({
    el: '#AppLinkSite',
    data: {
      urls: [
        ['ホームページサンプル1', 'https://satop0.github.io/HPsample/'],
        ['ホームページサンプル2', 'https://satop0.github.io/HPsample2/'],
      ]
    }
  });

  var link_SITE = new Vue({
    el: '#AppLinkSelfmade',
    data: {
      urls: [
        ['画像圧縮(vue.js)', 'https://satop0.github.io/imagecompress/'],
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
