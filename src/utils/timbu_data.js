import axios from "axios";

export const getAllProducts = () => {
  let products
  const organization_id = "e5b66405b71d44b58a1f36694e5d5489";
  const app_id = "RU083NB9JVH8J4Y";
  const api_key = "acea970f32b744da8f09eaecadb49a6020240713122926900475";

  axios
    .get(
      `/api/products?organization_id=${organization_id}&Appid=&${app_id}Apikey=${api_key}`
    )
    .then((response) => {
      products = response.data
    })
    .catch((error) => {
      console.error("There was an error fetching the data!");
    });
  
  return products.items
};

const dummy = {
  page: 1,
  size: 50,
  total: 30,
  debug: null,
  previous_page: null,
  next_page: null,
  items: [
    {
      name: "Ace Elec 20000 MAh Ultra Slim Portable Power Bank",
      description:
        "Alec Elec Power-Bank, PowerCore Slim 20000, Ultra Slim Portable Charger, Compact 20000mAh External Battery, High-Speed PowerIQ Charging Technology for Mobile phones, ipad, and more",
      unique_id: "PH197920P",
      url_slug: "ace-elec-20000-mah-ultra-slim-portable-power-bank",
      is_available: true,
      is_service: false,
      previous_url_slugs: null,
      unavailable: false,
      unavailable_start: null,
      unavailable_end: null,
      id: "7fc30aa1f3e14c14956d007b5cb56747",
      parent_product_id: null,
      parent: null,
      organization_id: "e5b66405b71d44b58a1f36694e5d5489",
      product_image: [],
      categories: [],
      date_created: "2024-07-13T13:12:13",
      last_updated: "2024-07-13T13:12:53",
      user_id: "8c742f839eb840e5b96ee577dbb3c732",
      photos: [
        {
          model_name: "products",
          model_id: "7fc30aa1f3e14c14956d007b5cb56747",
          organization_id: "e5b66405b71d44b58a1f36694e5d5489",
          filename: "3ef91707793d4cc8a9b162bb65c27241.jpg",
          url: "phlox-electronics/product_ace_elec_20000_mah_ultra_slim_portable_power_bank_0015c8_1.jpg",
          is_featured: false,
          save_as_jpg: true,
          is_public: true,
          file_rename: false,
          position: 1,
        },
      ],
      current_price: [
        {
          NGN: [8500.0, null, []],
        },
      ],
      is_deleted: false,
      available_quantity: 100.0,
      selling_price: null,
      discounted_price: null,
      buying_price: null,
      extra_infos: null,
    },
  ],
};
