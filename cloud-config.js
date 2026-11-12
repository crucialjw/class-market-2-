// Firebase 설정 값입니다. (null로 바꾸면 클라우드 없이 이 기기에만 저장하는 모드로 동작해요.)
// 이 값은 비밀번호가 아니며, 보안은 Firestore 규칙과 학급 코드가 맡습니다.
window.CLOUD_CONFIG = {
  apiKey: "...",
  authDomain: "내프로젝트.firebaseapp.com",
  projectId: "내프로젝트",
  storageBucket: "내프로젝트.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};
