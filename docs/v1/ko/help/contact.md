# 문의하기

문의 사항이나 제안 사항이 있으시면 아래 방법으로 연락해 주세요.

<div class="contact-cards">
  <a class="contact-card" href="mailto:ruanweidev@163.com">
    <span class="contact-icon">📧</span>
    <span class="contact-name">이메일</span>
    <span class="contact-value">ruanweidev@163.com</span>
  </a>
  <a class="contact-card" href="https://xhslink.com/m/3CgkJlri999" target="_blank">
    <span class="contact-icon">🍠</span>
    <span class="contact-name">샤오홍슈（REDnote）</span>
    <span class="contact-value">방문하기</span>
  </a>
  <a class="contact-card" href="https://www.instagram.com/wylan.dev" target="_blank">
    <span class="contact-icon">📷</span>
    <span class="contact-name">Instagram</span>
    <span class="contact-value">@wylan.dev</span>
  </a>
</div>

## 개발자에게 직접 연락하기

코알라 가계부는 혼자 개발·운영하고 있습니다. App Store의 평가에는 답장을 드릴 수 없어서 문제가 그대로 남기 쉽습니다. 아래와 같은 경우에는 위의 이메일이나 SNS로 직접 연락해 주세요.

- 데이터가 이상하거나, 동기화가 멈추거나, 내역 가져오기가 실패하는 경우
- 로그인, 멤버십, 구매 복원 관련 문제
- 불만이 있거나, 특정 동작이 불편한 경우

## 연락할 때 함께 보내주세요

- 기기 모델과 OS 버전
- 앱 버전
- 문제가 발생한 조작 순서(스크린샷이나 화면 녹화가 있으면 더 좋습니다)
- 동기화 문제는 로그인 여부와 여러 기기 사용 여부

이메일과 DM은 모두 하나씩 확인합니다. 처리가 빠르지 않을 수 있지만, 그냥 넘기지는 않습니다. 오랫동안 답이 없다면 다시 한 번 보내주세요(제가 놓쳤을 가능성이 큽니다).

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

**마지막 업데이트**: 2026년 11월
