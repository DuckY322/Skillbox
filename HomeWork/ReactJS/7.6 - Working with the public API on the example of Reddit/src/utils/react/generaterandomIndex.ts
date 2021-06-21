import { nanoid } from 'nanoid'

export const generateRandomString = (length: number) => nanoid(length);