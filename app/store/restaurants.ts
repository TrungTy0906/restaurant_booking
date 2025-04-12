const restaurants = [
    {
      name: "Nhà Hàng Quán Ăn Ngon",
      seats: 80,
      image: "https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg",
      address: "18 Phan Bội Châu, Quận Hoàn Kiếm, Hà Nội",
      opening: "09:00",
      closing: "22:00",
    },
    {
      name: "Cơm Niêu Sài Gòn",
      seats: 70,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      address: "59 Hồ Xuân Hương, Quận 3, TP. Hồ Chí Minh",
      opening: "10:00",
      closing: "22:30",
    },
    {
      name: "Nhà Hàng Gạo",
      seats: 100,
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
      address: "33 Lê Quý Đôn, Quận 3, TP. Hồ Chí Minh",
      opening: "11:00",
      closing: "23:00",
    },
    {
      name: "Ẩm Thực Quê Nhà",
      seats: 85,
      image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg",
      address: "86 Nguyễn Du, Quận Hai Bà Trưng, Hà Nội",
      opening: "10:30",
      closing: "22:00",
    },
    {
      name: "Nhà Hàng Sen Tây Hồ",
      seats: 200,
      image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
      address: "614 Lạc Long Quân, Quận Tây Hồ, Hà Nội",
      opening: "11:00",
      closing: "21:30",
    },
    {
      name: "Nhà Hàng Hương Sen",
      seats: 60,
      image: "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg",
      address: "52 Quang Trung, Quận Hải Châu, Đà Nẵng",
      opening: "10:00",
      closing: "22:00",
    },
    {
      name: "Bún Chả Hương Liên",
      seats: 45,
      image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg",
      address: "24 Lê Văn Hưu, Quận Hai Bà Trưng, Hà Nội",
      opening: "08:00",
      closing: "20:30",
    },
    {
      name: "Nhà Hàng Ngon Garden",
      seats: 90,
      image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
      address: "70 Nguyễn Du, Quận Hai Bà Trưng, Hà Nội",
      opening: "10:00",
      closing: "22:00",
    },
    {
      name: "Cơm Gà Hội An",
      seats: 55,
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      address: "47 Phan Chu Trinh, Thành phố Hội An, Quảng Nam",
      opening: "09:30",
      closing: "21:00",
    },
    {
      name: "Nhà Hàng Biển Đông",
      seats: 100,
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      address: "2 Hoàng Sa, Quận Sơn Trà, Đà Nẵng",
      opening: "10:00",
      closing: "23:00",
    },
    {
      name: "Ẩm Thực Đồng Quê",
      seats: 75,
      image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
      address: "120 Nguyễn Văn Cừ, Quận Long Biên, Hà Nội",
      opening: "09:00",
      closing: "21:30",
    },
    {
      name: "Nhà Hàng Tre Việt",
      seats: 95,
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      address: "60 Trần Phú, Quận Hà Đông, Hà Nội",
      opening: "10:30",
      closing: "22:30",
    },
    {
      name: "Quán Bụi",
      seats: 65,
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      address: "19 Ngô Văn Năm, Quận 1, TP. Hồ Chí Minh",
      opening: "11:00",
      closing: "22:00",
    },
  ];

  const carouselImages = [
    {
      images: [
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_1",
    },
    {
      images: [
        "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_2",
    },
    {
      images: [
        "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=170.625&fit=crop&h=276.25",
        "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&h=138.125&fit=crop&w=154.375&dpr=1",
        "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&h=138.125&fit=crop&w=154.375&dpr=1",
        "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_3",
    },
    {
      images: [
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_4",
    },
    {
      images: [
        "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_5",
    },
    {
      images: [
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_6",
    },
    {
      images: [
        "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=236.25&fit=crop&h=382.5",
      ],
      res_id: "/restaurants/restaurant_7",
    },
    {
      images: [
        "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_8",
    },
    {
      images: [
        "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_9",
    },
    {
      images: [
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_10",
    },
    {
      images: [
        "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_11",
    },
    {
      images: [
        "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      res_id: "/restaurants/restaurant_12",
    },
  ];

  const slots = [
    {
      ref_id: "/restaurants/restaurant_1",
      slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
    },
    {
      ref_id: "/restaurants/restaurant_2",
      slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    },
    {
      ref_id: "/restaurants/restaurant_3",
      slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
    },
    {
      ref_id: "/restaurants/restaurant_4",
      slot: [
        "09:00",
        "11:00",
        "13:00",
        "15:00",
        "17:00",
        "19:00",
        "21:00",
        "23:00",
      ],
    },
    {
      ref_id: "/restaurants/restaurant_5",
      slot: ["10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
    },
    {
      ref_id: "/restaurants/restaurant_6",
      slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
    },
    {
      ref_id: "/restaurants/restaurant_7",
      slot: ["08:30", "10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
    },
    {
      ref_id: "/restaurants/restaurant_8",
      slot: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
    },
    {
      ref_id: "/restaurants/restaurant_9",
      slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    },
    {
      ref_id: "/restaurants/restaurant_10",
      slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
    },
    {
      ref_id: "/restaurants/restaurant_11",
      slot: ["09:30", "11:30", "13:30", "15:30", "17:30", "19:30"],
    },
    {
      ref_id: "/restaurants/restaurant_12",
      slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
    },
    {
      ref_id: "/restaurants/restaurant_13",
      slot: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
    },
  ];

  export default {restaurants, carouselImages, slots};