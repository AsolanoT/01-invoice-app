import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InvoiceApp } from './InvoiceApp'

createRoot(document.getElementById('root')).render(
  // sirve para comprobaciones en desarrollo de app <StrictMode>
  <StrictMode>
    <InvoiceApp />
  </StrictMode>
)
