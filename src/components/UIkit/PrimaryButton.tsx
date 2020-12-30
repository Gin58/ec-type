import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

type Props = {
  label: string
  onClick: () => void
}

const useStyles = makeStyles({
  button: {
    backgroundColor: '#4dd0e1',
    color: '#000',
    fontSize: 16,
    height: 48,
    marginBottom: 16,
    width: 256,
  },
})

const PrimaryButton = (props: Props) => {
  const classes = useStyles()
  const { label, onClick } = props
  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => onClick()}
    >
      {label}
    </Button>
  )
}

export default PrimaryButton
