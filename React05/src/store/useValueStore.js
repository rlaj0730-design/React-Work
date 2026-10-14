import {create} from 'zustand'

const useValueStore = create((set) => ({
    // 상태를 저장할 변수 만들기
    text : "", 

    changeText : (inputValue) => set((state) => ({ text : inputValue }))
}));

export default useValueStore;