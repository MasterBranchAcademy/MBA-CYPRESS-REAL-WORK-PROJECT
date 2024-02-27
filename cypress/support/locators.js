const LOCATORS = {
  EXAMPLE_PAGE: {
    EXAMPLE: ".example",
  },
  TESTCASES_PAGE: {
    TESTCASES_TEXT: ".text-center>b",
  },
  HOME_PAGE: {
    LOGIN_BTN: 'a[href="/login"]',
    HEADER: "#header",
    PRODUCTS_BTN: '[href="/products"]',//t
    CART_BUTTON: 'header#header li:nth-child(3) > a',
    LOGOUT_BTN: 'header#header li:nth-child(4) > a',
    SUBSCRIPTION_TEXT: ".single-widget",
    INPUT_BOX_FOR_EMAIL: "#susbscribe_email",
    ARROW_BTN: "#subscribe",
    SUCCESS_SUBS_MSG_: ".alert-success.alert",
    CART_BTN: "a[href='/view_cart']",
    CATEGORY: " .left-sidebar>h2",
    WOMEN: ' [data-parent="#accordian"]',
    DRESS: '[href="/category_products/1"]',
    TEST_CASES_BTN: '.nav > li > a[href="/test_cases"]',
  },
  LOGIN_PAGE: {
    SIGNUP_NAME: "signup-name",
    SIGNUP_EMAIL: "signup-email",
    SIGNUP_BTN: "signup-button",
    LOGIN_EMAIL: "login-email",
    LOGIN_PASSWORD: "login-password",
    LOGIN_BTN: "login-button",
    LOGIN_ERROR_MESSAGE: '[style="color: red;"]',
    LOGIN_ACCOUNT_TEXT: ".login-form > h2",
    NEW_USER_TEXT: ".signup-form > h2",
    LOGGED_AS_TEXT: "li:nth-child(10) > a",
  },
  SIGNUP_PAGE: {
    TITLE: "title",
    GENDER_MR: "#id_gender1",
    GENDER_MRS: "#id_gender2",
    NAME: "name",
    PASSWORD: "password",
    DAYS: "days",
    MONTHS: "months",
    YEARS: "years",
    NEWSLETTER: "#newsletter",
    PARTNERS: "#optin",
    FIRST_NAME: "first_name",
    LAST_NAME: "last_name",
    COMPANY: "company",
    ADDRESS1: "address",
    ADDRESS2: "address2",
    COUNTRY: "country",
    STATE: "state",
    CITY: "city",
    ZIPCODE: "zipcode",
    MOBILE_NUMBER: "mobile_number",
    CREATE_ACCOUNT_BTN: "create-account",
    ENTER_ACCOUNT_TEXT: ".login-form > h2  b",
    ACCOUNT_CREATED: "account-created",
    CONTINUE_BTN: "continue-button",
  },
  New_User_Signup: {
    NAME:"signup-name",
    EMAIL_ADDRESS:"signup-email",
    SINGUP_BOTUN:"signup-button",
  },
  DELETE_PAGE: {
    DELETE_ACCOUNT_BTN: "li:nth-child(5) > a",
    ACCOUNT_DELETED_TEXT: "account-deleted",
    CONTINUE_BTN: "continue-button",
  },

  PRODUCT_PAGE: {
    PRODUCT_BTN: "header#header li:nth-child(2) > a",//
    ALL_PRODUCT: ".title.text-center",
    VIEW_PRODUCT_BTN: "a[href='/product_details/1']",//t
    REVIEW_TEXT: "div.col-sm-12 > ul > li > a",
    NAME_BOX: "#name",
    EMAIL_BOX: "#email",
    TEXT_AREA: "textarea#review",
    SUBMIT_BTN: "#button-review",
    VERIFYING: "div#review-section div > div",
    SEARCH_BOX: "#search_product",
    ALL_PRODUCTS_TEXT: "h2.title",
    SEARCH_ITEM: "#submit_search",
    SEARCHED_PRODUCTS_TEXT: "h2.title.text-center",
    FIRST_PRODUCT_NAME: "div.col-sm-7 > div > h2",
    FIRST_PRODUCT_PRICE: "span > span",//t
    FIRST_PRODUCT_AVAILABILITY: "p:nth-child(6) > b",
    FIRST_PRODUCT_CONDITION: "p:nth-child(7)",
    FIRST_PRODUCT_BRAND: "p:nth-child(8) > b"
  },

  CART_PAGE: {
    CART_BTN: "header#header li:nth-child(3) > a",
    SUBSCRITION_TEXT: "footer#footer h2",
    EMAIL_BOX: "#susbscribe_email",
    SUBSCRITION_BTN: "#subscribe",
    VERIFY_TEXT: "#success-subscribe",
    CART_DESCRIPTION: 'section#cart_items > div',
    LOGIN_BTN_CART_PAGE: "header#header li:nth-child(4) > a",
    SHOPPING_CART_TEXT: "#cart_items li.active",
    CHECKOUT_BTN: "#do_action div > a",
    CHECKOUT_MODAL_REGISTER_LOGIN_BTN: "#checkoutModal u",
    X_BUTTON: ".cart_quantity_delete",
  },
  REMOVE_PRODUCT_PAGE: {
    ADD_TO_CART_BTN:
      "div:nth-child(11) > div > div.single-products > div.product-overlay > div > a",//tekrar ramazan h disinda kullanildimi
    CONTINUE_SHOPPING: ".modal-footer",//t
    CART_BTN: "header#header li:nth-child(3) > a",//t ''
    X_BUTTON: ".cart_quantity_delete",//product page de olmali ''
  },

  PAYMENT_PAGE: {
    ADD_TO_CART_BTN:
      "div:nth-child(11) > div > div.single-products > div.product-overlay > div > a",
    CONTINUE_SHOPPING: ".modal-footer",
    CART_BTN: "header#header li:nth-child(3) > a",
    PROCEED_TO_CHECKOUT_BTN: "section#do_action div > a",
    DESCRIPTION_FORM: ".form-control",
    PLACE_ORDER_BTN: "section#cart_items div:nth-child(7) > a",
    NAME_ON_CARD: "name-on-card",
    CARD_NUMBER: "card-number",
    CVC_NUMBER: "cvc",
    EXPIRATION_MONTH: "expiry-month",
    EXPIRATION_YEAR: "expiry-year",
    PAY_AND_CONFIRM_ORDER_BTN: "pay-button",
    SUCCESS_MESSAGE: "#success_message > div",
    CONFIRM_MESSAGE: "order-placed",
    PRODUCT_1_PRICE: "#product-1 .cart_price",//t
    PRODUCT_2_PRICE: "#product-2 .cart_price",//t
    PRODUCT_1_QUANTITY: "#product-1 .disabled",//t
    PRODUCT_2_QUANTITY: "#product-2 .disabled",//t
    PRODUCT_1_TOTAL: "#product-1 .cart_total_price",//t
    PRODUCT_2_TOTAL: "#product-2 .cart_total_price",//t
    RECOMENDED_ITEMS: ".recommended_items",//t
    ADD_RECOMENDED: ".recommended_items .item.active .add-to-cart",//t
    WIEW_RECOMMENDCART: "#cartModal u",//t
    CART_PRODUCT: "#product-4 h4 > a",//t
  },
  ADD_TO_CART: {
    PRODUCTS: '[href="/products"]',
    PRODUCT_1: '[data-product-id="1"]',
    PRODUCT_2: '[data-product-id="2"]',
    COUNTINUE_SHOPPING: ".btn.btn-success.close-modal.btn-block",
    WIEW_CART: '[class="text-center"] a',
    PRODUCT_1_PRICE: "#product-1 .cart_price",
    PRODUCT_2_PRICE: "#product-2 .cart_price",
    PRODUCT_1_QUANTITY: "#product-1 .disabled",
    PRODUCT_2_QUANTITY: "#product-2 .disabled",
    PRODUCT_1_TOTAL: "#product-1 .cart_total_price",
    PRODUCT_2_TOTAL: "#product-2 .cart_total_price",
    RECOMENDED_ITEMS: ".recommended_items",
    ADD_RECOMENDED: ".recommended_items .item.active .add-to-cart",
    VIEW_RECOMMENDCART: "#cartModal u",
    CART_PRODUCT: "#product-4 h4 > a",
    PROCEED_TO_CHECKOUT_BTN: '.col-sm-6 .btn',
  
  },
  CHECKOUT_PAGE: {
    DELIVERY_ADDRESS: {
      FIRST_NAME_LAST_NAME:
        "#address_delivery > li.address_firstname.address_lastname",
      ADDRESS1_ADDRESS2: "#address_delivery > li:nth-child(4)",
      CITY_STATE_POSTCODE:
        "address_delivery > li.address_city.address_state_name.address_postcode",
      COUNTRY: "#address_delivery > li.address_country_name",
      PHONE: "#address_delivery > li.address_phone",
    },
    REVIEW_ORDER: {
      PRODUCT_1: "#product-1",//?
      PRODUCT_TITLE: "h4 > a",
      PRODUCT_PRICE: "td.cart_price > p",
      QUANTITY: "button",
      TOTAL: "td.cart_total > p",
    },
    COMMENT_TEXT_AREA: "#ordermsg > textarea",
    PLACE_ORDER_BTN: "#cart_items a[href='/payment']",
  },
  BRANDS: {//buyuk yazildi
    PRODUCTS_BTN: '[href="/products"]',//tekrar add to carttan alndi
    BRANDS_SIDEBAR: ".brands_products",
    BRANDS_POLO_LINK: '[href="/brand_products/Polo"]',
    BRANDS_PRODUCTS: ".brand-products",
    VERIFY_BRAND_POLO: '[href="/product_details/1"]',
    BRANDS_HM_LINK: '[href="/brand_products/H&M"]',
    VERIFY_BRAND_HM: '[href="/product_details/6"]',
  },
  CONTACT_US_PAGE: {
    CONTACT_US_BTN: 'a[href="/contact_us"]',
    GET_IN_TOUCH_TEXT: "h2.title.text-center:nth-child(2)",  //TOUCH 
    NAME: "[data-qa='name']",
    EMAIL: "[data-qa='email']",
    SUBJECT: "[data-qa='subject']",
    MESSAGE: "[data-qa='message']",
    UPLOAD_FILE: '[name="upload_file"]',
    SUBMIT_BTN: '[name="submit"]',
    SUCCESS: '[class="status alert alert-success"]',
    HOME: '[class="fa fa-angle-double-left"]',
    HOMEVISIBLE: '[class="fa fa-home"]'
  },
  PAGE_SCROLL: {
    SUBSCRIPTION_TEXT: '.single-widget h2',
    HOMETEXT: '#slider-carousel > div > div:nth-child(3) > div:nth-child(1) > h2',
    ARROW_BTN: '[class="fa fa-angle-up"]'
  },
  PRODUCT_QUANTITY: {
    VIEW_PRODUCT: "[href='/product_details/1']",
    ADD_TO_CART_BUTTON: "[type=button]",
    VIEW_CART_BUTTON: "[href='/view_cart']>u",
    QUANTITY_DETAIL: "#product-1 button",
  },
  CATEGORY: {
    PRODUCTS: "div .breadcrumbs .active",
    JEANS: '[href="/category_products/6"]',
  }

}
export default LOCATORS;
