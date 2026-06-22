const fs = require('fs');

const content = fs.readFileSync('components/Menu.tsx', 'utf8');

let dataSection = content.substring(content.indexOf('const indianMenuData ='));
dataSection = dataSection.replace('const indianMenuData =', 'exports.indianMenuData =');
dataSection = dataSection.replace('const snacksMenuData =', 'exports.snacksMenuData =');

const exportsObj = {};
const fn = new Function('exports', dataSection);
fn(exportsObj);

const categories = [...exportsObj.indianMenuData, ...exportsObj.snacksMenuData];

let sql = "INSERT INTO public.menu (item_en, item_hn, half_price, full_price, type) VALUES\n";
const values = [];

categories.forEach(cat => {
  const type = cat.titleEn.replace(/'/g, "''");
  cat.items.forEach(item => {
    const itemEn = item.nameEn.replace(/'/g, "''");
    const itemHn = item.nameHi.replace(/'/g, "''");
    
    let half = 'NULL';
    let full = 'NULL';
    
    if (item.price) {
      if (item.price.includes('/')) {
        const parts = item.price.split('/');
        half = parseInt(parts[0], 10);
        full = parseInt(parts[1], 10);
      } else {
        full = parseInt(item.price.replace(/[^\d]/g, ''), 10);
        if (isNaN(full)) full = 'NULL';
      }
    }
    
    values.push(`('${itemEn}', '${itemHn}', ${half}, ${full}, '${type}')`);
  });
});

sql += values.join(",\n") + ";";

fs.writeFileSync('../menu_insert.sql', sql);
console.log("SQL generated at ../menu_insert.sql");
