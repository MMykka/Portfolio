import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head />
      <body className="dark:bg-[#181823] bg-[#EFFFFB] duration-300">
        <Main />
        <NextScript />
      </body>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </Html>
    
  )
  
}

