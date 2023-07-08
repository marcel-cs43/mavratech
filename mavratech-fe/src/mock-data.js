import categoryImage1 from "./assets/category1.jpeg";
import categoryImage2 from "./assets/category2.jpg";
import serviceImage1 from "./assets/service1.jpg";

export const categories = [{
    id: "1",
    name: "Category1",
    description: "Toto je categoria 1",
    services: ["10", "11"],
    imageUrl: categoryImage1,
},{
    id: "2",
    name: "Category2",
    description: "Toto je categoria 2",
    services: ["9"],
    imageUrl: categoryImage2,
}];

export const services = [{
    id: "9",
    name: "Service1",
    description: "Toto je service 1",
    imageUrl: serviceImage1
},{
    id: "10",
    name: "Service2",
    description: "Toto je service 2",
    imageUrl: serviceImage1
},{
    id: "11",
    name: "Service3",
    description: "Toto je service 3",
    imageUrl: serviceImage1
}
];