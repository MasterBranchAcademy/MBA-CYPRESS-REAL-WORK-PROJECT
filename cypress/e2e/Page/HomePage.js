import LOCATORS from "../../support/locators"

class HomePage {

    visitPage() {
        cy
            .visit("/")
    }

}
export default HomePage