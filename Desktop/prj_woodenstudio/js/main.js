console.log("JavaScriptの動作確認");

// 処理に必要な要素の取得＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// ハンバーガーメニューの要素をJavaScriptでHTMLから取得する
// モバイルナビゲーションの要素をJavaScriptでHTMLから取得する

// ここまで＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// 実際の処理＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// ハンバーガーメニューがクリックされたら
// モバイルナビゲーションにactiveクラスをつける

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

const hamburger = document.getElementById("hamburger")
const mobileNav = document.getElementById("mobile-nav")

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    mobileNav.classList.toggle('active')
})

document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// gsap animation
// ヒーローエリア
const tl = gsap.timeline();
tl
  .from(".hero", {
    opacity: 0,
    duration: 0.8
  })
  .from(".hero__title", {
    opacity: 0,
    y: 40,
    duration: 0.8
  }, "-=0.3");

// 商品ラインナップ
gsap.from(".product-link", {
  scrollTrigger: {
    trigger: ".product",
    start: "top 20%",
    // markers: true
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out"
});