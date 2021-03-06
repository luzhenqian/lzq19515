import { extractPhone } from "../../../src/core/js/Phone";

test("测试提取手机号1:", () => {
  expect(
    extractPhone("父亲的手机号：15777778889。母亲手机号：18639493929")
  ).toStrictEqual(["15777778889", "18639493929"]);
});

// test("测试提取手机号2:", () => {
//   expect(extractPhone("82911787，13805318016")).toStrictEqual([
//     "82911787",
//     "13805318016"
//   ]);
// });

// test("测试提取手机号3:", () => {
//   expect(extractPhone("15866721698查无此人,13406404335盲音")).toStrictEqual([
//     "15866721698",
//     "13406404335"
//   ]);
// });

// test("测试提取手机号4:", () => {
//   expect(extractPhone("0546-6999058,13864723633,13361518146")).toStrictEqual([
//     "0546-6999058",
//     "13864723633",
//     "13361518146"
//   ]);
// });
