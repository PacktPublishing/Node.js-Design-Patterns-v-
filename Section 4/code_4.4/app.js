const MobilePhone = require("./MobilePhone");
const Laptop = require("./Laptop");
const Catalog = require("./Catalog");

// Phones
const iPhoneXS = new MobilePhone("Apple iPhone XR", "White", 89000);
const OnePlus6t = new MobilePhone("OnePlus 6T", "Midnight Black", 46000);
const GalaxyM20 = new MobilePhone("Samsung Galaxy M20", "Ocean Blue", 12000);
// Phone Catalog
const Phones = new Catalog("** Mobile Phones **");
Phones.add(iPhoneXS).add(OnePlus6t).add(GalaxyM20);

// Laptops
const MacbookPro = new Laptop("Apple", "Macbook Pro 13", 150000);
const DellInspiron = new Laptop("Dell", "Inspiron 5370", 63000);
// Laptop Catalog
const Laptops = new Catalog("** Laptops **");
Laptops.add(MacbookPro).add(DellInspiron);

//Laptops.getDetails();

// Shopping Catalog
const PrimeProducts = new Catalog("*** Prime Products 2019 ***");
PrimeProducts.add(Phones).add(Laptops);

PrimeProducts.getDetails();