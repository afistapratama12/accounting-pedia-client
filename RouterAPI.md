# user router (process)

- GET "/users", get all users
- GET "/users/:userId", get user by id, for edit (done)

- POST "/users/register, register user (done)
- POST "/users/login, login user (done)

- PATCH "/users/:userId", update user (done)

- DELETE "/users/:userId", delete user

# companies router

- GET "/companies", get all companies
- GET "/companies/users", get all users (done)
- GET "/companies/:companyId", get company by id

- POST "/companies", create new company

- PATCH "/companies/:companyId, update company id
- PATCH "/companies/:companyId/saldo_awal/done, done fill saldo awal
- PATCH "/companies/:companyId/fixed_asset/done, done fill fixed asset
- PATCH "/companies/:companyId/contacts/done, done fill contact

- DELETE "/companies/:companyId", delete company

# akuns router

- GET "/akuns", get all akuns
- GET "/akuns/:akunId" , get akuns id to edit (done)
- GET "/akuns/companies/:companyId", get all akuns by company (done)
- GET "/akuns/companies/:companyId/transactions", get all akuns with trans
- GET "/akuns/:akunId/companies/:companyId", get akun id with transaction

- POST "/akuns/companies/:companyId", create akuns 

- PATCH "/akuns/:akunId, update akun Id

- DELETE "/akuns/:akunId, delete akun Id

- DELETE "/manual/:manualId", delete manual akun by HEAD / Head

# transactions router

# Banks router

# contacts router

# fixed-assets router

# inventories router

