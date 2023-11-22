import config from "../config.js";
import * as sv from './sv/index.js'
import * as fr from './fr/index.js'
import * as en from './en/index.js';

const translations = {
    sv,
    en,
    fr
}

export const t = translations[config.locale];