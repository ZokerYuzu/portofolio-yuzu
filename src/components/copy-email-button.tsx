import type { ComponentProps } from 'react'
import { Copy, Send } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { SITE } from '@/data/portfolio'
import { cn } from '@/lib/utils'

type CopyIcon = 'copy' | 'send'

interface CopyEmailButtonProps extends Omit<ComponentProps<typeof Button>, 'children'> {
  icon?: CopyIcon
  children?: ComponentProps<typeof Button>['children']
}

function fallbackCopyText(text: string): boolean {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.top = '0'
  textArea.style.left = '0'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  let success = false
  try {
    success = document.execCommand('copy')
  } catch {
    success = false
  }
  document.body.removeChild(textArea)
  return success
}

export function CopyEmailButton({ icon = 'copy', children, className, onClick, ...props }: CopyEmailButtonProps) {
  const Icon = icon === 'send' ? Send : Copy

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(SITE.email)
      } else if (!fallbackCopyText(SITE.email)) {
        throw new Error('copy failed')
      }
      toast.success('Email berhasil disalin!', {
        description: SITE.email,
      })
    } catch {
      toast.error('Gagal menyalin email.')
    }
  }

  return (
    <Button type="button" onClick={handleCopy} className={cn(className)} {...props}>
      <Icon data-icon="inline-start" />
      {children ?? 'Salin Email'}
    </Button>
  )
}
