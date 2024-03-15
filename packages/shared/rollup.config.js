export default {
  input: './src/index.ts', // 진입 경로
  output: {
    file: './dist/bundle.ts', // 출력 경로
    format: 'es', // 출력 형식
    sourcemap: true, // 소스 맵을 켜놔서 디버깅을 쉽게 만들자
  },
};
