import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { PeopleItemProps } from '../components/TopSearchInput.tsx/PeopleItem'

const usePeople = create(
  immer<{
    people: PeopleItemProps[]
    reset: (param: PeopleItemProps[]) => void
    setPeople: (param: PeopleItemProps[]) => void
  }>((set) => ({
    people: [],
    reset: (param) => {
      set((state) => {
        state.people = param
      })
    },
    setPeople: (param) => {
      set((state) => {
        state.people = param
      })
    }
  }))
)

export default usePeople
