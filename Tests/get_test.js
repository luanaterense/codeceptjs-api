const { ConsoleMessage } = require("puppeteer");

Feature("Validar get em API");

Scenario("Validar get", async ({ I }) => {
  //Informando endpoint
  var pet = "/pet/261291";

  //Enviando o request
  var response = await I.sendGetRequest(pet);

  //Validação do status do request
  I.assertEqual(200, response.status);
  console.log("O status de retorno é " + response.status);

  //Validação das informações carregadas
  I.assertEqual(261291, response.data.category.id);
  I.assertEqual("Nina", response.data.category.name);
  I.assertEqual("string", response.data.photoUrls[0]);
  I.assertEqual(261291, response.data.tags[0].id);
  I.assertEqual("Nina", response.data.tags[0].name);
  I.assertEqual("available", response.data.status);
});
