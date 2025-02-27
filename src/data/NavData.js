var NavData = [
  { name: "Công ty", path: "/company" },
  {
    name: "Sản phẩm",
    path: "/products",
    children: [
      { name: "đồ sự kiện", path: "/products/do-su-kien" },
      { name: "suit", path: "/products/suit" },
      // { name: "Áo Gilet", path: "/products/ao-gilet" },
      { name: "Quần", path: "/products/quan" },
      { name: "Áo sơ mi", path: "/products/ao-so-mi" },
      // { name: "Giày tây", path: "/products/giay-tay" },
      {
        name: "Phụ kiện khác",
        path: "/products/phu-kien",
        children: [
          { name: "Cà vạt/Nơ", path: "/products/phu-kien/ca-vat-no" },
          { name: "Thắt lưng/Dây đeo", path: "/products/phu-kien/that-lung-day-deo" }
        ]
      }
    ]
  },
  // { name: "Lokbook", path: "/lookbook" },
  { name: "Dịch vụ", path: "/services", },
  { name: "May đo đồng phục", path: "/may-do-dong-phuc" },
  { name: "Cửa hàng", path: "/stores" },
  { name: "Tin tức", path: "/news" },
  { name: "Tuyển dụng", path: "/careers" },
  { name: "Liên hệ", path: "/contact" }
];

export default NavData;
