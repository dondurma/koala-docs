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
  <a class="contact-card" href="https://www.instagram.com/wylan.dev" target="_blank">
    <span class="contact-icon">📷</span>
    <span class="contact-name">Instagram</span>
    <span class="contact-value">@wylan.dev</span>
  </a>
  <a class="contact-card" href="./wechat-official-account">
    <span class="contact-icon">💬</span>
    <span class="contact-name">微信公众号</span>
    <span class="contact-value">点击查看</span>
  </a>
  <a class="contact-card" href="https://v.douyin.com/ptXn8yxX1I8/" target="_blank">
    <span class="contact-icon">🎵</span>
    <span class="contact-name">抖音</span>
    <span class="contact-value">点击访问</span>
  </a>
</div>

## 可以直接找我

考拉记账由我一个人开发和维护。App Store 上的评价我看到了也不一定能回复到你，问题容易悬着，所以遇到下面这些情况，建议直接用上面的邮箱或社交账号找我：

- 数据看起来不对、同步卡住、账单导入失败
- 登录、会员、恢复购买异常
- 有想吐槽的地方，或者某个操作让你觉得别扭

## 反馈时附上这些

- 机型和系统版本
- App 版本号
- 出问题的操作步骤（有截图或录屏更好）
- 同步问题请说明是否已登录、是否多设备

邮件和私信我都会逐条看。处理可能不会很快，但不会不处理；如果隔了很久没动静，直接再发一封催我——多半是漏看了。

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

**最后更新**：2026年11月
