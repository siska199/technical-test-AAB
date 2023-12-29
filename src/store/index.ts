import { create } from "zustand";
import { TUniversitySLice } from "./university/universitySlice";
import createUniversitySlice from './university/universitySlice';

const useBoundStore = create<TUniversitySLice>()((...a) => ({
    ...createUniversitySlice(...a),
}))

export default useBoundStore