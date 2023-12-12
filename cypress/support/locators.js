const LOCATORS = {
  EXAMPLE_PAGE: {
    EXAMPLE: ".example",
  },

  HOME_PAGE: {
    LOGIN_BTN: 'a[href="/login"]',
    HEADER: "#header",
    PRODUCTS_BTN: '[href="/products"]',
  },

  LOGIN_PAGE: {
    SIGNUP_NAME: "signup-name",
    SIGNUP_EMAIL: "signup-email",
    SIGNUP_BTN: "signup-button",

    LOGIN_EMAIL: "login-email",
    LOGIN_PASSWORD: "login-password",
    LOGIN_BTN: "login-button",

    NEW_USER_TEXT: ".signup-form > h2",
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
  PRODUCTS_PAGE: {
    SEARCH_BOX: "#search_product",
    ALL_PRODUCTS_TEXT: "h2.title",
    SEARCH_ITEM: "#submit_search",
    SEARCHED_PRODUCTS_TEXT: "h2.title.text-center"
  },
}
export default LOCATORS;
