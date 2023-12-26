import type { Metadata } from 'next'
import './globals.css'
import {Tenor_Sans,Poppins } from 'next/font/google';
const tenor = Tenor_Sans({
  weight: ['400'],
  style: [ 'normal'],
  subsets: ['latin'],
  variable: '--font-tenor',
});

const poppins = Poppins({
  weight: ['300', '700'],
  style: ['italic','normal'],
  subsets: ['latin'],
  variable: '--font-poppins', // Cambiado a '--font-raleway' para ser consistente con el nombre de la variable
});

export const metadata: Metadata = {
  title: 'Portfolio by julian',
  description: 'Generated by create next app',
  icons:{
   icon: ['/favicon.ico?v=4',
],
  apple:[
    '/apple-touch-icon.png?v=4',
  ],
  shortcut:[
    '/apple-touch-icon.png'
  ]
},
manifest:'/site.webmanifest'

 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={` ${tenor.variable} ${poppins .variable}`}>
        {children}
      </body>
    </html>
  )
}
