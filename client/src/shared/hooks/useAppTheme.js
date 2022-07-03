import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors/app";
import { AppThemesEnum } from "../data/AppThemes";

// Tema por defecto
const defaultTheme = AppThemesEnum.DARK;

/**
 * Hook para control del Tema de la aplicación
 * @returns tema
 */
const useAppTheme = () => {

    const theme = useSelector((state) => getTheme(state));
    const [themeClass, setThemeClass] = useState("");
    const [bodyTheme, setBodyTheme] = useState("");

    useEffect(() => {
        // console.log("useAppTheme::useEffect");
        setThemeClass(AppThemesEnum.DARK === theme ? "theme-dark" : "theme-light");
        setBodyTheme(AppThemesEnum.DARK === theme ? "dark" : "light");
    }, [theme]);
    
    return {
        default: AppThemesEnum.DARK.toLowerCase(),
        dark: AppThemesEnum.DARK.toLowerCase(),
        light: AppThemesEnum.LIGHT.toLowerCase(),
        isDark: AppThemesEnum.DARK.toLowerCase() === bodyTheme,
        isLight: AppThemesEnum.LIGHT.toLowerCase() === bodyTheme,
        value: themeClass,
        body: bodyTheme,
        nav: bodyTheme
    };
};

export default useAppTheme;