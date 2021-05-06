import useLocalStorage from './useLocalStorage'



const useDarkMode =(value) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeOn')
}

export default useDarkMode;