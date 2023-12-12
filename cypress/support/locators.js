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

  PRODUCT_PAGE: {
    PRODUCT_BTN: "header#header li:nth-child(2) > a",
    ALL_PRODUCT: ".title.text-center",
    VIEW_PRODUCT_BTN: "a[href='/product_details/1']",
    REVIEW_TEXT: "div.col-sm-12 > ul > li > a",
    NAME_BOX: "#name",
    EMAIL_BOX: "#email",
    TEXT_AREA: "textarea#review",
    SUBMIT_BTN: "#button-review",
    VERIFYING: "div#review-section div > div"
  },

  CART_PAGE: {
    CART_BTN: "header#header li:nth-child(3) > a",
    SUBSCRITION_TEXT: "footer#footer h2",
    EMAIL_BOX: "#susbscribe_email",
    SUBSCRITION_BTN: "#subscribe",
    VERIFY_TEXT: "#success-subscribe"
  }

};
export default LOCATORS;
