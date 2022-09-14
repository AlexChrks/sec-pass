import * as crypto from "crypto";

export function generatePassword (
  length: number = 20,
  wishlist: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
): string {
  return (
    Array.from(crypto.randomFillSync(new Uint8Array(length)))
      .map((x) => wishlist[x % wishlist.length])
      .join('')
  )
}
