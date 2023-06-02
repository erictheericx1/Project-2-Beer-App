const beers = [
  {
    type: "Lager",
    alcoholByVolume: 5.0,
    photo: "https://static.scientificamerican.com/sciam/cache/file/6BCFBDA8-397F-4A3A-828155D2F8B85FEF_source.jpg",
    description: "A crisp and refreshing lager with a light malt flavor and a clean finish.",
    rating: 4.0,
    variations: "Pilsner, Vienna, Helles",
    foodPairing: "Grilled chicken, seafood, spicy foods",
    isFeatured: true
  },
  {
    type: "Hefeweizen",
    alcoholByVolume: 5.0,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hefeweizen_Glass.jpg/800px-Hefeweizen_Glass.jpg",
    description: "A refreshing and unfiltered wheat beer with distinct banana and clove flavors.",
    rating: 4.5,
    variations: "Dunkelweizen, Kristallweizen",
    foodPairing: "Grilled sausages, seafood, light salads",
    isFeatured: false
  },
  {
    type: "Ale",
    alcoholByVolume: 6.5,
    photo: "https://media.istockphoto.com/id/1204042311/photo/amber-ale.jpg?s=612x612&w=0&k=20&c=mU9SqgFxNLqJFCM3jwir3mKWlGXVzftaU-xnOdFuhl0=",
    description: "An amber ale with a rich caramel flavor and a hint of citrus hops.",
    rating: 4.0,
    variations: "Pale ale, Brown ale, Belgian ale",
    foodPairing: "BBQ, spicy food, pizza",
    isFeatured: false
  },
  {
    type: "Stout",
    alcoholByVolume: 8.0,
    photo: "http://cdn.shopify.com/s/files/1/1723/8103/articles/cheers_all_stout_5.19_1024x1024.jpg?v=1621451552",
    description: "A creamy and full-bodied stout with notes of coffee and dark chocolate.",
    rating: 5.0,
    variations: "Imperial stout, Milk stout, Oatmeal stout",
    foodPairing: "Chocolate desserts, smoked meats, strong cheeses",
    isFeatured: false
  },
  {
    type: "Porter",
    alcoholByVolume: 6.0,
    photo: "https://hips.hearstapps.com/esquire/assets/cm/15/05/54cc893c92566_-_esq-porter-0412-lg-2962451.jpg",
    description: "A rich and complex porter with notes of chocolate, coffee, and roasted malt.",
    rating: 4.5,
    variations: "Baltic porter, Robust porter, Smoked porter",
    foodPairing: "BBQ, grilled meats, chocolate desserts",
    isFeatured: false
  },
  {
    type: "IPA",
    alcoholByVolume: 7.0,
    photo: "https://6632597.fs1.hubspotusercontent-na1.net/hubfs/6632597/Imported_Blog_Media/kegworks-guide-to-ipas-1-2.jpg",
    description: "A hop-forward IPA with notes of citrus and pine.",
    rating: 3.5,
    variations: "Double IPA, West Coast IPA, New England IPA",
    foodPairing: "Spicy food, grilled meats, strong cheeses",
    isFeatured: false
  },
  {
    type: "Sour",
    alcoholByVolume: 4.5,
    photo: "https://sipmagazine.com/wp-content/uploads/2019/11/sours.jpg",
    description: "A tart and fruity sour ale with a refreshing finish.",
    rating: 3.5,
    variations: "Gose, Berliner Weisse, Fruited sour",
    foodPairing: "Salads, seafood, spicy food",
    isFeatured: false
  },
  {
    type: "Smoothie Sour",
    alcoholByVolume: 5.5,
    photo: "https://www.burningbarrelbrewco.com/uploads/1/3/1/2/131256214/s556791476793462427_p1283_i1_w512.jpeg",
    description: "A sweet and tangy sour ale with a creamy mouthfeel and flavors of fruit and vanilla.",
    rating: 5.0,
    variations: "Fruited smoothie sour, Milkshake sour",
    foodPairing: "Fruit desserts, brunch, cheese plates",
    isFeatured: false
  }

]

module.exports = beers