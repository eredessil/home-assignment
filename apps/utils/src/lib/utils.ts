import {CURRENCY_TYPES} from "@shared-types";

interface IMoneyFormatter {
    value?: number;
    currency?: CURRENCY_TYPES;
    locale: string;
}

export const moneyFormatter = ({value, currency, locale} : IMoneyFormatter) => {
    if (value === undefined) {
        return 'X';
    }
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'HUF',
        minimumFractionDigits: 0
    }).format(value);
};
