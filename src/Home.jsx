import React from "react";
import { faker } from "@faker-js/faker";

const Home = () => {
  const products = [];

  for (let i = 0; i < 10; i++) {
    products.push({
      id: i + 1,
      label: faker.company.buzzPhrase(),
      image: faker.image.urlPicsumPhotos({ height: 128 , width : 300}),
      price: faker.number.int({ max: 100 }),
      qteStock: faker.number.int({ max: 10 }), // Random stock quantity
    });
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                alt={product.label}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.label}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Stock: {product.qteStock}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
