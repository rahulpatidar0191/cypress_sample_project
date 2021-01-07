var elements = require("../support/elements");
var setup = require("../support/setup");

const { browser } = require("protractor");
var excel = require("exceljs");

var workbook1 = new excel.Workbook();
// var path = require("path");
// var filePath = path.resolve(
//   "C:/Users/rahul/Desktop/boiler_plate",
//   "sample.xlsx"
// );

describe("FLow NA login", () => {
  it("Should login to Storefront", async function checkout() {
    // workbook1.creator = "Me";
    // workbook1.lastModifiedBy = "Me";
    // workbook1.created = new Date();
    // workbook1.modified = new Date();
    // var sheet1 = workbook1.addWorksheet("Sheet1");
    // var reColumns = [
    //   { header: "Name", key: "Name" },
    //   { header: "Symbol", key: "Symbol" },
    //   { header: "Last_Price", key: "Last_Price" },
    //   { header: "Price_Change", key: "Price_Change" },
    //   { header: "Per_Change", key: "Per_Change" },
    //   { header: "Volume_Today", key: "Volume_Today" },
    //   { header: "Avg_Volume", key: "Avg_Volume" },
    //   { header: "Day_Low", key: "Day_Low" },
    //   { header: "Day_High", key: "Day_High" },
    // ];

    await browser.get("https://www.marketwatch.com/watchlist");

    await browser.sleep(5000);

    await browser
      .element(by.xpath("//input[@type='email']"))
      .sendKeys("jaiparu52@gmail.com");

    await browser
      .element(by.xpath("//input[@type='password']"))
      .sendKeys("23481761a");

    await browser.element(by.xpath("//button[@type='submit']")).click();

    await browser.sleep(8000);

    // await browser
    //   .element.all(by.xpath("//label[@class='switch__label']")).get(1)
    //   .click();

    // await browser
    //   .element(by.xpath("//select[@class='dropdown dropdown--form']"))
    //   .click();

    // await browser.element(by.xpath("//option[@value='ticker']")).click();

    // await browser.element(by.xpath("//div[@class='container container--heading']")).click();

    // var names = await browser.element.all(
    //   by.xpath("//div[@class='item-name']")
    // );

    await browser.element.all(by.xpath("//span[@class='range__left']")).get(1).click();

      await browser.sleep(6000)

    var f = await browser.element.all(by.xpath("//span[@class='range__left']")).get(1).getText()

    console.log(f)

    await browser.sleep(6000);

    //  for (var i = 0; i < names.length; i++) {

    /*
      var names = await browser.element
        .all(by.xpath("//div[@class='item-name']"))
        .get(i)
        .getText();

      var symbol = await browser.element
        .all(by.xpath("//div[@class='item-symbol-inner']"))
        .get(i)
        .getText();
      // console.log(symbol)
      var ticker = symbol.replace("CA:", "");

      var last_price = await browser.element
        .all(by.xpath("//div[@class='item-field item-price']"))
        .get(i)
        .getText();
      var lastPrice = last_price.replace("LAST", "");

      var price_change = await browser.element
        .all(by.xpath("//div[@class='item-field item-change pn--color']"))
        .get(i)
        .getText();
      var priceChange = price_change.replace("CHG", "");

      var per_change = await browser.element
        .all(by.xpath("//div[@class='item-field item-changepct pn--color']"))
        .get(i)
        .getText();
      var perChange = per_change.replace("% CHG", "");

      await browser.sleep(5000);

      var vol_today = await browser.element
        .all(
          by.xpath(
            "//div[@class='range__bar range-vol']//span[@class='range__left']"
          )
        )
        .get(i)
        .getText();

      var avg_volume = await browser.element
        .all(
          by.xpath(
            "//div[@class='range__bar range-vol']//span[@class='range__right']"
          )
        )
        .get(i)
        .getText();

      var day_low = await browser.element
        .all(
          by.xpath(
            "//div[@class='range__bar range-day']//div[@class='range__data']//span[@class='range__left']"
          )
        )
        .get(i)
        .getText();

      var day_high = await browser.element
        .all(
          by.xpath(
            "//div[@class='range__bar range-day']//div[@class='range__data']//span[@class='range__right']"
          )
        )
        .get(i)
        .getText();

      var reRows = [
        {
          Name: names,
          Symbol: ticker,
          Last_Price: lastPrice,
          Price_Change: priceChange,
          Per_Change: perChange,
          Volume_Today: vol_today,
          Avg_Volume: avg_volume,
          Day_Low: day_low,
          Day_High: day_high,
        },
      ];
      sheet1.columns = reColumns;
      sheet1.addRows(reRows);
      workbook1.xlsx
        .writeFile("C:/Users/rahul/Desktop/boiler_plate/watchlist.xlsx")
        .then(function () {
          // console.log("xlsx file is written.");
        });
        console.log("Value of i = ",i)*/
    // }
  });
});

beforeEach(async () => {
  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = setup.exhaustiveTimeout;
});

afterEach(async function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});
