import { PluginFunction, PluginObject } from 'vue';

// Определение типов для componentLib
declare const tComponentLibrary: PluginObject<any> | PluginFunction<any>;

export default tComponentLibrary;

// Определение типов для компонентов
export const TIcon: PluginObject<any>;
export const TExample: PluginObject<any>;
