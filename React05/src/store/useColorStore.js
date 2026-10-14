import {create} from 'zustand'

const useColorStore = create((set) => ({
    // 상태를 저장할 변수 만들기
    color : "", 

    changeColor : (inputValue) => set((state) => ({ color : inputValue }))
}));

export default useColorStore;