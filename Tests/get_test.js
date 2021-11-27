Feature("Validar get em API");

Scenario("Validar get", async ({ I }) => {
  var pet = "/pet/261291";
  var response = await I.sendGetRequest(pet);
  I.assertEqual("Nina", response.data.name);
});
