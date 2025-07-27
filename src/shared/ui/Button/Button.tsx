import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'
import styles from './Button.module.css'
export function AppButton(props: ButtonProps) {
  return (
    <Button
      size="small"
      className={styles.button}
      {...props}
    />
  )
}
