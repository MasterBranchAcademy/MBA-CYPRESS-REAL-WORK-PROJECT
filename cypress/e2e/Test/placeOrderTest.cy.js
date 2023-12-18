import LOCATORS from "../../support/locators";
import CartPage from "../Page/CartPage";
import CheckoutPage from "../Page/CheckoutPage";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import PaymentPage from "../Page/PaymentPage";
import SignupPage from "../Page/SignupPage";

describe("Place Order", () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const signupPage = new SignupPage
    const cartPage = new CartPage
    const checkoutPage = new CheckoutPage
    const paymentPage = new PaymentPage
    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })

    afterEach(() => {
        cy.visit('/')
        cy.deleteAccount();
    });
    it("Kullanici Odeme Yaparken Hesap Olusturabilmeli ", () => {
        homePage.visitPage();
        cy.title().should("eq", user.home.title);
        cy.get(LOCATORS.ADD_TO_CART.PRODUCT_1).contains("Add to cart").should("be.visible");
        cy.get(LOCATORS.ADD_TO_CART.PRODUCT_1).contains("Add to cart").click();
        cy.get(LOCATORS.ADD_TO_CART.WIEW_RECOMMENDCART).contains("View Cart").click();
        cartPage.getShoppingCartText().should("be.visible");
        cartPage.clickToCheckoutBtn();
        cartPage.clickToModalRegisterLoginBtn();
        loginPage.signUp(user);
        signupPage.createAccount(user);
        cy.getByDataQa(LOCATORS.SIGNUP_PAGE.ACCOUNT_CREATED).should('be.visible')
        cy.getByDataQa(LOCATORS.SIGNUP_PAGE.CONTINUE_BTN).click()
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER,LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should("be.visible");
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER, LOCATORS.HOME_PAGE.CART_BTN).click();
        cartPage.clickToCheckoutBtn();
        checkoutPage.verifyAddressDetails(user)
        checkoutPage.reviewOrder(LOCATORS.CHECKOUT_PAGE.REVIEW_ORDER.PRODUCT_1, 'Blue Top')
        checkoutPage.typeTextInCommentArea('Thank you')
        checkoutPage.clickToPlaceOrderBtn()
        paymentPage.enterPaymentDetails(user.userInfo.userName, '12345678913','123', '05', '2023')
        paymentPage.clickToPayBtn()
        // Burada mesaji alabilmem için click'ten sonra pause yapmam gerekiyor
        //paymentPage.getSuccessTextMessage().should('contain','Your order has been placed successfully!' )
        cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CONFIRM_MESSAGE).should('be.visible')
    })
     it("Kullanici odeme yapmadan once kayit yapmali", () => {
        homePage.visitPage()
        cy.title().should('eq', user.home.title)
        signupPage.clickLogin_SignupBtn()
        cy.contains(user.loginPage.newUserText).should('be.visible')
        loginPage.signUp(user)
        cy.contains(user.signUpPage.enterAccountText).should('be.visible')
        signupPage.createAccount(user)
        signupPage.accountCreatedText().should('be.visible')
        signupPage.clickContinueBtn()
        cy.contains(user.home.loggedUserNameText).should('be.visible')
        homePage.clickProduct_1()
        homePage.clickView_CartBtn()
        cy.contains(user.productPage.productName).should('contain', 'Blue Top')
        paymentPage.clickProceedToCheckoutBtn()
        cy.contains(user.paymentPage.addressDetails).should('be.visible')
        cy.contains(user.paymentPage.reviewYourOrder).should('be.visible')
        paymentPage.descriptionComment(user)
        paymentPage.clickPlaceOrderBtn()
        paymentPage.detailOfPayment(user)
        paymentPage.clickPayAndConfirmBtn()
        cy.contains(user.paymentPage.confirmText).should('be.visible')
})
})


