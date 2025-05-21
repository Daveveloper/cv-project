/// <reference types="vite/client" />

declare module '*.svg'
declare module '*.jpeg' {
  const src: string
  export default src
} 