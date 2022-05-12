import { MELI_CLASSES, DB_CLASSES, MELI_URL, DB_URL } from './modules/selectorCONSTS';
import { GET_PRICES, GET_TITLES, GET_URL, SEARCH_PRODUCT} from './modules/getTitle-getPriceBDMELI';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // Next line of code is the webpage scrapy will capture data from
  await page.goto('https://www.mercadolibre.com.ar/');
  


  await browser.close();
})();