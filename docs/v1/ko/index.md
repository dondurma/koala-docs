## 가이드

### 내역 가져오기

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/01-template-bill-import-guide">
    <div :class="$style.title">템플릿 내역 가져오기(CSV)</div>
    <div :class="$style.desc">CSV 템플릿으로 가져오기</div>
  </a>
  <a :class="$style.card" href="./guide/02-wechat-bill-import-guide">
    <div :class="$style.title">WeChat 내역 가져오기</div>
    <div :class="$style.desc">CSV / Excel 지원</div>
  </a>
  <a :class="$style.card" href="./guide/03-alipay-bill-import-guide">
    <div :class="$style.title">Alipay 내역 가져오기</div>
    <div :class="$style.desc">CSV 형식</div>
  </a>
  <a :class="$style.card" href="./guide/07-pixiu-bill-import-guide">
    <div :class="$style.title">Pixiu 내역 가져오기</div>
    <div :class="$style.desc">CSV 형식</div>
  </a>
  <a :class="$style.card" href="./guide/08-icost-bill-import-guide">
    <div :class="$style.title">iCost 내역 가져오기</div>
    <div :class="$style.desc">Excel 지원(CSV 미지원)</div>
  </a>
</div>

### 기능 안내

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/04-multi-ledger-guide">
    <div :class="$style.title">다중 장부</div>
    <div :class="$style.desc">장부 생성, 전환, 데이터 분리</div>
  </a>
  <a :class="$style.card" href="./guide/05-exchange-rate-guide">
    <div :class="$style.title">환율</div>
    <div :class="$style.desc">기준 통화와 표시 규칙</div>
  </a>
  <a :class="$style.card" href="./guide/06-cloud-backup-guide">
    <div :class="$style.title">클라우드 백업 및 동기화</div>
    <div :class="$style.desc">로그인, 동기화, 복원</div>
  </a>
  <a :class="$style.card" href="./guide/09-bill-split-guide">
    <div :class="$style.title">거래 분할 안내</div>
    <div :class="$style.desc">한 건을 여러 하위 거래로 분할</div>
  </a>
  <a :class="$style.card" href="./guide/10-bill-refund-guide">
    <div :class="$style.title">환불 안내</div>
    <div :class="$style.desc">음수 기록으로 통계 상쇄</div>
  </a>
  <a :class="$style.card" href="./guide/11-bill-reimbursement-guide">
    <div :class="$style.title">정산 안내(지출 정산)</div>
    <div :class="$style.desc">정산 대상 지출과 정산 입금</div>
  </a>
  <a :class="$style.card" href="./guide/12-scheduled-accounting-guide">
    <div :class="$style.title">정기 기장 안내</div>
    <div :class="$style.desc">반복 수입/지출 자동 기록</div>
  </a>
</div>

### 자동 기장

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/13-back-tap-guide">
    <div :class="$style.title">뒷면 탭 가이드</div>
    <div :class="$style.desc">뒷면을 탭하여 자동 기장 실행</div>
  </a>
  <a :class="$style.card" href="./guide/14-assistive-touch-guide">
    <div :class="$style.title">AssistiveTouch 가이드</div>
    <div :class="$style.desc">AssistiveTouch로 자동 기장 실행</div>
  </a>
  <a :class="$style.card" href="./guide/15-action-button-guide">
    <div :class="$style.title">동작 버튼 가이드</div>
    <div :class="$style.desc">동작 버튼으로 자동 기장 실행</div>
  </a>
</div>

## 자주 묻는 질문

<div :class="$style.grid">
  <a :class="$style.card" href="./faq/">
    <div :class="$style.title">자주 묻는 질문(FAQ)</div>
    <div :class="$style.desc">가져오기, 장부, 환율, 동기화 등</div>
  </a>
</div>

## 법적 문서

<div :class="$style.grid">
  <a :class="$style.card" href="./legal/privacy">
    <div :class="$style.title">개인정보처리방침</div>
    <div :class="$style.desc">개인정보 처리 및 보호 안내</div>
  </a>
  <a :class="$style.card" href="./legal/terms">
    <div :class="$style.title">이용약관</div>
    <div :class="$style.desc">서비스 이용 조건 및 규정</div>
  </a>
  <a :class="$style.card" href="./legal/membership">
    <div :class="$style.title">멤버십 서비스 이용약관</div>
    <div :class="$style.desc">멤버십 혜택 및 구독 안내</div>
  </a>
</div>

## 도움말

<div :class="$style.grid">
  <a :class="$style.card" href="./help/account-deletion">
    <div :class="$style.title">계정 삭제 안내</div>
    <div :class="$style.desc">계정 삭제 시 영향과 주의사항</div>
  </a>
  <a :class="$style.card" href="./help/version-history">
    <div :class="$style.title">버전 기록</div>
    <div :class="$style.desc">신규 기능 및 버그 수정</div>
  </a>
  <a :class="$style.card" href="./help/contact">
    <div :class="$style.title">문의하기</div>
    <div :class="$style.desc">이메일 및 소셜 미디어 연락처</div>
  </a>
</div>

<style module>
:global(.vp-doc > div > h2:first-child) {
  border-top: none;
  padding-top: 0;
  margin-top: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 12px 0 24px;
}

.card {
  display: block;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none !important;
  transition: border-color 0.2s, background-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: #FFB300;
  background-color: var(--vp-c-bg-soft-up);
  text-decoration: none !important;
  transform: translateY(-1px);
}

.title {
  font-weight: 600;
  line-height: 1.35;
  color: var(--vp-c-text-1);
}

.desc {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}
</style>
