let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email: "abc@gmail.com",
    status: true,
    languages: ["Vietnamese", "Chinese", "English"],
    address: {
        province: "Hà Nội",
        district: "Thanh Xuân",
        ward: "Nhân Chính"
    },
    eat: function () {
        console.log("Eating...");
    },
    drink: function (name) {
        console.log(`Drinking ${name}...`);
    }
}

console.log(user);
console.log(user.name);
console.log(user.languages[1]);
console.log(user.address.ward);

user.eat();
user.drink("Coca Cola");

user.name = "Tran Van B";
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty("email"));
console.log(user.hasOwnProperty("fullname"));

// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const printProduct = products => {
    products.forEach((p) => {
        console.log(`${p.name} - ${p.price} - ${p.brand} - ${p.count}`);
    })
}
// printProduct(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findByBrand = (products, brand) => {
    let ans = [];
    products.forEach((p) => {
        if (p.brand === brand) {
            ans.push(p);
        }
    })
    return ans;
}
printProduct(findByBrand(products, "Apple"));

const findByBrand2 = (products, brand) => {
    return products.filter(p => p.brand === brand);
}
printProduct(findByBrand2(products, "Apple"));

// 4. Tìm các sản phẩm có giá > 20000000

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

// 8. Sắp xếp giỏ hàng theo price tăng dần

// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng