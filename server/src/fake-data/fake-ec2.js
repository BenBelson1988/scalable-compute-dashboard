const { faker } = require("@faker-js/faker");

const makeFakeEC2 = (amount = 50000) => {
  if ((amount < 1) | (amount > 50001))
    return "The requested amount of EC2 should be between 1 to 50000";
  const ec2Arr = [];
  for (let i = 0; i < amount; i++) {
    ec2Arr.push({
      name: faker.name.findName(),
      id: `${faker.helpers
        .replaceSymbols("?")
        .toLowerCase()}-${faker.helpers.replaceSymbolWithNumber(
        "#####"
      )}${faker.helpers.replaceSymbols("?????").toLowerCase()}`,
      type: `${faker.random.arrayElement([
        "A1",
        "C5",
        "C5a",
        "C5ad",
        "C5d",
        "C5n",
        "C6a",
        "C6g",
        "C6gd",
        "C6gn",
        "C6i",
        "D3",
        "D3en",
        "DL1",
        "G4",
        "G4ad",
        "G5",
        "G5g",
        "Hpc6a",
        "I3en",
        "Im4gn",
        "Inf1",
        "Is4gen",
        "M5",
        "M5a",
        "M5ad",
        "M5d",
        "M5dn",
        "M5n",
        "M5zn",
        "M6a",
        "M6g",
        "M6gd",
        "M6i",
        "p3dn",
        "P4",
        "R5",
        "R5a",
        "R5ad",
        "R5b",
        "R5d",
        "R5dn",
        "R5n",
        "R6g",
        "R6gd",
        "R6i",
        "T3",
        "T3a",
        "T4g",
      ])}.${faker.random.arrayElement([
        "nano",
        "micro",
        "small",
        "medium",
        "large",
        "xlarge",
        "2xlarge",
      ])}`,
      state: faker.random.arrayElement([
        "pending",
        "running",
        "rebooting",
        "shutting-down",
        "terminated",
        "stopped",
        "stopping",
      ]),
      az: faker.random.arrayElement([
        "us-east-2",
        "us-east-1",
        "us-west-1",
        "us-west-2",
        "eu-west-3",
        "eu-north-1",
        "eu-south-1",
        "me-south-1",
        "sa-east-1",
        "us-gov-west-1",
        "us-gov-east-1",
        "af-south-1",
        "ap-east-1",
        "ap-south-1",
        "ap-northeast-3",
        "ap-northeast-2",
        "ap-southeast-1",
        "ap-southeast-2",
        "ap-northeast-1",
        "ca-central-1",
        "cn-north-1",
        "cn-northwest-1",
      ]),
      publicIP: faker.internet.ip(),
      privateIP: faker.random.arrayElement([
        `10.${faker.datatype.number({ max: 255 })}.${faker.datatype.number({
          max: 255,
        })}.${faker.datatype.number({ max: 255 })}`,
        `172.${faker.datatype.number({
          min: 16,
          max: 31,
        })}.${faker.datatype.number({
          max: 255,
        })}.${faker.datatype.number({ max: 255 })}`,
        `192.168.${faker.datatype.number({
          max: 255,
        })}.${faker.datatype.number({ max: 255 })}`,
      ]),
    });
  }

  return ec2Arr;
};

module.exports = { makeFakeEC2 };
