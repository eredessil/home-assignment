import {CURRENCY_TYPES} from "./currency.interface";

export type SPENDING_CATEGORY =
    'housing'
    | 'travel'
    | 'food'
    | 'utilities'
    | 'insurance'
    | 'healthcare'
    | 'financial'
    | 'lifestyle'
    | 'clothing'
    | 'entertainment'
    | 'miscellaneous'

export interface ISpendingCard {
    id: string;
    title: string;
    paid: Date;
    amount: number;
    currency: CURRENCY_TYPES;
    icon: string;
}

export interface ISpendingListItem {
    category: SPENDING_CATEGORY,
    currency: CURRENCY_TYPES
    id: string
    paid: Date,
    sum: number,
    summary: string
}

export type ISpendingListResponse = ISpendingListItem[];
