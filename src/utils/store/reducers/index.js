import { combineReducers } from 'redux'

import userReducer from './UserReducer'
import companyReducer from './CompanyReducer'
import akunReducer from './AkunReducer'
import transactionReducer from './TransactionReducer'
import fixedAssetReducer from './FIxedAssetReducer'
import contactReducer from './ContactReducer'
import inventoryReducer from './InventoryReducer'
import bankReducer from './BankReducer'


const reducers = combineReducers({
    user : userReducer,
    company : companyReducer,
    akun : akunReducer,
    transaction : transactionReducer,
    fixedAsset : fixedAssetReducer,
    contact : contactReducer,
    inventory : inventoryReducer,
    bank : bankReducer
})

export default reducers