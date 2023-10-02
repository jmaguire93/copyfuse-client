import { atomWithStorage } from 'jotai/utils'

export const sidebarOpenAtom = atomWithStorage<boolean>('sideBarOpen', true)
