describe("test for sprint", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })

    const textTest = () => cy.get("input[name='specialIn']")
    const pizzaTest = () => cy.get(`a[id="pressMe"]`)
    const toppingPep = () => cy.get("input[name=pepperoni]")
    const toppingbacon = () => cy.get("input[name=bacon]")
    const toppingextCheese = () => cy.get("input[name=extraCheese]")
    const submitTest = () => cy.get('button[id="submitPizza"]')

    it("text test", () => {



        pizzaTest()
        .click();

        toppingPep().click();
        toppingbacon().click();
        toppingextCheese().click();


        textTest()
        .type('test')
        .should("have.value", 'test')

        submitTest().click();
    
        })












})


