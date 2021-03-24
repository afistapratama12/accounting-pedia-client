const path = {
    home : '/',
    loginUser : '/login',
    registerUser : '/register',
    
    // users information
    usersData : '/users',

    // starting when create
    beginningBalance : '/beginning_balance',
    fillContacts : '/fill_contacts',
    fillFixedAssets : '/fill_fixed_assets',

    dashboard: '/dashboard',
    
    // reports
    financialReport : '/reports',

        // general reports
        neraca : '/reports/general/balace_sheet',
        labaRugi : '/reports/general/profit_loss',
        arusKas : '/reports/general/cash_flow',
        perubahanModal : '/reports/general/statement_change_equity',
        neracaSaldo : 'reports/general/trial_balance',
        generalReports : '/reports/general',

        // sales reports
        listSalesReports : '/reports/sale/list_sales',
        customerReceivable : '/reports/sale/customer_receivable',
        salesDelivery : '/reports/sale/sales_delivery',
        salesPerCustomer : '/reports/sale/sales_per_customer',
        agingReceivable : '/reports/sale/aging_receivable',
        salesPerProduct : '/reports/sale/sales_per_product',
        salesReports : '/reports/sales',

        //pruchasing reports
        listPurchasing : '/reports/purchasing/list_purchasing',
        SupplierDebt : '/reports/purchasing/supplier_debt',
        expenditureDetail : '/reports/purchasing/expense_detail',
        purchasingPerSupplier : '/reports/purchasing/purchasing_per_supplier',
        agingDebt : '/reports/purchasing/aging_debt',
        purchasingPerProduct : '/reports/purchasing/purchasing_per_product',
        purchasingReports : '/reports/purchasing',

        //product reports
        inventorySummary : '/reports/inventories/summary',
        inventoryQuantity : '/reports/inventories/quantity_reports',
        inventoryReports : '/reports/inventories',

        //fixed asset reports
        fixedAssetSummary : '/reports/fixed_assets/summary',
        fixedAssetDetails : '/reports/fixed_assets/details',
        fixedAssetReports : '/reports/fixed_asset',

        //Banks reports
        bankReports : '/reports/banks',
        reconciliationBanks : '/reports/banks/reconsiliation',
        mutationBanks : '/reports/banks/mutations',
        
    
    // analysis
    analysis : '/analysis',

    // cash bank
    cashBankTransfer : '/cash_and_bank/transfer',
    cashBankAccept : '/cash_and_bank/accept',
    cashBankSend : '/cash_and_bank/send',
    cashBank : '/cash_and_bank',

    //sales
    sales : '/sales',
    
    //purchase
    purchase: '/purchase',

    //cost
    cost : '/cost', // biaya-biaya

    //data contact
    contacts : '/contacts',

    //data inventories
    inventories : '/inventories',

    //fixed_assets
    fixedAsset : '/fixed_assets',

    // list_accounts
    listAccounts : '/chart_accounts',

    // umum
    generalJournal : '/general_journal'
}


export default path