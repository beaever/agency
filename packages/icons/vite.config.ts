import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
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
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    react({
      jsxImportSource: '@agency/theme/node_modules/@emotion/react',
    }),
    dts({
      insertTypesEntry: true, // 컴포넌트 타입 생성
    }),
    svgr(),
  ],
  optimizeDeps: {
    force: true,
  },

  build: {
    lib: {
      name: '@agency/icons',
      entry: [path.resolve(__dirname, 'src', 'index.ts'), path.resolve(__dirname, 'src', 'components', 'component.ts')],
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: externals,
      output: {
        globals: {
          react: 'React',
          '@agnecy/theme/node_modules/@emotion/react/jsx-runtime': 'jsxRuntime',
          '@agency/theme/node_modules/@emotion/react': 'React',
        },
      },
      input: {
        component: './src/components/component.ts',
      },
    },
  },
});
