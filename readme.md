# This is CSC105 mini-project repository

This repository contain backend and frontend

## To run the frontend and backend in developmode 
use
```
    npm run start
```

# Mini-Ecommerce App

### All of the responses will be wrapped with this data before sending
| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| msg | string | message for each request |
| data | JSON | the actual data |

#### URL
`POST /login`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|usernameOrEmail|String|username Or Email
|password|String| password|


Example
```
   {
     "usernameOrEmail" : "woodyy",
     "password" : "woodyy"
   }


```


#### Success
Response

###### Status Code
`200`  login success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String| user email
|username|String| username
|id|String| user id

Example
```
{
   "email":"woodyy@gmail.com",
   "username":"woodyy",
   "id" : "25"
}

```
**noted: If success, the Response will be sent with cookie named user**

### Register

#### URL
`POST /register`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username |
|email| String | email |
|password|String| password|

Example
```
   {
    "email":"woodyy@gmail.com",
    "username":"woodyy",
     "password" : "woodyy"
   }


```

#### Success

###### Status Code
`200`  register success

no response body

### get logged in user


#### URL
`GET /ItemDetail/:id`

#### Request Body 
No Request Body


#### Success

###### Status Code
`200`  got data

| Parameter | Type | Description |
|----------|:-------------:|:------|
|category|String| item category
|description|String| item description
|id|Int| item id
|image|String| item image
|price|String| item price
|name|String| item name

Example
```
{
   "category":"Sale",
   "desc":"Lorem Ipsum ....",
   "id": 1,
   "image": "http://localhost:3000/static/Bimage1.webp",
   "price" : "30",
   "name": "Black Hoodie"
}
```
#### URL
`GET /new_items`

#### Request Body 
No Request Body


#### Success

###### Status Code
`200`  got data

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of items | all items related to new Category |

#### item
the item object

| Parameter | Type | Description |
|----------|:-------------:|:------|
|category|String| item category
|description|String| item description
|id|Int| item id
|image|String| item image
|price|String| item price
|name|String| item name

Example
```
[
    {
   "category":"New",
   "desc":"Lorem Ipsum ....",
   "id": 1,
   "image": "http://localhost:3000/static/Bimage1.webp",
   "price" : "30",
   "name": "Black Hoodie"
    }
]
```

#### URL
`GET /Sale_items`

#### Request Body 
No Request Body


#### Success

###### Status Code
`200`  got data

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of items | all items related to sale Category |

#### item
the item object

| Parameter | Type | Description |
|----------|:-------------:|:------|
|category|String| item category
|description|String| item description
|id|Int| item id
|image|String| item image
|price|String| item price
|name|String| item name

Example
```
[
    {
   "category":"Sale",
   "desc":"Lorem Ipsum ....",
   "id": 1,
   "image": "http://localhost:3000/static/Bimage1.webp",
   "price" : "30",
   "name": "Black Hoodie"
    }
]
```

#### URL
`GET /Popular_items`

#### Request Body 
No Request Body


#### Success

###### Status Code
`200`  got data

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of items | all items related to popular Category |

#### item
the item object

| Parameter | Type | Description |
|----------|:-------------:|:------|
|category|String| item category
|description|String| item description
|id|Int| item id
|image|String| item image
|price|String| item price
|name|String| item name

Example
```
[
    {
   "category":"Popular",
   "desc":"Lorem Ipsum ....",
   "id": 1,
   "image": "http://localhost:3000/static/Bimage1.webp",
   "price" : "30",
   "name": "Black Hoodie"
    }
]
```

### getAllItemsAddedToCart
#### URL
`GET /Cart_items`

#### Request Body 
No Request Body

#### Success

###### Status Code
`200`  found items

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of items | all items related to user with checkout value 0 |

#### item
the item object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | Int | id of item in Cart |
| item_id | Int | Item id |
| image | String | Item Image |
| name | String | Item name |
| price | String | productnprice |
| user_id | User | User Id|
| Checkout | Boolean | to check the items before checking out|
| address | String | address|

Example
```
[
    {
        "id" : 1,
        "item_id" : 6,
        "image" : "http://localhost:3000/static/Bimage1.webp",
        "name" : "Comfort Hoodie",
        "price" : "50",
        "user_id" : "1",
        "checkout": "0",
        "address": null,
    }
]

```

### getPurchasedItems
#### URL
`GET /Past_items`

#### Request Body 
No Request Body

#### Success

###### Status Code
`200`  found items

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of items | all items related to user with checkout value 1 |

#### item
the item object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | Int | id of item in Cart |
| item_id | Int | Item id |
| image | String | Item Image |
| name | String | Item name |
| price | String | productnprice |
| user_id | User | User Id|
| Checkout | Boolean | to check the items before checking out|
| address | String | address|

Example
```
[
    {
        "id" : 1,
        "item_id" : 6,
        "image" : "http://localhost:3000/static/Bimage1.webp",
        "name" : "Comfort Hoodie",
        "price" : "50",
        "user_id" : "1",
        "checkout": "1",
        "address": "KMUTT",
    }
]

```

### Purchasing & askingAddressToBeDelivered & changing the boolean Value of Checkout

#### URL
`PATCH /Cart_items`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| itemId | string | id of item |
| address | string | address |
| checkout | boolean | 0/1 for checkout value |


#### Success
Response

###### Status Code
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of item |
| address | string | address |
| checkout | boolean | 0/1 |

Example
```
    {
        "checkout" : "1",
        "address" : "KMUTT"
    }

```

### Add Item To Cart
#### URL
`POST /ItemDetail/:id`

### Parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| id of item
 
#### Request Body 
No Request Body

#### Success
Response

###### Status Code
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of item |
| image | string | item image |
| name | string | item name |
| price | string | item price |

Example
```
    {
        "id" : "6",
        "name" : "ComfortHoodie",
        "image" : "http://localhost:3000/static/Bimage1.webp",
        "price" : "50"
    }

```

### Delete item

#### URL
`DELETE /Cart_items/:id`

### Parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
|itemId|String| id of item
 
#### Request Body 
No Request Body

#### Success
Response

###### Status Code
` 200`  delete success

no response body
