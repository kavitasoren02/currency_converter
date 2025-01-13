import express from 'express';
import { converter } from '../components/converter.js'

const Routes = express();

  

Routes.post('/convert', async (req, res) => {
    try
     {
        const data = req.body;
        const  amount = await converter(+data.amount , data.from, data.to);
        res.status(200).json({ amount });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" , error:err});
    }
});

Routes.get("/getlist", async (req, res) => {
    const currencyList = [
        { "country": "Afghanistan", "code": "AFN" },
        { "country": "Albania", "code": "ALL" },
        { "country": "Algeria", "code": "DZD" },
        { "country": "Andorra", "code": "EUR" },
        { "country": "Angola", "code": "AOA" },
        { "country": "Argentina", "code": "ARS" },
        { "country": "Armenia", "code": "AMD" },
        { "country": "Australia", "code": "AUD" },
        { "country": "Austria", "code": "EUR" },
        { "country": "Azerbaijan", "code": "AZN" },
        { "country": "Bahamas", "code": "BSD" },
        { "country": "Bahrain", "code": "BHD" },
        { "country": "Bangladesh", "code": "BDT" },
        { "country": "Barbados", "code": "BBD" },
        { "country": "Belarus", "code": "BYN" },
        { "country": "Belgium", "code": "EUR" },
        { "country": "Belize", "code": "BZD" },
        { "country": "Benin", "code": "XOF" },
        { "country": "Bhutan", "code": "BTN" },
        { "country": "Bolivia", "code": "BOB" },
        { "country": "Bosnia and Herzegovina", "code": "BAM" },
        { "country": "Botswana", "code": "BWP" },
        { "country": "Brazil", "code": "BRL" },
        { "country": "Brunei", "code": "BND" },
        { "country": "Bulgaria", "code": "BGN" },
        { "country": "Burkina Faso", "code": "XOF" },
        { "country": "Burundi", "code": "BIF" },
        { "country": "Cambodia", "code": "KHR" },
        { "country": "Cameroon", "code": "XAF" },
        { "country": "Canada", "code": "CAD" },
        { "country": "Cape Verde", "code": "CVE" },
        { "country": "Central African Republic", "code": "XAF" },
        { "country": "Chad", "code": "XAF" },
        { "country": "Chile", "code": "CLP" },
        { "country": "China", "code": "CNY" },
        { "country": "Colombia", "code": "COP" },
        { "country": "Comoros", "code": "KMF" },
        { "country": "Congo (Democratic Republic)", "code": "CDF" },
        { "country": "Congo (Republic)", "code": "XAF" },
        { "country": "Costa Rica", "code": "CRC" },
        { "country": "Croatia", "code": "EUR" },
        { "country": "Cuba", "code": "CUP" },
        { "country": "Cyprus", "code": "EUR" },
        { "country": "Czech Republic", "code": "CZK" },
        { "country": "Denmark", "code": "DKK" },
        { "country": "Djibouti", "code": "DJF" },
        { "country": "Dominica", "code": "XCD" },
        { "country": "Dominican Republic", "code": "DOP" },
        { "country": "Ecuador", "code": "USD" },
        { "country": "Egypt", "code": "EGP" },
        { "country": "El Salvador", "code": "USD" },
        { "country": "Equatorial Guinea", "code": "XAF" },
        { "country": "Eritrea", "code": "ERN" },
        { "country": "Estonia", "code": "EUR" },
        { "country": "Eswatini", "code": "SZL" },
        { "country": "Ethiopia", "code": "ETB" },
        { "country": "Fiji", "code": "FJD" },
        { "country": "Finland", "code": "EUR" },
        { "country": "France", "code": "EUR" },
        { "country": "Gabon", "code": "XAF" },
        { "country": "Gambia", "code": "GMD" },
        { "country": "Georgia", "code": "GEL" },
        { "country": "Germany", "code": "EUR" },
        { "country": "Ghana", "code": "GHS" },
        { "country": "Greece", "code": "EUR" },
        { "country": "Grenada", "code": "XCD" },
        { "country": "Guatemala", "code": "GTQ" },
        { "country": "Guinea", "code": "GNF" },
        { "country": "Guinea-Bissau", "code": "XOF" },
        { "country": "Guyana", "code": "GYD" },
        { "country": "Haiti", "code": "HTG" },
        { "country": "Honduras", "code": "HNL" },
        { "country": "Hungary", "code": "HUF" },
        { "country": "Iceland", "code": "ISK" },
        { "country": "India", "code": "INR" },
        { "country": "Indonesia", "code": "IDR" },
        { "country": "Iran", "code": "IRR" },
        { "country": "Iraq", "code": "IQD" },
        { "country": "Ireland", "code": "EUR" },
        { "country": "Israel", "code": "ILS" },
        { "country": "Italy", "code": "EUR" },
        { "country": "Jamaica", "code": "JMD" },
        { "country": "Japan", "code": "JPY" },
        { "country": "Jordan", "code": "JOD" },
        { "country": "Kazakhstan", "code": "KZT" },
        { "country": "Kenya", "code": "KES" },
        { "country": "Kiribati", "code": "AUD" }
    ];
    try {
        res.status(200).json({currencies : currencyList});
        console.log(currencyList);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default Routes;
