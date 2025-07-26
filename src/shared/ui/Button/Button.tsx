import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

export function AppButton(props: ButtonProps) {
  return (
    <Button
      size="small"
      {...props}
    />
  )
}
