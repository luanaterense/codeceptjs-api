const { ConsoleMessage } = require("puppeteer");

Feature("Validar get em API");

var endpoint = "/pet/261291";
var response;

Scenario("Executar request", async ({ I }) => {
  //Enviando o request
  response = await I.sendGetRequest(endpoint);
});

Scenario("Validar se status é igual a 200", async ({ I }) => {
  //Enviando o request
  response = await I.sendGetRequest(endpoint);

  //Validação do status do request
  I.assertEqual(200, response.status);
  console.log("O status de retorno é " + response.status);
});

Scenario("Validar se informações carregadas estão corretas", async ({ I }) => {
  //Enviando o request
  response = await I.sendGetRequest(endpoint);

  //Validação das informações carregadas
  I.assertEqual(261291, response.data.category.id);
  I.assertEqual("Nina", response.data.category.name);
  I.assertEqual("string", response.data.photoUrls[0]);
  I.assertEqual(261291, response.data.tags[0].id);
  I.assertEqual("Nina", response.data.tags[0].name);
  I.assertEqual("available", response.data.status);

  console.log("O id da categoria carregado é: " + response.data.category.id);
  console.log(
    "O nome da categoria carregado é: " + response.data.category.name
  );
  console.log("A URL da foto carregada é: " + response.data.photoUrls[0]);
  console.log("O id da tag carregada é: " + response.data.category.id);
  console.log("O status do pet carregado é: " + response.data.status);
  console.log("O nome da tag carregada é: " + response.data.tags[0].name);
});
