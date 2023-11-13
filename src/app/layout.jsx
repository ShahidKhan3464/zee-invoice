import './globals.css';
import 'react-phone-input-2/lib/style.css';
import { ReduxProvider, GoogleProvider } from '@/providers/providers';

export const metadata = {
  title: 'Zee invoices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <GoogleProvider >
            {children}
          </GoogleProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}