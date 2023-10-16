import {Header, SpendingCard} from "@sprintform-ui/web";
import {useTranslation} from "react-i18next";
import {useGetSpendingListQuery} from "@shared-stores";
import barsSolid from './../../assets/bars-solid.svg';
import buildingSolid from './../../assets/building-solid.svg';
import carSolid from './../../assets/car-solid.svg';
import coinsSolid from './../../assets/coins-solid.svg';
import filmSolid from './../../assets/film-solid.svg';
import houseCrackSolid from './../../assets/house-crack-solid.svg';
import pizzaSliceSolid from './../../assets/pizza-slice-solid.svg';
import screwdriverWrenchSolid from './../../assets/screwdriver-wrench-solid.svg';
import shirtSolid from './../../assets/shirt-solid.svg';
import suitcaseMedicalSolid from './../../assets/suitcase-medical-solid.svg';
import {SPENDING_CATEGORY} from "@shared-types";
import {ChangeEvent, useState} from "react";
import './main.styles.scss';

const getIconByCategory = (category: SPENDING_CATEGORY): string => {
    switch (category) {
        case 'housing':
            return buildingSolid;
        case 'travel':
            return carSolid;
        case 'food':
            return pizzaSliceSolid;
        case 'utilities':
            return barsSolid;
        case 'insurance':
            return suitcaseMedicalSolid;
        case 'healthcare':
            return suitcaseMedicalSolid;
        case 'financial':
            return coinsSolid;
        case 'lifestyle':
            return shirtSolid;
        case 'clothing':
            return shirtSolid;
        case 'entertainment':
            return filmSolid;
        case 'miscellaneous':
            return screwdriverWrenchSolid;
        default:
            return houseCrackSolid;
    }
}
export const MainPage = () => {
    const {t} = useTranslation();
    const {data, isLoading} = useGetSpendingListQuery(undefined);

    interface IFilter {
        summary?: string;
        category?: SPENDING_CATEGORY;
    }

    const [filters, setFilters] = useState<IFilter>({
        summary: undefined,
        category: undefined
    });

    const handleFilter = (newValue: IFilter) => {
        setFilters({
            ...filters,
            ...newValue,
        });
    }


    const getFilteredData = () => {
        let dataCopy = [...(data || [])];
        if (filters.summary && filters.summary.length > 0) {
            dataCopy = dataCopy.filter(item => item.summary.toLowerCase().includes(filters.summary as string));
        }

        if (filters.category) {
            dataCopy = dataCopy.filter(item => item.category === filters.category);
        }

        return dataCopy;
    }

    if (isLoading) return <div>Loading...</div>;

    return <div className={'main-page'}>
        <Header
            title={t('spading-header-title')}
            subtitle={t('spading-header-subtitle')}
        />

        <div className="container">


            <div className={'filter'}>
                <input
                    placeholder={'Search'}
                    type="text"
                    onKeyUp={(event) => handleFilter({
                        summary: event.currentTarget.value.toLowerCase(),
                    })}
                />

                <select
                    placeholder={'Category'}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) => handleFilter({
                        category: event.currentTarget.value as SPENDING_CATEGORY
                    })}
                >
                    <option value={''}>All</option>
                    <option value={'housing'}>Housing</option>
                    <option value={'travel'}>Travel</option>
                    <option value={'food'}>Food</option>
                    <option value={'utilities'}>Utilities</option>
                    <option value={'insurance'}>Insurance</option>
                    <option value={'healthcare'}>Healthcare</option>
                    <option value={'financial'}>Financial</option>
                    <option value={'lifestyle'}>Lifestyle</option>
                    <option value={'clothing'}>Clothing</option>
                    <option value={'entertainment'}>Entertainment</option>
                    <option value={'miscellaneous'}>Miscellaneous</option>
                </select>
            </div>
            {getFilteredData()?.map(item => (
                <SpendingCard
                    key={item.id}
                    title={item.summary}
                    paid={item.paid}
                    icon={getIconByCategory(item.category)}
                    amount={item.sum}
                    currency={item.currency}
                />
            ))}
        </div>
    </div>
}
