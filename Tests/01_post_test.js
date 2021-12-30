Feature("Validar post de pet em API");

const fs = require("fs");

Scenario("Validar post", async ({ I }) => {
  let new_pet = fs.readFileSync("./Files/new_pet.json");
  let json = JSON.parse(new_pet);

  var pet = "/pet";

  var response = await I.sendPostRequest(pet, json);

  I.assertEqual(200, response.status);
});
