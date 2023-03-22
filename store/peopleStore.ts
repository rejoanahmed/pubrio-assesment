import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { PeopleItemProps } from '../components/TopSearchInput.tsx/PeopleItem'

const usePeopleStore = create<{
  people: PeopleItemProps[]
  setPeople: (param: PeopleItemProps[]) => void
}>((set) => ({
  people: [],
  setPeople: (param) => {
    console.log(param)
    set(() => ({ people: param }))
  }
}))

export default usePeopleStore
