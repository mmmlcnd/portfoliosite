// ページの読み込みが完了したら実行
document.addEventListener("DOMContentLoaded", function () {

    // アニメーションさせたい要素をすべて取得
    const animatedItems = document.querySelectorAll('.gitem');
  
    // IntersectionObserverのコールバック関数
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }
  
    // IntersectionObserverのオプション設定
    const observerOptions = {
      threshold: 0.1
    };
  
    // IntersectionObserverを作成
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    // 各要素の監視を開始
    animatedItems.forEach(item => {
      observer.observe(item);
    });
  
  });
  