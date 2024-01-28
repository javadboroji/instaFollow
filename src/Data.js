import Like from "./Components/Like";

export const DataCustom={
   Menu:[
    {
        id:1,
        title:"خانه",
        dropDown:"",
        icon:"fa-solid fa-house"
    },
    {
        id:2,
        title:"خرید فالور",
        icon:"fa-solid fa-cart-shopping",
        dropDown:["فالور واقعی","فالور ایرانی ارزان","فالور ایرانی با کیفیت"]
    },
    {
        id:3,
        title:"خرید لایک",
        icon:"fa-solid fa-cart-shopping",
        dropDown:["لایک ایرانی"," لایک ارزان"," لایک  IG TV"]
    },
    {
        id:4,
        title:"خرید کامنت",
        icon:"fa-solid fa-cart-shopping",
        dropDown:["کامنت ایرانی با کیفیت"," کامنت خارجی"," کامنت مرتبط "]
    }
    
   ],
   SiteInfo:[
       {
           title:" 2 سال",
           description:" سابقه سایت"
       },
       {
        title:" 200 هزار",
        description:" خرید موفق "
    },
    {
        title:" 300 هزار ",
        description:" فالور تحویل داده شده"
    },
    {
        title:" 900 هزار",
        description:" لایک تحویل داده شده"
    }
   ],
   Services:[
       {
           title:"لایک اینستا گرام",
           icon:"fa-solid fa-thumbs-up",
           iconId:"",
           class:"servies-like",
           list:['خرید لایک ایرانی ارزان ',' خرید لایک ایرانی با کیفیت' ]
       },
       {
        title:"فالور اینستاگرام",
        icon:"fa-solid fa-user",
        iconId:"icon-follow",
        class:"servies-follower",
        list:["خرید فالور ایرانی","خرید فالور ایرانی با کیفیت " ]
    },
    {
        title:"ویو اینستاگرام",
        icon:"fa-solid fa-eye",
        iconId:"icon-view",
        class:"servies-view",
        list:[" خرید ویو IG TV","خرید ویو ایرانی " ]
    },
    {
        title:"کامنت اینستاگرام",
        icon:"fa-solid fa-comment",
        iconId:"icon-comment",
        class:"servies-comment",
        list:["خرید کامنت ایرانی"," خرید کامنت خارجی "]
    }
   ],
   Cart:{
    Like:{
        title:'خرید لایک ایرانی ارزان',
        type:'like',
        tariff:[
            {header:"200 لایک ", price:" 50 هزار تومان", off:" 25 هزارتومان ",icon:"fa-solid fa-thumbs-up"},
            {header:"500 لایک ", price:" 100 هزار تومان", off:" 60 هزارتومان ",icon:"fa-solid fa-thumbs-up"},
            {header:"800 لایک ", price:" 150 هزار تومان", off:" 90 هزارتومان ",icon:"fa-solid fa-thumbs-up"},
            {header:"1500 لایک ", price:" 200 هزار تومان", off:" 140 هزارتومان ",icon:"fa-solid fa-thumbs-up"}

        ],

    },
    Comment:{
        title:'خرید کامنت  ایرانی ارزان',
        type: 'comment',
        tariff:[
            {header:"300 کامنت  ", price:" 60 هزار تومان", off:" 30 هزارتومان ",icon:"fa-solid fa-comment"},
            {header:"600 کامنت  ", price:" 120 هزار تومان", off:" 80 هزارتومان ",icon:"fa-solid fa-comment"},
            {header:"800 کامنت  ", price:" 180 هزار تومان", off:" 100 هزارتومان ",icon:"fa-solid fa-comment"},
            {header:"1700 کامنت  ", price:" 210 هزار تومان", off:" 150 هزارتومان ",icon:"fa-solid fa-comment"}

        ],

    }
   }
       
   
  
}