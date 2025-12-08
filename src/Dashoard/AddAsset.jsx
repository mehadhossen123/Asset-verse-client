import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../Hooks/useAxios";

const AddAsset = () => {
    const axios=useAxios()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = async (data) => {
    console.log(data);
    //  Upload product image
    const productImage = data.companyLogo[0];
    const formData1 = new FormData();
    formData1.append("image", productImage);

    const image_api_url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_API_KEY
    }`;

    const profileRes = await axios.post(image_api_url,formData1);
    const productImageUrl= profileRes.data.data.display_url;
    const productInfo = {
      productName: data.productName,
      productImage: productImageUrl,
      productType:data.productType,
      productQuantity:data.productQuantity,

    };
    await axios.post("")
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-8 p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-5 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-3">
          {/* Product Name */}
          <div>
            <label className="text-sm font-medium">Product Name</label>
            <input
              type="text"
              {...register("productName", { required: true })}
              className="w-full p-2 border rounded-md mt-1 text-sm"
              placeholder="Enter product name"
            />
            {errors.productName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Product Image */}
          <div>
            <label className="text-sm font-medium mb-1">Product Image</label>
            <input
              {...register("productImage", { required: true })}
              type="file"
              className="file-input file-input-primary w-full"
            />
            {errors.productImage && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Product Type */}
          <div>
            <label className="text-sm font-medium">Product Type</label>
            <select
              {...register("productType", { required: true })}
              name="productType"
              className="w-full p-2 border rounded-md mt-1 text-sm"
            >
              <option value="">Select Type</option>
              <option value="Returnable">Returnable</option>
              <option value="Non-returnable">Non-returnable</option>
            </select>
            {errors.productType && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Product Quantity */}
          <div>
            <label className="text-sm font-medium">Product Quantity</label>
            <input
              type="number"
              {...register("productQuantity", { required: true })}
              className="w-full p-2 border rounded-md mt-1 text-sm"
              placeholder="Enter quantity"
            />
            {errors.productQuantity && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Company Name */}
          {/* <div>
              <label className="text-sm font-medium">Company Name</label>
              <input
                type="text"
                name="companyName"
                className="w-full p-2 border rounded-md mt-1 text-sm"
                placeholder="Enter company name"
                required
              />
            </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white mt-3 py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
