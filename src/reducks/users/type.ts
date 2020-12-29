export enum Actions {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export type userState = {
  isSignedIn: boolean
  uid: string
  username: string
}
