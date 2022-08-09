// call and apply and bind er maddhome amra bole dite pari kon object ta function er this hisebe use hbe
// call and apply kaj kore eki vabe shudu bind ta ektu onno vabe zemon
// call parameter ney (string akare);
// apply parameter ney [array akare];
// bind parameter ney [String akare ] ar bind diye function e variable e nite hoy then oi variable ke call korte hoy
// zodi funciton er vitore kono this ke refer korte na hoy.. tahole function call korar somoy null bosiye dibo
// ?? mark meaning hocce zodi null r undifine hoy tahole oi value dekhabe na else dekhabe

const softenin = {
  name: "softenin",
  founder: "hasan mahamud",
  established: "2020",
  about_platForm: function (establish) {
    console.log(
      `Company name is ${this.name} founded by ${this.founder} establish by ${establish}`
    );
  },
};

softenin.about_platForm(2020);

const about_platForm = softenin.about_platForm;

const kl_webCo = {
  name: "klWebCo",
  founder: "katherine",
  established: "2020",
  /* about_platForm: function () {
    console.log(
      `Company name is ${this.name} founded by ${this.founder} establish by ${this.established}`
    );
  }, */
};

about_platForm.call(kl_webCo, 2022);
const bind = about_platForm.bind(kl_webCo);
bind("2025");

function sum(a, b) {
  return a + b;
}
console.log(sum.call(null, 1, 2));
console.log(sum.apply(null, [1, 2]));
const bind2 = sum.bind(null);
console.log(bind2(1, 2));

function sum(price, quantity) {
  return price * quantity;
}
const bing3 = sum.bind(null, 5);
console.log(bing3(10));
