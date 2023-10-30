"use client";

import './globals.css'
import store from '@/provider/store'
import { Provider } from 'react-redux'
import 'react-phone-input-2/lib/style.css'

// export const metadata = {
//   title: 'Zee invoices',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}