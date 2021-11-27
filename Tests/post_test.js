Feature("Validar post em API");

Scenario("Validar post", async ({ I }) => {
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
  var response = await I.sendPostRequest(pet, json);
  I.assertEqual(200, response.status);
});
