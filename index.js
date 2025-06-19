const input = prompt("Please enter your favorite froyo flavors: ");

const flavors = input.split(",");

function countFlavors(flavors) {
  const froyo = {};

  for (const flavor of flavors) {
    const flavorsFroyo = flavor.trim().toLowerCase();
    if (froyo[flavorsFroyo]) {
      froyo[flavorsFroyo] += 1;
    } else {
      froyo[flavorsFroyo] = 1;
    }
  }
  return froyo;
}

console.log(countFlavors(flavors));

const flavorCount = countFlavors(flavors);

function convertToTable(object) {
  console.table(object);
}

convertToTable(flavorCount);
