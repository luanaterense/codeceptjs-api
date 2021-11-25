Feature("Validar API");

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

Scenario("Validar get", async ({ I }) => {
    var pet = "/pet/261291";
    var response = await I.sendGetRequest(pet);
    I.assertEqual("Nina", response.data.name);
  });

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

Scenario("Validar delete", async ({ I }) => {
    var pet = "/pet/261291";
    var response = await I.sendDeleteRequest(pet);
  });
