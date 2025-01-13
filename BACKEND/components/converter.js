import  { convert } from 'currency-exchanger-js';

export const converter = async (amount, from, to ) => {
        const convertedAmount = await convert(amount, from, to)
        return convertedAmount
};
