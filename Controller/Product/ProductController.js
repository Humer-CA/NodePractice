const Product = require("../../models/productModel");

exports.getProducts = async (req, res) => {
  const { search, page = 1, perPage = 5, status } = req.query;

  try {
    const total = await Product.countDocuments({ status: status });
    const product = await Product.find({ status: status }).limit(5);

    res.status(200).json({ product, perPage, page, total });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

exports.archiveProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndUpdate(id);
    product.status = !product.status;

    product.save();
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};
// app.get("/node", (req, res) => {
//   res.send("Hello World of NODE with nodemon");
// });

// app.get("/product", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.post("/product", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: err.message });
//   }
// });

// app.put("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "cannot find the id" });
//     }

//     res.status(200).json({ message: "Successfully Updated" });

//     // const updatedProduct = await Product.findById(id);
//     // res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
