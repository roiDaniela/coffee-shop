var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if(this.drinkRequirements.hasOwnProperty(drinkType)){
      if(this.drinkRequirements[drinkType] <= this.beans){
        alert("ok");
        this.beans -= this.drinkRequirements[drinkType];
      }
      else{
        alert("Sorry, we're all out of beans!");
      }
    }
    else{
      alert("Sorry, we don't make " + drinkType);
    }

    // if(this.drinkRequirements.keys)
    // switch(drinkType){
    //   case latte:{
    //     break;
    //   }
    //   case americano:{
    //     breark;
    //   }
    //   case doubleShot:{
    //     break;
    //   }
    //   case frenchPress:{
    //     break;
    //   }
    //   default:{
    //     alert("Sorry, we don't make " + drinkType);
    //     break;
    //   }
    //}
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");