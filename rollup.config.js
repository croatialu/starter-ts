import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      format: 'esm',
      file: './dist/index.esm.js',
    },
  ],
  plugins: [typescript(
    {
      compilerOptions: {
        declaration: false,
      },
    },
  )],
})
