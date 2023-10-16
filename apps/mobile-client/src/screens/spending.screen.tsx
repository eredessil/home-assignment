import {FlatList, FlatListProps, SafeAreaView, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {useGetSpendingListQuery} from "@shared-stores";
import {moneyFormatter} from "@sprintform/utils";
import styles from "./spending.styles";
import RNPickerSelect from 'react-native-picker-select';
import {ISpendingCard, ISpendingListItem, SPENDING_CATEGORY} from "@shared-types";
import barsSolid from './../assets/bars-solid.svg';
import buildingSolid from './../assets/building-solid.svg';
import carSolid from './../assets/car-solid.svg';
import coinsSolid from './../assets/coins-solid.svg';
import filmSolid from './../assets/film-solid.svg';
import houseCrackSolid from './../assets/house-crack-solid.svg';
import pizzaSliceSolid from './../assets/pizza-slice-solid.svg';
import screwdriverWrenchSolid from './../assets/screwdriver-wrench-solid.svg';
import shirtSolid from './../assets/shirt-solid.svg';
import suitcaseMedicalSolid from './../assets/suitcase-medical-solid.svg';

export const SpendingScreen = () => {
    const {data} = useGetSpendingListQuery(undefined);
    const [filters, setFilters] = useState({
        summary: undefined,
        category: undefined
    });

    const handleFilterChange = (value: {
        summary?: string;
        category?: SPENDING_CATEGORY;
    }) => {
        setFilters({
            ...filters,
            ...value
        })
    }

    const getIconByCategory = (category: SPENDING_CATEGORY) => {
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

    console.log(filters)

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

    const renderItem = ({item}) => {
        return (
            <View style={styles.listItem}>
                {getIconByCategory(item.category)({style: styles.listItemIcon})}
                <View style={styles.listTextContainer}>
                    <Text style={styles.listItemTitle} numberOfLines={1}>{item.summary}</Text>
                    <Text>{item.paid}</Text>
                </View>
                <View>
                    <Text style={styles.price}>{moneyFormatter({
                        value: item.sum,
                        currency: item.currency,
                        locale: 'hu-hu'
                    })}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.safeAreaStyles}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Sprintform</Text>
                <Text style={styles.listItemPaid}>spending tracker tool</Text>
            </View>
            <View style={styles.listFilter}>
                <TextInput
                    onChange={(event) => handleFilterChange({
                        summary: event.nativeEvent.text.toLowerCase()
                    })}
                    placeholder="Search"
                    style={styles.searchInput}/>
                <RNPickerSelect
                    style={{
                        inputIOS: styles.picker,
                        inputAndroid: styles.picker
                    }}
                    onValueChange={(value) => handleFilterChange({
                        category: value
                    })}
                    items={[
                        {label: 'Football', value: 'football'},
                        {label: 'housing', value: 'housing'},
                        {label: 'travel', value: 'travel'},
                        {label: 'food', value: 'food'},
                        {label: 'utilities', value: 'utilities'},
                        {label: 'insurance', value: 'insurance'},
                        {label: 'healthcare', value: 'healthcare'},
                        {label: 'financial', value: 'financial'},
                        {label: 'lifestyle', value: 'lifestyle'},
                        {label: 'clothing', value: 'clothing'},
                        {label: 'entertainment', value: 'entertainment'},
                        {label: 'miscellaneous', value: 'miscellaneous'}
                    ]}>

                </RNPickerSelect>
            </View>
            <View style={styles.listWrapper}>
                <FlatList
                    style={styles.flatList}
                    data={getFilteredData()}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                ></FlatList>
            </View>
        </SafeAreaView>
    )
}
