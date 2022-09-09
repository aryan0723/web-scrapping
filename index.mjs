import axios from 'axios';
import cheerio from 'cheerio';
// import { data } from 'cheerio/lib/api/attributes';
import fs from 'fs';

let scrape = async (url) => {
  let info = await axios.get(url)
  .then((info)=>{
    let $=cheerio.load(info.data)
    console.log($('#productTitle').text().trim())
    let data = [];
    data.push($('#productTitle').text().trim());
    //console.log($('.a-size-base.a-color-tertiary').text().trim())
    fs.writeFile('./scapper.json', JSON.stringify(data), (err) => {
      console.log(err);
    });
  })
  .catch((error)=>{
    console.log(error);
  })
};

scrape(
  "https://www.amazon.in/midkart-Rubberized-Keyboard-13-3-inches-Transparent/dp/B01D1A7H0G/?_encoding=UTF8&pd_rd_w=DTlp7&content-id=amzn1.sym.6aeb164c-387d-440e-8808-65edf45c4683&pf_rd_p=6aeb164c-387d-440e-8808-65edf45c4683&pf_rd_r=NQ1KHY8E6A8J052YRMNF&pd_rd_wg=wlGgB&pd_rd_r=c2691588-9497-4d27-bb63-22e99434b291&ref_=pd_gw_ci_mcx_mr_hp_atf_m&th=1"
);