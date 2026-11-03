import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import './index.css'

document.documentElement.classList.add('js')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider delayDuration={200}>
      <App />
      <Toaster position="bottom-center" />
    </TooltipProvider>
  </StrictMode>,
)
