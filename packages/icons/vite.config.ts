import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from '@svgr/rollup';
import dts from 'vite-plugin-dts';
import * as packageJson from './package.json';

const makeExternalPredicate = (externalArr: string[]) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id: string) => pattern.test(id);
};

const externals = makeExternalPredicate(Object.keys(packageJson.peerDependencies));

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // 컴포넌트 타입 생성
    }),
    svgr(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      name: '@itsm/icons',
      entry: [path.resolve(__dirname, 'src', 'index.ts'), path.resolve(__dirname, 'src', 'components', 'component.ts')],
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: externals,
      output: {
        globals: {
          react: 'React',
          '@emotion/react/jsx-runtime': 'jsxRuntime',
          '@emotion/react': 'React',
        },
      },
      input: {
        component: './src/components/component.ts',
      },
    },
  },
});
