/* 3A. Get data and save it locally
Write code that gets data from a product API (URL) and saves it into an SQL database locally. For extra points note the following:

-Figure a way to save the hierarchical data (see product variations and categories for example)
-Figure a way to handle schemaless data (variations)
-Take into account that the database schema should support translations although the API doesn’t, use ISO 639-1 as language keys
-Add support for extra currencies
-How to update the product data from the API without re-saving everything but only parts that have changed
-Also note that not every object have IDs */

fetch('https://raw.githubusercontent.com/Exove/developer-test/main/material/products.json');