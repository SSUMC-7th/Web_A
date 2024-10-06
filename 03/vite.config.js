// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // WSL 환경에서 브라우저 접근 가능하게 설정
    port: 5173,  // 원하는 포트 설정 (다른 포트도 사용 가능)
    watch: {
      usePolling: true, // 파일 변경 감지를 위해 폴링 사용
    },
  },
});
