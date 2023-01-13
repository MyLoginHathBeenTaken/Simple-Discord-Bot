var cache = require("persistent-cache")
var cats = cache();
function addNprint() {
    cats.get('Count',function(err, count){
        if (err) throw err;
        cp1 = count + 1;
        console.log(count);
        cats.putSync('Count', cp1);
    });
};
cats.putSync('Count', 0);
for (let i = 0; i < 1000; i++) {
    addNprint();
};
