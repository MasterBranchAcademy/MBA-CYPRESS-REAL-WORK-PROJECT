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

  CONTACT_US_PAGE:{
    CONTACT_US_BTN:'a[href="/contact_us"]',
    GET_IN_TUCH_TEXT:"h2.title.text-center:nth-child(2)",
    NAME: "[data-qa='name']",
    EMAIL: "[data-qa='email']",
    SUBJECT: "[data-qa='subject']",
    MESSAGE: "[data-qa='message']",
    UPLOAD_FILE: '[name="upload_file"]',
    SUBMIT_BTN: '[name="submit"]',
    SUCCESS : '[class="status alert alert-success"]',
    HOME :'[class="fa fa-angle-double-left"]',
    HOMEVISIBLE :'[class="fa fa-home"]'

  }
};
export default LOCATORS;
