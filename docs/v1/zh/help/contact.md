# 联系我

如有任何问题或建议，欢迎通过以下方式联系我。

<div class="contact-cards">
  <a class="contact-card" href="mailto:ruanweidev@163.com">
    <span class="contact-icon">📧</span>
    <span class="contact-name">邮箱</span>
    <span class="contact-value">ruanweidev@163.com</span>
  </a>
  <a class="contact-card" href="https://xhslink.com/m/3CgkJlri999" target="_blank">
    <span class="contact-icon">🍠</span>
    <span class="contact-name">小红书</span>
    <span class="contact-value">点击访问</span>
  </a>
  <a class="contact-card" href="https://v.douyin.com/ptXn8yxX1I8/" target="_blank">
    <span class="contact-icon">🎵</span>
    <span class="contact-name">抖音</span>
    <span class="contact-value">点击访问</span>
  </a>
</div>

<style scoped>
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0 32px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-radius: 20px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.contact-card:hover {
  background-color: var(--vp-c-bg-soft-up, var(--vp-c-bg-soft));
  transform: translateY(-1px);
}

/* 牛皮纸 + 复古字体：倒角对齐主页导航卡片（2px）；其余主题保持 20px。
   注意：此处不可用 :global()，scoped 下 :global(X) Y 会被编译成 X，后代选择器 Y 丢失。 */
html.kraft.retro-font .contact-card {
  border-radius: 2px;
}

.contact-icon {
  font-size: 26px;
  line-height: 1;
  flex-shrink: 0;
}

.contact-name {
  font-weight: 600;
  flex-shrink: 0;
  min-width: 64px;
}

.contact-value {
  color: var(--vp-c-text-2);
  font-size: 0.92em;
  margin-left: auto;
  text-align: right;
}
</style>
