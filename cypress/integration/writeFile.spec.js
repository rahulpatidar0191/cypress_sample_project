var Elements = require("../support/elements");

describe("Sample project ", () => {
  it("write File example", () => {
    var goTo = new Elements();

    cy.visit("www.google.com/");

    var content = [];

    cy.get("div[id='SIvCob']")
      .invoke("text")
      .then((text) => {
        writeFile(text);
      });

    cy.get("a[class='gb_g']")
      .invoke("text")
      .then((text) => {
        writeFile(text);
      });
    function writeFile(text) {
      content.push(text);
      cy.writeFile("./hello.json", content);
    };
  });
});



//   xit("Make excel", () => {
//     workbook1.creator = "Me";
//     workbook1.lastModifiedBy = "Me";
//     workbook1.created = new Date();
//     workbook1.modified = new Date();
//     var sheet1 = workbook1.addWorksheet("Sheet1");
//     var reColumns = [
//       { header: "Name", key: "Name" },
//       //   { header: "Symbol", key: "Symbol" },
//       //   { header: "Last_Price", key: "Last_Price" },
//       //   { header: "Price_Change", key: "Price_Change" },
//       //   { header: "Per_Change", key: "Per_Change" },
//       //   { header: "Volume_Today", key: "Volume_Today" },
//       //   { header: "Avg_Volume", key: "Avg_Volume" },
//       //   { header: "Day_Low", key: "Day_Low" },
//       //   { header: "Day_High", key: "Day_High" },
//     ];

//     //   cy.get("#username").type("jaiparu52@gmail.com");

//     //   cy.get("#password").type("23481761a");

//     //   cy.get(".sign-in > .solid-button").click();

//     //  cy.get(".dropdown").select("Symbol");

//     //  cy.wait(7000)

//     // cy.get("div[class='range__bar range-day'] div[class='range__data'] span[class='range__left']").invoke("text").then(text=>{
//     //     console.log("DAy low",text)
//     // })

//     cy.visit("https://www.marketwatch.com/watchlist");

//     cy.get("div[class='item-name']")
//       .its("length")
//       .then((length) => {
//         for (var i = 0; i < length; i++) {
//           var names;
//           cy.get("div[class='item-name']")
//             .eq(i)
//             .invoke("text")
//             .then((text) => {
//               names = text;
//             });

//           var reRows = [
//             {
//               Name: names,
//               //   Symbol: ticker,
//               //   Last_Price: lastPrice,
//               //   Price_Change: priceChange,
//               //   Per_Change: perChange,
//               //   Volume_Today: vol_today,
//               //   Avg_Volume: avg_volume,
//               //   Day_Low: day_low,
//               //   Day_High: day_high,
//             },
//           ];
//           sheet1.columns = reColumns;
//           sheet1.addRows(reRows);
//           workbook1.xlsx
//             .writeFile(
//               "C:/Users/rahul/Desktop/cypress_sample_project/watchlist.xlsx"
//             )
//             .then(function () {
//               // console.log("xlsx file is written.");
//             });
//           console.log("Value of i = ", i);
//         }
//       });
//   });
// });

// before(() => {
//   cy.visit("https://stackoverflow.com/")
// });
