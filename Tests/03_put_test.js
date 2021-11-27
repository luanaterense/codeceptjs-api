Feature("Validar put API");

Scenario("Validar put", async ({ I }) => {
  var json = {
    id: 261291,
    category: {
      id: 261291,
      name: "Nina",
    },
    name: "Nina",
    photoUrls: ["string"],
    tags: [
      {
        id: 261291,
        name: "Nina",
      },
    ],
    status: "available",
  };

  var pet = "/pet";
  var response = await I.sendPutRequest(pet, json);
  I.assertEqual(200, response.status);
});
