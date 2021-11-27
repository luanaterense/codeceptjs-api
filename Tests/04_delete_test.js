Feature("Validar delete em API");

Scenario("Validar delete", async ({ I }) => {
  var pet = "/pet/261291";
  var response = await I.sendDeleteRequest(pet);
});
