const btn = document.getElementById("btn");
const image = document.getElementById("image");

// fetch API (build-in) của JavaScript
// Lắng nghe sự kiện khi bấm vào nút "random"

// Fetch + Promise
// btn.addEventListener("click", function () {
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then(rs => {
//             console.log(rs);
//             return rs.json();
//         })
//         .then(data => {
//             console.log(data);
//             image.src = data.message;
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

// Fetch + Async/Await
// btn.addEventListener("click", async function () {
//     try {
//         const rs = await fetch("https://dog.ceo/api/breeds/image/random");
//         const data = await rs.json();
//         console.log(data);
//         image.src = data.message;
//     } catch (error) {
//         console.log(error);
//     }
// })

// Axios + Promise
// btn.addEventListener("click", function () {
//     axios.get("https://dog.ceo/api/breeds/image/random")
//         .then(rs => {
//             console.log(rs);
//             image.src = rs.data.message;
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

// Axios + Async/Await
// btn.addEventListener("click", async function () {
//     try {
//         const rs = await axios.get("https://dog.ceo/api/breeds/image/random");
//         console.log(rs);
//         image.src = rs.data.message;
//     } catch (error) {
//         console.log(error);
//     }
// })

// Ajax, jquery