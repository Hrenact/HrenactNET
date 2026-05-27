<template>
    <div class="custom-404">
    <h1 class="code-404">404</h1>
    <p class="subtitle">o(TヘTo)</p>

    <div class="divider"></div>

    <p class="tip">
        <br>Looking for a translated page?
        <br>Sorry! It might just not be available!
        <br>
        <br>翻訳済みのページを探していますか？
        <br>すみません！ちょうどないかもしれません！
    </p>

    </div>

    <!-- 右下角的小猫 -->
    <pre class="cat">
Ciallo~ (∠・ω< )⌒☆
    </pre>
</template>

<style scoped>
.custom-404 {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 7.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.code-404 {
  font-size: 10rem;
  font-weight: 800;
  margin: 0;
  color: var(--vp-c-brand-1);
  margin: 2rem 0 0 0; 
}

.subtitle {
  margin: 5rem 0 0rem 0; 
  font-size: 1.2rem;
}

.divider {
  width: 100%;
  height: 2px;
  background: var(--vp-c-divider);
  margin: 1rem 0;
}

.tip {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

/* 小猫咪：固定在右下角 */
.cat {
  position: fixed;
  right: 50px;
  bottom: 5px;
  font-family: system-ui;
  font-size: 18px;
  line-height: 1;
  opacity: 0.9;

  /* 用 transform 制作轻微摆动动画 */
  animation: tail-wiggle 2.5s infinite ease-in-out;
}

/* 轻微摇动动画（整体微微左右晃） */
@keyframes tail-wiggle {
  0%   { transform: translateX(0px); }
  50%  { transform: translateX(4px); }
  100% { transform: translateX(0px); }
}
</style>