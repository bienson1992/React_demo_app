import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@token');
        if (value !== null) {
            return value;
        }
        return 'token_null';
    } catch (error) {
    // Error retrieving data
        return 'token_null';
    }
};

export default getToken;
