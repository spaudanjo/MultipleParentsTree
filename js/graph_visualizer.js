(function () {
  var linksData = [
   {
       "product_id": 93517,
       "rdb_id": 296,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 11,
                   "name": "Warehouse"
               },
               "id": 152,
               "company": {
                   "id": 126,
                   "name": "Better Chemicals"
               },
               "name": "Better chemicals warehouse"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/4E5tyWYSBy/a5162eb92c645d31f6ae236f5e813e8a.png",
           "name": "Omega Power (Packed)",
           "processes": [],
           "item_nr": "123456",
           "dummy": false,
           "description": null,
           "id": 296,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:20.938305Z",
           "modified_on": "2018-03-29T07:28:20.938341Z"
       },
       "created": 1522821850465,
       "filter": false,
       "name": "Omega Power (Packed)",
       "dummy": false
   },
   {
       "product_id": 93302,
       "name": "Omega Powder",
       "details": {
           "parent_product": 296,
           "id": 294,
           "child_products": [
               {
                   "name": "Omega Power (Powder)",
                   "company": "Supplier_0",
                   "id": 297
               }
           ],
           "name": "Omega Powder",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850081,
       "rdb_id": 294,
       "parents_id": [
           {
               "id": 93517
           }
       ]
   },
   {
       "product_id": 93303,
       "name": "Package",
       "details": {
           "parent_product": 296,
           "id": 295,
           "child_products": [],
           "name": "Package",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850082,
       "rdb_id": 295,
       "parents_id": [
           {
               "id": 93517
           }
       ]
   },
   {
       "product_id": 93518,
       "rdb_id": 297,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 156,
               "company": {
                   "id": 130,
                   "name": "Supplier_0"
               },
               "name": "Supplier facility 0"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Omega Power (Powder)",
           "processes": [],
           "item_nr": "32345678",
           "dummy": false,
           "description": null,
           "id": 297,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:21.271047Z",
           "modified_on": "2018-03-29T07:28:21.271105Z"
       },
       "created": 1522821850467,
       "filter": false,
       "name": "Omega Power (Powder)",
       "parents_id": [
           {
               "id": 93302
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93306,
       "name": "Soy Protein",
       "details": {
           "parent_product": 297,
           "id": 298,
           "child_products": [
               {
                   "name": "Gold Star Soy",
                   "company": "Syn Omega",
                   "id": 300
               }
           ],
           "name": "Soy Protein",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850086,
       "rdb_id": 298,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93307,
       "name": "Synthetical oil",
       "details": {
           "parent_product": 297,
           "id": 299,
           "child_products": [
               {
                   "name": "Syn Omega",
                   "company": "Supplier_4",
                   "id": 301
               }
           ],
           "name": "Synthetical oil",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850087,
       "rdb_id": 299,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93309,
       "name": "Soy",
       "details": {
           "parent_product": 297,
           "id": 301,
           "child_products": [],
           "name": "Soy",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850089,
       "rdb_id": 301,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93308,
       "name": "Corn gluten",
       "details": {
           "parent_product": 297,
           "id": 300,
           "child_products": [],
           "name": "Corn gluten",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850088,
       "rdb_id": 300,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93311,
       "name": "Rape Oil",
       "details": {
           "parent_product": 297,
           "id": 303,
           "child_products": [],
           "name": "Rape Oil",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850091,
       "rdb_id": 303,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93310,
       "name": "Lecithin",
       "details": {
           "parent_product": 297,
           "id": 302,
           "child_products": [],
           "name": "Lecithin",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850090,
       "rdb_id": 302,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93305,
       "name": "Vitamin Mix",
       "details": {
           "parent_product": 297,
           "id": 297,
           "child_products": [
               {
                   "name": "Vitamin Powder",
                   "company": "Supplier_2",
                   "id": 299
               }
           ],
           "name": "Vitamin Mix",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850085,
       "rdb_id": 297,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93316,
       "name": "Tryptophan",
       "details": {
           "parent_product": 297,
           "id": 308,
           "child_products": [],
           "name": "Tryptophan",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850097,
       "rdb_id": 308,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93317,
       "name": "Threonine",
       "details": {
           "parent_product": 297,
           "id": 309,
           "child_products": [],
           "name": "Threonine",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850098,
       "rdb_id": 309,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93314,
       "name": "Lysine",
       "details": {
           "parent_product": 297,
           "id": 306,
           "child_products": [],
           "name": "Lysine",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850095,
       "rdb_id": 306,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93315,
       "name": "Methionine",
       "details": {
           "parent_product": 297,
           "id": 307,
           "child_products": [],
           "name": "Methionine",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850096,
       "rdb_id": 307,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93312,
       "name": "Peas",
       "details": {
           "parent_product": 297,
           "id": 304,
           "child_products": [],
           "name": "Peas",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850092,
       "rdb_id": 304,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93313,
       "name": "Sunflower oil",
       "details": {
           "parent_product": 297,
           "id": 305,
           "child_products": [],
           "name": "Sunflower oil",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850094,
       "rdb_id": 305,
       "parents_id": [
           {
               "id": 93518
           }
       ]
   },
   {
       "product_id": 93521,
       "rdb_id": 300,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 153,
               "company": {
                   "id": 127,
                   "name": "Syn Omega"
               },
               "name": "Soy Factory"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/YhQq44jpQw/a51846abad99a206a344e21bc61362cd.png",
           "name": "Gold Star Soy",
           "processes": [],
           "item_nr": "AA84647883YZ",
           "dummy": false,
           "description": null,
           "id": 300,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:22.021702Z",
           "modified_on": "2018-03-29T07:28:22.021737Z"
       },
       "created": 1522821850471,
       "filter": false,
       "name": "Gold Star Soy",
       "parents_id": [
           {
               "id": 93306
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93522,
       "rdb_id": 301,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 160,
               "company": {
                   "id": 134,
                   "name": "Supplier_4"
               },
               "name": "Supplier facility 4"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/HTmGe4w3MR/54567816453d7ead15f6287769f75af3.png",
           "name": "Syn Omega",
           "processes": [],
           "item_nr": "234562343",
           "dummy": false,
           "description": null,
           "id": 301,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:22.375040Z",
           "modified_on": "2018-03-29T07:28:22.375086Z"
       },
       "created": 1522821850474,
       "filter": false,
       "name": "Syn Omega",
       "parents_id": [
           {
               "id": 93307
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93520,
       "rdb_id": 299,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 158,
               "company": {
                   "id": 132,
                   "name": "Supplier_2"
               },
               "name": "Supplier facility 2"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Vitamin Powder",
           "processes": [],
           "item_nr": "224352678",
           "dummy": false,
           "description": null,
           "id": 299,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:21.817090Z",
           "modified_on": "2018-03-29T07:28:21.817205Z"
       },
       "created": 1522821850470,
       "filter": false,
       "name": "Vitamin Powder",
       "parents_id": [
           {
               "id": 93305
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93319,
       "name": "Soy",
       "details": {
           "parent_product": 300,
           "id": 311,
           "child_products": [],
           "name": "Soy",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850099,
       "rdb_id": 311,
       "parents_id": [
           {
               "id": 93521
           }
       ]
   },
   {
       "product_id": 93304,
       "name": "Wheat Gluten Packed",
       "details": {
           "parent_product": 301,
           "id": 296,
           "child_products": [
               {
                   "name": "Wheat (Packed)",
                   "company": "Supplier_1",
                   "id": 298
               }
           ],
           "name": "Wheat Gluten Packed",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850084,
       "rdb_id": 296,
       "parents_id": [
           {
               "id": 93522
           }
       ]
   },
   {
       "product_id": 93323,
       "name": "Sulphuric Acid",
       "details": {
           "parent_product": 301,
           "id": 315,
           "child_products": [],
           "name": "Sulphuric Acid",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850103,
       "rdb_id": 315,
       "parents_id": [
           {
               "id": 93522
           }
       ]
   },
   {
       "product_id": 93322,
       "name": "Sodium Sulphat",
       "details": {
           "parent_product": 301,
           "id": 314,
           "child_products": [],
           "name": "Sodium Sulphat",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850102,
       "rdb_id": 314,
       "parents_id": [
           {
               "id": 93522
           }
       ]
   },
   {
       "product_id": 93321,
       "name": "Potassium",
       "details": {
           "parent_product": 301,
           "id": 313,
           "child_products": [
               {
                   "name": "Potassium",
                   "company": "Supplier_8",
                   "id": 305
               }
           ],
           "name": "Potassium",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850101,
       "rdb_id": 313,
       "parents_id": [
           {
               "id": 93522
           }
       ]
   },
   {
       "product_id": 93320,
       "name": "Sugar",
       "details": {
           "parent_product": 301,
           "id": 312,
           "child_products": [
               {
                   "name": "Agri Sweet",
                   "company": "Supplier_6",
                   "id": 303
               }
           ],
           "name": "Sugar",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850100,
       "rdb_id": 312,
       "parents_id": [
           {
               "id": 93522
           }
       ]
   },
   {
       "product_id": 93519,
       "rdb_id": 298,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 157,
               "company": {
                   "id": 131,
                   "name": "Supplier_1"
               },
               "name": "Supplier facility 1"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Wheat (Packed)",
           "processes": [],
           "item_nr": "232345678",
           "dummy": false,
           "description": null,
           "id": 298,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:21.577781Z",
           "modified_on": "2018-03-29T07:28:21.577834Z"
       },
       "created": 1522821850468,
       "filter": false,
       "name": "Wheat (Packed)",
       "parents_id": [
           {
               "id": 93304
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93526,
       "rdb_id": 305,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 164,
               "company": {
                   "id": 138,
                   "name": "Supplier_8"
               },
               "name": "Supplier facility 8"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Potassium",
           "processes": [],
           "item_nr": "3234562343",
           "dummy": false,
           "description": null,
           "id": 305,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:23.453186Z",
           "modified_on": "2018-03-29T07:28:23.453220Z"
       },
       "created": 1522821850480,
       "filter": false,
       "name": "Potassium",
       "parents_id": [
           {
               "id": 93321
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93524,
       "rdb_id": 303,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 162,
               "company": {
                   "id": 136,
                   "name": "Supplier_6"
               },
               "name": "Supplier facility 6"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Agri Sweet",
           "processes": [],
           "item_nr": "32347773",
           "dummy": false,
           "description": null,
           "id": 303,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:22.943309Z",
           "modified_on": "2018-03-29T07:28:22.943347Z"
       },
       "created": 1522821850476,
       "filter": false,
       "name": "Agri Sweet",
       "parents_id": [
           {
               "id": 93320
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93318,
       "name": "Wheat",
       "details": {
           "parent_product": 298,
           "id": 310,
           "child_products": [
               {
                   "name": "Wheat (from Storage)",
                   "company": "Supplier_5",
                   "id": 302
               }
           ],
           "name": "Wheat",
           "unit": "kg",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850099,
       "rdb_id": 310,
       "parents_id": [
           {
               "id": 93519
           }
       ]
   },
   {
       "product_id": 93325,
       "name": "Sugar Cane",
       "details": {
           "parent_product": 303,
           "id": 317,
           "child_products": [
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_15",
                   "id": 311
               },
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_16",
                   "id": 312
               },
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_17",
                   "id": 313
               },
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_18",
                   "id": 314
               },
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_19",
                   "id": 315
               },
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_20",
                   "id": 316
               },
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_21",
                   "id": 317
               },
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_22",
                   "id": 318
               },
               {
                   "name": "Sugar Cane",
                   "company": "Supplier_23",
                   "id": 319
               }
           ],
           "name": "Sugar Cane",
           "unit": "kg",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850105,
       "rdb_id": 317,
       "parents_id": [
           {
               "id": 93524
           }
       ]
   },
   {
       "product_id": 93523,
       "rdb_id": 302,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 161,
               "company": {
                   "id": 135,
                   "name": "Supplier_5"
               },
               "name": "Supplier facility 5"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Wheat (from Storage)",
           "processes": [],
           "item_nr": "3234562343",
           "dummy": false,
           "description": null,
           "id": 302,
           "completeness": "0.80",
           "product_type": {
               "id": 19,
               "name": "Agricultural Product"
           },
           "created_on": "2018-03-29T07:28:22.706689Z",
           "modified_on": "2018-03-29T07:28:22.706724Z"
       },
       "created": 1522821850475,
       "filter": false,
       "name": "Wheat (from Storage)",
       "parents_id": [
           {
               "id": 93318
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93539,
       "rdb_id": 319,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 179,
               "company": {
                   "id": 153,
                   "name": "Supplier_23"
               },
               "name": "A Sugar cane farmer 23"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/4nxbxt93UP/4451d0c0b77b1ab8fe111c45f73ac391.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245248",
           "dummy": false,
           "description": null,
           "id": 319,
           "completeness": "0.80",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:38.503661Z",
           "modified_on": "2018-03-29T07:28:38.503694Z"
       },
       "created": 1522821850505,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93538,
       "rdb_id": 318,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 178,
               "company": {
                   "id": 152,
                   "name": "Supplier_22"
               },
               "name": "A Sugar cane farmer 22"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/agnquF99bx/e561719cea545ae2a0bf9bfbd6292c3e.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245247",
           "dummy": false,
           "description": null,
           "id": 318,
           "completeness": "0.80",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:36.959576Z",
           "modified_on": "2018-03-29T07:28:36.959608Z"
       },
       "created": 1522821850503,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93535,
       "rdb_id": 317,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 177,
               "company": {
                   "id": 151,
                   "name": "Supplier_21"
               },
               "name": "A Sugar cane farmer 21"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/YSfgYVVjnp/f48e80cb27d0b25194b6ee4f6e50017e.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245246",
           "dummy": false,
           "description": null,
           "id": 317,
           "completeness": "0.80",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:35.546854Z",
           "modified_on": "2018-03-29T07:28:35.546888Z"
       },
       "created": 1522821850497,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93534,
       "rdb_id": 316,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 176,
               "company": {
                   "id": 150,
                   "name": "Supplier_20"
               },
               "name": "A Sugar cane farmer 20"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/6czeKwXw2N/9b3512e419461abd4366ed82c52894ee.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245245",
           "dummy": false,
           "description": null,
           "id": 316,
           "completeness": "0.80",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:34.143079Z",
           "modified_on": "2018-03-29T07:28:34.143111Z"
       },
       "created": 1522821850495,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93537,
       "rdb_id": 315,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 175,
               "company": {
                   "id": 149,
                   "name": "Supplier_19"
               },
               "name": "A Sugar cane farmer 19"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/mGe5rqjMkk/f687ae7ec74d9e183d4596c7b81af8bb.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245244",
           "dummy": false,
           "description": null,
           "id": 315,
           "completeness": "0.60",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:32.626387Z",
           "modified_on": "2018-03-29T07:28:40.463562Z"
       },
       "created": 1522821850502,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93536,
       "rdb_id": 314,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 174,
               "company": {
                   "id": 148,
                   "name": "Supplier_18"
               },
               "name": "A Sugar cane farmer 18"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/tPL6Den7vQ/57b1298d6dbd3558b6264fec54c4628e.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245243",
           "dummy": false,
           "description": null,
           "id": 314,
           "completeness": "0.60",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:30.664969Z",
           "modified_on": "2018-03-29T07:28:40.196891Z"
       },
       "created": 1522821850499,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93540,
       "rdb_id": 313,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 173,
               "company": {
                   "id": 147,
                   "name": "Supplier_17"
               },
               "name": "A Sugar cane farmer 17"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/25YhkhQbRR/c40dc88c1968ee421b0969b250393577.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245242",
           "dummy": false,
           "description": null,
           "id": 313,
           "completeness": "0.60",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:28.933804Z",
           "modified_on": "2018-03-29T07:28:39.979724Z"
       },
       "created": 1522821850506,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93533,
       "rdb_id": 312,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 172,
               "company": {
                   "id": 146,
                   "name": "Supplier_16"
               },
               "name": "A Sugar cane farmer 16"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/J2B7karxuQ/5f81fd51b7399c6cecfb34e796026df5.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245241",
           "dummy": false,
           "description": null,
           "id": 312,
           "completeness": "0.80",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:27.244530Z",
           "modified_on": "2018-03-29T07:28:27.244564Z"
       },
       "created": 1522821850493,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93532,
       "rdb_id": 311,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 171,
               "company": {
                   "id": 145,
                   "name": "Supplier_15"
               },
               "name": "A Sugar cane farmer 15"
           },
           "filter": false,
           "thumbnail": "/backend/static/media/CACHE/images/attachments/img/JhvhTSNrDL/3daf624ea3a1d32d866ff492c329a34b.png",
           "name": "Sugar Cane",
           "processes": [],
           "item_nr": "4245245240",
           "dummy": false,
           "description": null,
           "id": 311,
           "completeness": "0.80",
           "product_type": {
               "id": 21,
               "name": "Raw Sugar Cane"
           },
           "created_on": "2018-03-29T07:28:25.365579Z",
           "modified_on": "2018-03-29T07:28:25.365639Z"
       },
       "created": 1522821850491,
       "filter": false,
       "name": "Sugar Cane",
       "parents_id": [
           {
               "id": 93325
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93324,
       "name": "Wheat Raw Material",
       "details": {
           "parent_product": 302,
           "id": 316,
           "child_products": [
               {
                   "name": "Wheat Raw Material",
                   "company": "Supplier_11",
                   "id": 307
               },
               {
                   "name": "Wheat Raw Material",
                   "company": "Supplier_12",
                   "id": 308
               },
               {
                   "name": "Wheat Raw Material",
                   "company": "Supplier_13",
                   "id": 309
               },
               {
                   "name": "Wheat Raw Material",
                   "company": "Supplier_14",
                   "id": 310
               }
           ],
           "name": "Wheat Raw Material",
           "unit": "kg",
           "product_type": {
               "id": 20,
               "name": "Agricultural Raw Material"
           },
           "quantity": 0.0,
           "reference_unit": "kg"
       },
       "created": 1522821850104,
       "rdb_id": 316,
       "parents_id": [
           {
               "id": 93523
           }
       ]
   },
   {
       "product_id": 93531,
       "rdb_id": 310,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 170,
               "company": {
                   "id": 144,
                   "name": "Supplier_14"
               },
               "name": "Supplier facility 14"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Wheat Raw Material",
           "processes": [],
           "item_nr": "711111113",
           "dummy": false,
           "description": null,
           "id": 310,
           "completeness": "0.86",
           "product_type": {
               "id": 20,
               "name": "Agricultural Raw Material"
           },
           "created_on": "2018-03-29T07:28:24.914478Z",
           "modified_on": "2018-03-29T07:28:24.914512Z"
       },
       "created": 1522821850489,
       "filter": false,
       "name": "Wheat Raw Material",
       "parents_id": [
           {
               "id": 93324
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93530,
       "rdb_id": 309,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 169,
               "company": {
                   "id": 143,
                   "name": "Supplier_13"
               },
               "name": "Supplier facility 13"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Wheat Raw Material",
           "processes": [],
           "item_nr": "611111112",
           "dummy": false,
           "description": null,
           "id": 309,
           "completeness": "0.86",
           "product_type": {
               "id": 20,
               "name": "Agricultural Raw Material"
           },
           "created_on": "2018-03-29T07:28:24.574491Z",
           "modified_on": "2018-03-29T07:28:24.574564Z"
       },
       "created": 1522821850487,
       "filter": false,
       "name": "Wheat Raw Material",
       "parents_id": [
           {
               "id": 93324
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93529,
       "rdb_id": 308,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 168,
               "company": {
                   "id": 142,
                   "name": "Supplier_12"
               },
               "name": "Supplier facility 12"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Wheat Raw Material",
           "processes": [],
           "item_nr": "511111111",
           "dummy": false,
           "description": null,
           "id": 308,
           "completeness": "0.86",
           "product_type": {
               "id": 20,
               "name": "Agricultural Raw Material"
           },
           "created_on": "2018-03-29T07:28:24.351173Z",
           "modified_on": "2018-03-29T07:28:24.351263Z"
       },
       "created": 1522821850486,
       "filter": false,
       "name": "Wheat Raw Material",
       "parents_id": [
           {
               "id": 93324
           }
       ],
       "dummy": false
   },
   {
       "product_id": 93528,
       "rdb_id": 307,
       "details": {
           "facility": {
               "facility_type": {
                   "id": 10,
                   "name": "Factory"
               },
               "id": 167,
               "company": {
                   "id": 141,
                   "name": "Supplier_11"
               },
               "name": "Supplier facility 11"
           },
           "filter": false,
           "thumbnail": null,
           "name": "Wheat Raw Material",
           "processes": [],
           "item_nr": "41111111",
           "dummy": false,
           "description": null,
           "id": 307,
           "completeness": "0.86",
           "product_type": {
               "id": 20,
               "name": "Agricultural Raw Material"
           },
           "created_on": "2018-03-29T07:28:24.014782Z",
           "modified_on": "2018-03-29T07:28:24.014844Z"
       },
       "created": 1522821850484,
       "filter": false,
       "name": "Wheat Raw Material",
       "parents_id": [
           {
               "id": 93324
           }
       ],
       "dummy": false
   }
],
    $productsSelect = $('select.products-select'),
    svg,
    DOWNSALE_TYPE = 'downsale',
    UPSALE_TYPE = 'upsale',
    SVG_WIDTH = 3000,
    SVG_HEIGHT = 800,
    SVG_MARGIN = {top: 20, right: 120, bottom: 20, left: 120},
    MARKER_CLASS_END = '_marker',
    UPSALE_MARKER_CLASS = "upsale",
    DOWNSALE_MARKER_CLASS =  "downsale",
    CLASS_TO_HIDE_ELEMENT = 'hidden',
    LINK_CLASS = 'link',
    NODE_CLASS = 'node',
    SPACE_BETWEEN_DEPTH_LEVELS = 180,
    TOP_DIRECTED_LINK_PATH_COORD = 0,
    BOTTOM_DIRECTED_LINK_PATH_COORD = 500,
    MARKER_CSS_STYLES = {
      viewBox: '0 -5 10 10',
      refX: 18,
      refY: 0,
      markerWidth: 6,
      markerHeight: 6,
      orient: 'auto'
    },
    CIRCLE_CSS_STYLES = {
      r: 10,
      fill: '#80abc8',
      fillOpacity: 1,
      text: {
        dy: '-1em',
        dx: {
          left: '13px',
          right: '-13px;'
        }
      }
    },
    renderOptions = {
      svgWidth: SVG_WIDTH,
      svgHeight: SVG_HEIGHT,
      svgMargin: SVG_MARGIN,
      classes: {
        classToHideElement: CLASS_TO_HIDE_ELEMENT,
        linkClass: LINK_CLASS,
        nodeClass: NODE_CLASS
      },
      spaceBetweenDepthLevels: SPACE_BETWEEN_DEPTH_LEVELS,
      topDirectedLinkPathCoord: TOP_DIRECTED_LINK_PATH_COORD,
      bottomDirectedLinkPathCoord: BOTTOM_DIRECTED_LINK_PATH_COORD,

      markerClassEnd: MARKER_CLASS_END,
      upsaleMarkerClass: UPSALE_MARKER_CLASS,
      downsaleMarkerClass: DOWNSALE_MARKER_CLASS + MARKER_CLASS_END,
      markerCssStyles: MARKER_CSS_STYLES,

      circleCssStyles: CIRCLE_CSS_STYLES
    };

  function GraphLink(params) {
    return {
      name: params.name || '--',
      parents_id: params.parents_id || null,
      type: UPSALE_TYPE,
      product_id: params.product_id
    };
  }

  function Node(params) {
    return {
      name: params.name || '--',
      parent: params.parent || null,
      type: UPSALE_TYPE
    };
  }
  function reduceArray(arr) {
    return arr.reduce(function (map, item) {
      map[item.product_id] =  item;
      return map;
    }, {});
  }

  function generateTree(realData) {
    var data = JSON.parse(JSON.stringify(realData)),
      dataMap = reduceArray(data),
      treeData = [];

    //Adding data-target attribute with id's of targets of every node
    data.forEach(function (node, index) {
      node.index = index;
      if (node.parents_id) {
        var parentLength = node.parents_id.length;
        node.parents_id.forEach(function (parentItem, index) {
          var parent = dataMap[parentItem.id];
          if (parentLength > 1) {
            if (index !== parentLength - 1) {
              if (!parent.data_targets_id) {
                parent.data_targets_id = [{id: node.product_id, type: UPSALE_TYPE}];
              } else {
                parent.data_targets_id.push({id: node.product_id, type: UPSALE_TYPE});
              }
              return;
            }
          }
          parent.children =  parent.children || [];
          node.type = UPSALE_TYPE;
          parent.children.push(node);
        });
      } else {
        treeData.push(node);
      }

    });

    function addEmptyNodes(node) {
      if (node.children) {
        //Should to add only 1 empty node
        node.children.forEach(function (child) {
          addEmptyNodes(child);
        });
      }
    }
    addEmptyNodes(treeData[0]);
    return treeData[0];
  }

  function drawNodes(nodes) {
    console.log(nodes);
    var i = 0,
      node = svg.selectAll("g.node")
        .data(nodes, function (d) {
          if (!d.id) {
            i += 1;
            d.id = i;
          }
          return d.id;
        });
    return node.enter().append("g")
      .attr("class", function (d) {
        var nodeClasses = renderOptions.classes.nodeClass;
        return nodeClasses;
      })
      .attr("data-index", function (d) {
        return d.index;
      })
      .attr("data-parent-index", function (d) {
        if (d.parent) {
          return d.parent.index;
        }
      })
      .attr("data-type", function (d) {
        return UPSALE_TYPE;
      })
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });
  }

  function drawLinks(links, nodes) {
    var diagonal = window.d3.svg.diagonal()
        .projection(function (d) {
          return [d.y, d.x];
        }),
      link,
      nodesMap,
      targets,
      maxTargetsCount;
    //Drawing links for one parent
    nodesMap = reduceArray(nodes);
    link = svg.selectAll("path.link")
      .data(links, function (d) {
        return d.target.id;
      });
    link.enter().insert("path", "g")
      .attr("class", function (d) {
        var linkClasses = renderOptions.classes.linkClass + " " + UPSALE_TYPE;
        if (d.source.data_targets_id) {
          targets = d.source.data_targets_id;
        }
        return linkClasses;
      })
      .attr("d", function (d) {
        return diagonal(d);
      })
      .attr("marker-end", function (d) {
        return "url(#" + d.target.type + renderOptions.markerClassEnd + ")";
      });


    maxTargetsCount = 0;

    //Adding links in case when it is several parents for one node
    function addSpecialParent(position) {
      link.enter().insert("path", "g")
        .attr("d", function (d) {
          if (d.source.data_targets_id) {
            targets = d.source.data_targets_id;
            var length = targets.length,
              sep = ',',
              newPath = '',
              path,
              pathDigitsMas,
              pathDigitsAndSpacesMas,
              spaceCoord;
            if (length > maxTargetsCount) {
              maxTargetsCount = length;
            }
            if (position < length) {
              d.target = nodesMap[targets[position].id];
            } else {
              return;
            }

            //Conputing to which direction will be directed bezier link: top or bottom
            path = diagonal(d);
            pathDigitsMas = path.match(/([0-9\.])+/g);
            pathDigitsAndSpacesMas = path.match(/([A-Za-z0-9_ \.])+/g);

            pathDigitsAndSpacesMas.forEach(function (word, index) {
              if (index !== 3) {
                newPath += word;
              } else {
                //if (targets[position].type === UPSALE_TYPE) {
                  //spaceCoord = renderOptions.topDirectedLinkPathCoord;
                //} else {
                  spaceCoord = renderOptions.bottomDirectedLinkPathCoord;
                //}
                newPath += spaceCoord + ' ' + pathDigitsMas[6];
              }
              if (index !== 4) {
                newPath += sep;
              }
            });

            return newPath;
          }
        })
        .attr("class", function (d) {
          if (d.source.data_targets_id) {
            targets = d.source.data_targets_id;
            if (position < targets.length) {
              return renderOptions.classes.linkClass + ' ' + targets[position].type;
            }
          }
        })
        .attr("marker-end", function (d) {
          if (d.source.data_targets_id) {
            targets = d.source.data_targets_id;
            if (position < targets.length) {
              return "url(#" + targets[position].type + renderOptions.markerClassEnd + ")";
            }
          }
        });

    }
    addSpecialParent(0);
    if (maxTargetsCount === 2) {
      addSpecialParent(1);
    }
  }

  function renderTree(root, nodeClickHandler) {
    var margin = renderOptions.svgMargin,
      width = renderOptions.svgWidth - margin.right - margin.left,
      height = renderOptions.svgHeight - margin.top - margin.bottom,
      tree,
      nodes,
      nodeGroup,
      links,
      nodesMap,
      isBackRelations;

    tree = window.d3.layout.tree()
      .size([height, width]);

    svg = window.d3.select(".graph-container").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    ////Append arrow
    svg.append("svg:defs").selectAll("marker")
      .data([renderOptions.upsaleMarkerClass, renderOptions.downsaleMarkerClass])
      .enter().append("svg:marker")
      .attr("id", String)
      .attr("class", String)
      .attr("viewBox", renderOptions.markerCssStyles.viewBox)
      .attr("refX", renderOptions.markerCssStyles.refX)
      .attr("refY", renderOptions.markerCssStyles.refY)
      .attr("markerWidth", renderOptions.markerCssStyles.markerWidth)
      .attr("markerHeight", renderOptions.markerCssStyles.markerHeight)
      .attr("orient", renderOptions.markerCssStyles.orient)
      .append("svg:path")
      .attr("d", "M0,-5L10,0L0,5");

    // Compute the new tree layout.
    nodes = tree.nodes(root).reverse();
    links = tree.links(nodes);

    nodesMap = reduceArray(nodes);

    function replaceNodeAndChildren(node, root, distance) {
      if (node.children) {
        node.children.forEach(function (child) {
          replaceNodeAndChildren(child, root, distance);
        });
      }
      node.y = (distance  + (node.depth - root.depth)) * renderOptions.spaceBetweenDepthLevels;
      node.depth = (distance  + (node.depth - root.depth));
    }

    // Normalize for fixed-depth.
    isBackRelations = false;

    nodes.forEach(function (d) {
      d.y = d.depth * renderOptions.spaceBetweenDepthLevels;
    });

    nodeGroup = drawNodes(nodes);

    nodeGroup.append("circle")
      .attr("r", renderOptions.circleCssStyles.r)
      .style("fill", renderOptions.circleCssStyles.fill);

    nodeGroup.append("text")
      .attr("x", function (d) {
        /*jslint nomen: true*/
        return d.children || d._children ? renderOptions.circleCssStyles.text.right : renderOptions.circleCssStyles.text.left;
      })
      .attr("dy", renderOptions.circleCssStyles.text.dy)
      .attr("text-anchor", function (d) {
        /*jslint nomen: true*/
        return d.children || d._children ? "end" : "start";
      })
      .text(function (d) { return d.name; })
      .style("fill-opacity", renderOptions.circleCssStyles.fillOpacity);

    drawLinks(links, nodes);

    $('.' + renderOptions.classes.nodeClass).on('click', nodeClickHandler);
  }

  function nodeClickHandler() {
    console.log("clicked a node");
  }

  renderTree(generateTree(linksData), nodeClickHandler);

}());