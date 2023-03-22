import { create } from 'zustand'

export type Filters = 'Location' | 'Department' | 'Role' | 'Company'

export const filterStore = create<Record<string, {}>>((set) => ({}))
