import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    header: {
        backgroundColor: '#cecece',
        padding: 15,
    },
    headerTitle: {
        paddingBottom: 0,
        fontSize: 20,
        fontWeight: 'bold',
    },
    listFilter: {
        padding: 10,
        margin: 15,
        backgroundColor: '#fff',
    },
    searchInput: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        marginBottom: 10,
    },
    listItemIcon: {
        width: 30,
        height: 30,
    },
    picker: {
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    listWrapper: {
        flex: 1,
        height: '100%'
    },
    listTextContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#aaaaaa',
        marginBottom: 15,
    },
    listItemTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    listItemPaid: {
        fontSize: 12,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    flatList: {
        padding: 15,
    },
    safeAreaStyles: {
        flex: 1,
    }
});
