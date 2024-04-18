
  const bs_list = [
    {
      image: "https://tagalaxyfyc.com/wp-content/uploads/2023/02/3-17.jpg",
      name: "Combo 1",
      detail: "Xúc xích , trứng , bánh mì , cà chua ,dưa chuột.",
      price: "45.000 vnd",
    },
    {
      image:"https://food.ibin.vn/images/data/product/mi-kim-chi-thap-cam/mi-kim-chi-thap-cam-001.jpg",
      name: "Mì kim chi thập cẩm",
      detail:"Mì kim chi thập cẩm. ",
      price: "50.000 vnd",
    },

  ];
  
  const btr_list = [
    {
      image: "https://c.pxhere.com/photos/77/5d/thai_food_beef_rice_meal_food_cuisine_dish-805887.jpg!d",
      name: "Combo 1",
      detail: "cơm trắng , thịt bò , nước sốt.",
      price: "40.000 vnd",
    },
    {
      image:"https://cdn.tgdd.vn/Files/2020/11/28/1309893/tong-hop-nhung-quan-ca-phe-co-ban-do-a...52.jpg",
      name: "Combo 2",
      detail: "Cơm trắng , Cá , kimchi , đậu bắp.",
      price: "50.000 vnd",
    },
  ];
  
  const bt_list = [
    {
      image: "https://giadinh.mediacdn.vn/296230595582509056/2023/3/24/healthy-quick-and-easy-din...24.jpg",
      name: "Combo 1",
      detail: "Cơm rang , thịt bò , rau củ quả.",
      price: "40.000 vnd",
    },
    {
      image:
        "https://cdn.tgdd.vn/Files/2021/04/28/1347054/cach-nau-sup-thit-bam-trung-cut-thom-n...07.jpg",
      name: "Súp thịt bằm trứng",
      detail: "Súp thịt bằm , trứng , nấm.",
      price: "35.000 vnd",
    },
  ];
  
  const tm_list = [
    {
      image:
        "https://cdn.tgdd.vn/Files/2020/06/07/1261463/cach-lam-tau-hu-singapore-beancurd-don...10.jpg",
      name: "Tàu hũ trân châu đường đen",
      detail: "Tàu hũ trân châu đen",
      price: "30.000 vnd",
    },
    {
      image: "https://tahungon.com/wp-content/uploads/2023/06/tau-hu-caramel.jpg",
      name: "Tàu hũ caramel",
      detail: "Tàu hũ , caramel.",
      price: "35.000 vnd",
    },
    {
      image:
        "https://nauantainha.com/wp-content/uploads/cooked/images/recipes/recipe_2229.jpg",
      name: "Chè thái sầu riêng",
      detail: "Chè thái sầu riêng.",
      price: "45.000 vnd",
    },
    {
      image:
        "https://mekhoeconthongminh.com/upload/news/content/2022/08/che-giai-nhiet-3-jpg-165...22.jpg",
      name: "Chè thập cẩm",
      detail: "Chè thạch , hoa quả..",
      price: "40.000 vnd",
    },
  ];
  
  const tu_list = [
    {
      image:
        "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam...85.jpg",
      name: "Nước ép cam",
      detail: "Nước cam.",
      price: "20.000 vnd",
    },
    {
      image:
        "https://dayphache.edu.vn/wp-content/uploads/2016/02/cach-lam-sinh-to-xoai-sua-dac.jpg",
      name: "Sinh tố xoài",
      detail: "Xoài.",
      price: "20.000 vnd",
    },
    {
      image:
  "https://giaiphapmarketing.vn/wp-content/uploads/2021/07/chien-luoc-marketing-cua-c...pg.webp",
      name: "Coca cola",
      detail: "Coca.",
      price: "10.000 vnd",
    },
  ];
  
  // load du lieu => in ra man hinh
  function add_data_localStorage() {
    const bs = JSON.parse(localStorage.getItem("bs_list"));
    const btr = JSON.parse(localStorage.getItem("btr_list"));
    const bt = JSON.parse(localStorage.getItem("bt_list"));
    const tm = JSON.parse(localStorage.getItem("tm_list"));
    const tu = JSON.parse(localStorage.getItem("tu_list"));
    if (!bs) {
      // add du lieu moi vao local storage
      localStorage.setItem("bs_list", JSON.stringify(bs_list));
    }
    if (!btr) {
      // add du lieu moi vao local storage
      localStorage.setItem("btr_list", JSON.stringify(btr_list));
    }
    if (!bt) {
      // add du lieu moi vao local storage
      localStorage.setItem("bt_list", JSON.stringify(bt_list));
    }
    if (!tm) {
      // add du lieu moi vao local storage
      localStorage.setItem("tm_list", JSON.stringify(tm_list));
    }
    if (!tu) {
      // add du lieu moi vao local storage
      localStorage.setItem("tu_list", JSON.stringify(tu_list));
    }
  }
  
  // chay vong for hien thi du lieu
  function add_item_for_menu(type) {
    add_data_localStorage();
    switch (type) {
      case "bs":
        create_item(JSON.parse(localStorage.getItem("bs_list")));
        break;
      case "btr":
        create_item(JSON.parse(localStorage.getItem("btr_list")));
        break;
      case "bt":
        create_item(JSON.parse(localStorage.getItem("bt_list")));
        break;
      case "tm":
        create_item(JSON.parse(localStorage.getItem("tm_list")));
        break;
      case "tu":
        create_item(JSON.parse(localStorage.getItem("tu_list")));
        break;
    }
  }
  
  function create_item(item_list) {
    document.getElementsByClassName("grid-list-menu")[0].innerHTML = "";
    for (let index = 0; index < item_list.length; index++) {
      const item = document.createElement("div");
      item.classList.add("menu_item");
  
      const item_col_1 = document.createElement("div");
      item_col_1.classList.add("item_col");
      const img = document.createElement("img");
      img.src = item_list[index].image;
      img.style.width = "800px"; 
      img.style.height = "auto"; 
      item_col_1.appendChild(img);
      item.appendChild(item_col_1);
  
      const item_col_2 = document.createElement("div");
      item_col_2.classList.add("item_col");
      const item_title = document.createElement("p");
      item_title.classList.add("item_title");
      item_title.innerText = item_list[index].name;
      item_col_2.appendChild(item_title);
      const item_subtext = document.createElement("p");
      item_subtext.classList.add("item_subtext");
      item_subtext.innerText = item_list[index].detail;
      item_col_2.appendChild(item_subtext);
      item.appendChild(item_col_2);
  
      const item_col_3 = document.createElement("div");
      item_col_3.classList.add("item_col");
      const item_title1 = document.createElement("p");
      item_title1.classList.add("item_title");
  item_title1.innerText = item_list[index].price;
      item_col_3.appendChild(item_title1);
      item.appendChild(item_col_3);
  
      document.getElementsByClassName("grid-list-menu")[0].appendChild(item);
    }
  }
  
  function chosen_menu() {
    const btn_list = document.querySelectorAll("#chosen_menu button");
    let type = "";
    for (let index = 0; index < btn_list.length; index++) {
      if (btn_list[index].classList[0] == "chosen") {
        type = btn_list[index].id;
      }
    }
    add_item_for_menu(type);
    console.log(type);
  }
  
  chosen_menu();
  
  document.getElementById("bs").addEventListener("click", () => {
    document.getElementById("bs").classList.toggle("chosen");
    chosen_menu();
  });
  
  document.getElementById("btr").addEventListener("click", () => {
    document.getElementById("btr").classList.toggle("chosen");
    chosen_menu();
  });
  document.getElementById("bt").addEventListener("click", () => {
    document.getElementById("bt").classList.toggle("chosen");
    chosen_menu();
  });
  document.getElementById("tm").addEventListener("click", () => {
    document.getElementById("tm").classList.toggle("chosen");
    chosen_menu();
  });
  document.getElementById("tu").addEventListener("click", () => {
    document.getElementById("tu").classList.toggle("chosen");
    chosen_menu();
  });