const LOCATORS = {
  EXAMPLE_PAGE: {
    EXAMPLE: ".example",
  },

  HOME_PAGE: {
    LOGIN_BTN: 'a[href="/login"]',
    HEADER: "#header",
  },

  LOGIN_PAGE: {
    SIGNUP_NAME: "signup-name",
    SIGNUP_EMAIL: "signup-email",
    SIGNUP_BTN: "signup-button",

    LOGIN_EMAIL: "login-email",
    LOGIN_PASSWORD: "login-password",
    LOGIN_BTN: "login-button",
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

    LOGGED_AS_TEXT: "li:nth-child(10) > a",
  },
  DELETE_PAGE: {
    DELETE_ACCOUNT_BTN: "li:nth-child(5) > a",
    ACCOUNT_DELETED_TEXT: "account-deleted",
    CONTINUE_BTN: "continue-button",
  },
  PAYMENT_PAGE: {
    ADD_TO_CART_BTN: "div:nth-child(11) > div > div.single-products > div.product-overlay > div > a",
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
  },
};
export default LOCATORS;
