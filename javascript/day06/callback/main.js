// const doTask = (name, time, cb) => {
//     console.log("Thực hiện công việc: " + name);
//     setTimeout(() => {
//         cb();
//     }, time);
// }

// const finish = () => {
//     console.log("Hoàn thành công việc");
// }

// doTask("Rửa bát", 2000, finish);

// Th1: Các tác vụ có liên quan đến nhau
// Nhặt rau - Rửa rau - Luộc rau
// console.log("Start");
// doTask("Nhặt rau", 3000, () => {
//     doTask("Rửa rau", 2000,  () => {
//         doTask("Luộc rau", 4000, finish);
//     })
// });
// console.log("End");
// callback hell

// Th2: Các tác vụ không liên quan đến nhau
// Ăn cơm - Lướt facebook - Check mail
// console.log("Start");
// doTask("Ăn cơm", 4000, () => {
//     console.log("Ăn cơm xong");
// });
// doTask("Lướt facebook", 2000, () => {
//     console.log("Lướt facebook xong");
// });
// doTask("Check mail", 2500, () => {
//     console.log("Check mail xong");
// });
// console.log("End");


// Promise ===========
const doTask = (name, time, isOk) => {
    console.log("Thực hiện công việc: " + name);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOk) {
                resolve("Hoàn thành công việc: " + name);
            } else {
                reject("Không thể hoàn thành công việc: " + name);
            }
        }, time);
    });
};

// Th1: Các tác vụ có liên quan đến nhau
// Nhặt rau - Rửa rau - Luộc rau
// doTask("Nhặt rau", 3000, true)
//     .then(rs => { // rs = Hoàn thành công việc: Nhặt rau
//         console.log(rs);
//         return doTask("Rửa rau", 2000, true);
//     })
//     .then(rs => {
//         console.log(rs); // Hoàn thành công việc: Rửa rau
//         return doTask("Luộc rau", 4000, true);
//     })
//     .then(rs => {
//         console.log(rs); // Hoàn thành công việc: Luộc rau
//         console.log("Kết thúc công việc");
//     })
//     .catch(err => { // err: Không thể hoàn thành công việc: Rửa rau
//         console.log(err);
//     })

// Th2: Các tác vụ không liên quan đến nhau
// Ăn cơm - Lướt facebook - Check mail
// Promise.all([
//     doTask("Ăn cơm", 3000, true),
//     doTask("Lướt facebook", 2000, false),
//     doTask("Check mail", 4000, true)
// ]).then((values) => {
//     console.log(values);
// }).catch(err => {
//     console.log(err);
// });

const handleTask = async () => {
    try {
        let rs = await doTask("Nhặt rau", 3000, true)
        console.log(rs);

        let rs1 = await doTask("Rửa rau", 2000, false)
        console.log(rs1);

        let rs2 = await doTask("Luộc rau", 4000, true)
        console.log(rs2);
    } catch (error) {
        console.log(error);
    }

    return "Ăn cơm";
};

// console.log(handleTask());
handleTask().then(rs => {
    console.log(rs);
})
