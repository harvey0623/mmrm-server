const express = require('express');
const router = express.Router();

//===多品牌api
router.post('/multiple_brand', (req, res) => {
   res.json({
      multiple_brand: '1', //0(單品牌) 1(多品牌)
      open_external_link_hint: ''
   });
});

//===條款api
router.post('/term', (req, res) => {
   res.json({
      "results": {
         "term_information": [
            {
               "type": "register",
               "terms": [
                  {
                     "id": 1,
                     "title": "隱私權政策",
                     "content": "<p>隱私權政策內容...</p>",
                     "version": "1.1.0"
                  },
                  {
                     "id": 2,
                     "title": "會員權益",
                     "content": "<p>會員權益內容...</p>",
                     "version": "1.0.1"
                  }
               ]
            }
         ]
      }
   })
});

//===member summary
router.post('/member_summary', (req, res) => {
   res.json({
      "rcrm": {
         "RC": "C01",
         "RM": "成功",
         "RM_detail": ""
      },
      "results": {
         "level_summary": {
            "current_level": {
               "level_id": 1,
               "level_end_datetime": "2019/12/31 23:59:59"
            },
            "next_level": {
               "level_id": 2,
               "progress": [
                  {
                     "type": "amount",
                     "amount": "1,688",
                     "requirement": "3,688"
                  },
                  {
                     "type": "frequency",
                     "amount": "1",
                     "requirement": "3"
                  }
               ]
            },
            "renew_level": {
               "level_id": 3,
               "progress": [
                  {
                     "type": "amount",
                     "amount": "1,688",
                     "requirement": "2,000"
                  },
                  {
                     "type": "frequency",
                     "amount": "1",
                     "requirement": "1"
                  }
               ]
            }
         },
         "point_summary": {
            "current_point": [
               {
                  "point_id": 1,
                  "amount": "1,688",
                  "point_due_to_expire": [
                     {
                        "datetime": "2019/02/10 23:59:59",
                        "amount": "1,000"
                     },
                     {
                        "datetime": "2019/02/11 23:59:59",
                        "amount": "600"
                     },
                     {
                        "datetime": "2019/02/12 23:59:59",
                        "amount": "88"
                     }
                  ]
               },
               {
                  "point_id": 2,
                  "amount": "245",
                  "point_due_to_expire": [
                     {
                        "datetime": "2019/02/10 23:59:59",
                        "amount": "100"
                     },
                     {
                        "datetime": "2019/02/11 23:59:59",
                        "amount": "100"
                     },
                     {
                        "datetime": "2019/02/12 23:59:59",
                        "amount": "45"
                     }
                  ]
               },
               // {
               //    "point_id": 3,
               //    "amount": "0",
               //    "point_due_to_expire": []
               // }
            ]
         },
         "coupon_summary": {
            "valid_coupon_amount": 25
         }
      }
   })
});

//===等級詳情
router.post('/levelInfo', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "level_information": [
            {
               "level_id": 1,
               "title": "ya VIP",
               "hide_end_datetime": true
            },
         ]
      }
   });
});

//===交易紀錄
router.post('/history', (req, res) => {
   console.log(req.body);
   setTimeout(() => {
      res.json({
         "next": 1,
         "results": {
            "transaction_history": [
               {
                  "transaction_id": Math.random() + 'x',
                  "datetime": "2019/04/23 14:30:20",
                  "amount": "2,000",
                  "brand_id": 1,
                  "meta": [
                     {
                        "key": "發票號碼",
                        "value": "AB00010002"
                     },
                     {
                        "key": "消費編號",
                        "value": "18945031002"
                     },
                     {
                        "key": "消費型態",
                        "value": "一般"
                     },
                     {
                        "key": "消費時間",
                        "value": "2019/04/23 14:30"
                     },
                     {
                        "key": "消費門市",
                        "value": "中山旗艦店"
                     }
                  ]
               },
               {
                  "transaction_id": Math.random() + 'x',
                  "datetime": "2019/05/06 14:30:20",
                  "amount": "-5,000",
                  "brand_id": 1,
                  "meta": [
                     {
                        "key": "發票號碼",
                        "value": "AB00010002"
                     },
                     {
                        "key": "消費型態",
                        "value": "退貨"
                     },
                     {
                        "key": "消費時間",
                        "value": "2019/05/06 14:30"
                     }
                  ]
               },
               {
                  "transaction_id": Math.random() + 'x',
                  "datetime": "2019/05/30 16:30:20",
                  "amount": "9,000",
                  "brand_id": 2,
                  "meta": [
                     {
                        "key": "發票號碼",
                        "value": "AB00010004"
                     },
                     {
                        "key": "消費編號",
                        "value": "18945031235"
                     },
                     {
                        "key": "消費型態",
                        "value": "一般"
                     },
                     {
                        "key": "消費時間",
                        "value": "2019/05/30 16:30"
                     },
                     {
                        "key": "消費門市",
                        "value": "中山旗艦店"
                     }
                  ]
               }
            ]
         }
      });
   }, 2000);

});

//===店家資訊
router.post('/brandInfo', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "brand_information": [
            {
               "brand_id": 1,
               "title": "GK Cafe",
               "feature_image_small": {
                  "width": 45,
                  "height": 45,
                  "url": "http://dev.wishmobile.net/app_image/45x45.png"
               },
               "summary": "",
               "brand_code": "BR01",
               "is_head_quarter": false
            },
            {
               "brand_id": 2,
               "title": "GK Pizza",
               "feature_image_small": {
                  "width": 45,
                  "height": 45,
                  "url": "http://dev.wishmobile.net/app_image/45x45.png"
               },
               "summary": "",
               "brand_code": "BR01",
               "is_head_quarter": false,
               "location": {
                  "latitude": 25.0582138,
                  "longitude": 121.5257634
               }
            },
            {
               "brand_id": 3,
               "title": "GK Bar",
               "feature_image_small": {
                  "width": 45,
                  "height": 45,
                  "url": "http://dev.wishmobile.net/app_image/45x45.png"
               },
               "summary": "",
               "brand_code": "BR01",
               "is_head_quarter": false,
               "location": {
                  "latitude": 25.0582138,
                  "longitude": 121.5257634
               }
            }
         ]
      }
   })
});

//===交易記錄詳情
router.post('/history_detail', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "transaction_detail": {
            "transaction_id": 1,
            "datetime": "2019/02/15 18:30:30",
            "brand_id": 1,
            "meta": [
               {
                  "key": "發票號碼",
                  "value": "AB00010002"
               },
               {
                  "key": "消費編號",
                  "value": "18945031005"
               },
               {
                  "key": "消費型態",
                  "value": "一般"
               },
               {
                  "key": "消費時間",
                  "value": "2019/02/15 18:30"
               },
               {
                  "key": "消費門市",
                  "value": "中山旗艦店"
               }
            ],
            "amount": "5,566",
            "transaction_entries": [
               {
                  "title": "拿鐵咖啡",
                  "price": "100",
                  "quantity": "5",
                  "total": "500"
               },
               {
                  "title": "咖啡餅乾",
                  "price": "50",
                  "quantity": "1",
                  "total": "50"
               },
               {
                  "title": "咖啡冰淇淋",
                  "price": "16",
                  "quantity": "1",
                  "total": "16"
               },
               {
                  "title": "拿鐵紅茶組合包",
                  "price": "1,000",
                  "quantity": "5",
                  "total": "5,000"
               }
            ]
         }
      }
   })
});

//===取得點數資訊
router.post('/point_information', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "point_information": [
            {
               "point_id": 1,
               "title": "春節積點",
               "feature_image": {
                  "width": 60,
                  "height": 60,
                  "url": "http://dev.wishmobile.net/app_image/60x60.png"
               },
               "point_circulate_start_datetime": "2019/01/01 23:59:59",
               "point_circulate_end_datetime": "2019/12/31 23:59:59",
               "hide_duration": false,
               "meta": [
                  {
                     "key": "消費滿 100 元",
                     "value": "獲得 1 點"
                  },
                  {
                     "key": "購買春節套餐",
                     "value": "額外贈送 10 點"
                  }
               ]
            },
            {
               "point_id": 2,
               "title": "紅利點數",
               "feature_image": {
                  "width": 60,
                  "height": 60,
                  "url": "http://dev.wishmobile.net/app_image/60x60.png"
               },
               "point_circulate_start_datetime": "2018/01/01 23:59:59",
               "point_circulate_end_datetime": "2118/12/31 23:59:59",
               "hide_duration": true,
               "meta": [
                  {
                     "key": "消費 1 元",
                     "value": "獲得 1 點"
                  }
               ]
            },
         ]
      }
   });
});

//===即將到期點數
router.post('/expirePoint', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "point_due_to_expire": [
            {
               "datetime": "2019/02/10 23:59:59",
               "amount": "1,000"
            },
            {
               "datetime": "2019/02/11 23:59:59",
               "amount": "250"
            },
            {
               "datetime": "2019/02/12 23:59:59",
               "amount": "5"
            }
         ]
      }
   });
});

//===取得點數資訊
router.post('/point_detail', (req, res) => {
   res.json({
      "results": {
         "point_information": [
            {
               "point_id": 3,
               "title": "春節積點",
               "feature_image": {
                  "width": 60,
                  "height": 60,
                  "url": "http://dev.wishmobile.net/app_image/60x60.png"
               },
               "point_circulate_start_datetime": "2018/01/01 23:59:59",
               "point_circulate_end_datetime": "2018/12/31 23:59:59",
               "hide_duration": false,
               "meta": [
                  {
                     "key": "消費滿 100 元",
                     "value": "獲得 1 點"
                  },
                  {
                     "key": "購買春節套餐",
                     "value": "額外贈送 10 點"
                  }
               ],
               "content": "<p>HTML 內容</p>"
            },
         ]
      }
   });
});

//===點數歷史資訊
router.post('/point_history', (req, res) => {
   console.log(req.body);
   setTimeout(() => {
      res.json({
         "next": 1,
         "results": {
            "point_history": [
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "2,000",
                  "transaction_id": "20190215001001",
                  "transaction_type": "消費",
                  "meta": [
                     {
                        "key": "消費時間",
                        "value": "2019/02/15 18:30"
                     },
                     {
                        "key": "消費型態",
                        "value": "一般"
                     },
                     {
                        "key": "交易編號",
                        "value": "WP201904890239023"
                     },
                     {
                        "key": "消費金額",
                        "value": "11,500"
                     },
                     {
                        "key": "消費發票",
                        "value": "AB00010002"
                     },
                     {
                        "key": "消費品牌",
                        "value": "GB Cafe"
                     },
                     {
                        "key": "消費門市",
                        "value": "中山旗艦店"
                     },
                     {
                        "key": "點數到期日",
                        "value": "2019/03/31"
                     }
                  ]
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "-2,000",
                  "transaction_id": "20190215001002",
                  "transaction_type": "消費",
                  "meta": [
                     {
                        "key": "消費時間",
                        "value": "2019/02/15 18:30"
                     },
                     {
                        "key": "消費型態",
                        "value": "退貨"
                     },
                     {
                        "key": "原交易編號",
                        "value": "WP201904890239023"
                     },
                     {
                        "key": "消費金額",
                        "value": "11,500"
                     },
                     {
                        "key": "消費發票",
                        "value": "AB00010002"
                     },
                     {
                        "key": "消費品牌",
                        "value": "GB Cafe"
                     },
                     {
                        "key": "消費門市",
                        "value": "中山旗艦店"
                     }
                  ]
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "-1,000",
                  "transaction_id": "20190215001003",
                  "transaction_type": "兌換行銷票券活動",
                  "meta": [
                     {
                        "key": "活動品牌",
                        "value": "GB Cafe"
                     },
                     {
                        "key": "活動名稱",
                        "value": "扣 1000 點度兌換票券一張"
                     }
                  ]
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "5,000",
                  "transaction_id": "20190215001004",
                  "transaction_type": "兌換點數活動",
                  "meta": [
                     {
                        "key": "活動品牌",
                        "value": "GB Cafe"
                     },
                     {
                        "key": "活動名稱",
                        "value": "領取活動點數 5,000 點"
                     },
                     {
                        "key": "點數到期日",
                        "value": "2019/03/31"
                     }
                  ]
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "1,000",
                  "transaction_id": "20190215001005",
                  "transaction_type": "人工異動",
                  "meta": [
                     {
                        "key": "異動型態",
                        "value": "給點"
                     },
                     {
                        "key": "備註",
                        "value": "人工點數調整 - 增加 1,000 點"
                     },
                     {
                        "key": "點數到期日",
                        "value": "2019/03/31"
                     }
                  ]
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "-2,000",
                  "transaction_id": "20190215001006",
                  "transaction_type": "人工異動",
                  "meta": [
                     {
                        "key": "異動型態",
                        "value": "扣點"
                     },
                     {
                        "key": "備註",
                        "value": "人工點數調整 - 扣除 -2,000 點"
                     }
                  ]
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "-1,200",
                  "transaction_id": "20190215001007",
                  "transaction_type": "清算",
                  "meta": null
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "-1,050",
                  "transaction_id": "20190215001008",
                  "transaction_type": "折抵",
                  "meta": [
                     {
                        "key": "折抵品牌",
                        "value": "GB Cafe"
                     },
                     {
                        "key": "折抵門市",
                        "value": "中山旗艦店"
                     }
                  ]
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "1,010",
                  "transaction_id": "20190215001009",
                  "transaction_type": "活動事件",
                  "meta": [
                     {
                        "key": "活動名稱",
                        "value": "30周年贈點30活動"
                     },
                     {
                        "key": "點數到期日",
                        "value": "2019/03/31"
                     }
                  ]
               },
               {
                  "datetime": "2019/02/15 18:30:30",
                  "amount": "5,000",
                  "transaction_id": "20190215001011",
                  "transaction_type": "任務",
                  "meta": [
                     {
                        "key": "任務品牌",
                        "value": "GB Cafe"
                     },
                     {
                        "key": "任務名稱",
                        "value": "任務點數 5,000 點"
                     },
                     {
                        "key": "點數到期日",
                        "value": "2019/03/31"
                     }
                  ]
               }
            ]
         }
      });
   }, 2000);
});

//===會員資料
router.post('/member_profile', (req, res) => {
   res.json({
      "results": {
         "member_profile": {
            "photo": {
               "width": 225,
               "height": 225,
               "url": "http://dev.wishmobile.net/app_image/225x225.png"
            },
            "mobile": "0987654321",
            "password": "1234568",
            "name": "myname",
            "gender": "M",
            "birthday": "1980/01/01",
            "email": "name@mail.com",
            "city": "台北市",
            "district": "中山區",
            "address": "民權東路一段43號5樓",
            "member_no": "124940103040",
            "security_question": "sq04",
            "security_answer": "王小明",
            "referral_code": "AB1234",
            "einvoice_carrier_no": "/ABC+123",
            "thirdparty_crm_card_no": "EF000012003001"
         }
      }
   })
});

//===會員卡片
router.post('/memberCard', (req, res) => {
   res.json({
      "results": {
         "member_card": {
            "code_info": {
               "card_info": [
                  {
                     "key": "會員卡",
                     "value": "1234567890123456"
                  },
                  {
                     "key": "好康集點卡",
                     "value": "1234567890987654321"
                  },
                  {
                     "key": "交通卡",
                     "value": "0987654321"
                  }
               ]
            }
         }
      }
   });
});

//===票券詳情
router.post('/coupon_detail', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "my_coupon_detail": {
            "my_coupon_id": 1,
            "duration": "2019/01/01 ~ 2020/10/30",
            "coupon_id": 1,
            "status": "available",
            "amount": "200",
            "coupon_no": "000001ABCD1234UJQA"
         }
      }
   });
});

//===票券資料
router.post('/coupon_info', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "coupon_information": [
            {
               "coupon_id": 1,
               "brand_ids": [1, 2, 5],
               "title": "票券標題",
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "http://dev.wishmobile.net/app_image/960x600.png"
               },
               "duration": "2020/01/01 ~ 2020/12/31",
               "total": "10",
               "can_transfer": true,
               "content": "<p>HTML 內容一</p>"
            }
         ]
      }
   });
});

//===取得門市列表
router.post('/availableStore', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "all_brands_avaliable": false,
         "store_ids": [1, 22, 43]
      }
   });
});

//===票券轉移
router.post('/transfer', (req, res) => {
   console.log(req.body);
   setTimeout(() => {
      res.json({
         "rcrm": {
            "RC": "C01",
            "RM": "失敗~",
            "RM_detail": ""
         },
         "results": {}
      })
   }, 2000);
});

//===票券列表
router.post('/coupon_list', (req, res) => {
   console.log(req.body);

   setTimeout(() => {
      let arr = [];
      for (let i = 1; i <= 10; i++) {
         arr.push({
            "my_coupon_id": 1,
            "duration": "2019/01/01 ~ 2020/10/30",
            "coupon_id": i <= 5 ? 1 : 2,
            "status": "available",
            "amount": "2",
            // "expired_datetime": "2019/04/24 14:30:20",
            // "obsolete_datetime": "2019/04/24 14:30:20",
            // "redeemed_datetime": "2019/04/24 14:30:20",
            // "transferred_datetime": "2019/04/24 14:30:20",
            // "transfer_account": "0987654321",
            "coupon_no": "000001ABCD1234UJQA" + Math.random()
         });
      }

      res.json({
         "next": 1,
         "results": {
            "my_coupon_list": arr
         }
      });
   }, 2000);

});

//===票券列表2
router.post('/coupon_list2', (req, res) => {
   console.log(req.body);
   res.json({
      "next": null,
      "results": {
         "my_coupon_list": [
            {
               "my_coupon_id": 1,
               "duration": "2019/01/01 ~ 2020/10/30",
               "coupon_id": 1,
               "status": "available",
               "amount": "2",
               "coupon_no": "000001ABCD1234UJQA"
            },
            {
               "my_coupon_id": 2,
               "duration": "2019/01/01 ~ 2020/10/30",
               "coupon_id": 2,
               "status": "available",
               "amount": "1,203",
               "coupon_no": "000001ABCD1234UJQB"
            }
         ]
      }
   });
});

//===票券資料2
router.post('/coupon_info2', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "coupon_information": [
            {
               "coupon_id": 1,
               "brand_ids": [1, 3],
               "title": "票券標題",
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "http://dev.wishmobile.net/app_image/960x600.png"
               },
               "duration": "2020/01/01 ~ 2020/12/31",
               "total": "1000"
            },
            {
               "coupon_id": 2,
               "brand_ids": [2, 1],
               "title": "票券標題2",
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "http://dev.wishmobile.net/app_image/960x600.png"
               },
               "duration": "兌換後 10 天到期",
               "total": "2000"
            }
         ]
      }
   });
});

//===品牌資料2
router.post('/brandInfo2', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "brand_information": [
            {
               "brand_id": 1,
               "title": "GK Cafe",
               "feature_image_small": {
                  "width": 45,
                  "height": 45,
                  "url": "http://dev.wishmobile.net/app_image/45x45.png"
               },
               "summary": "",
               "brand_code": "BR01",
               "is_head_quarter": false,
               "location": {
                  "latitude": 25.0582138,
                  "longitude": 121.5257634
               }
            },
            {
               "brand_id": 2,
               "title": "GK Pizza",
               "feature_image_small": {
                  "width": 45,
                  "height": 45,
                  "url": "http://dev.wishmobile.net/app_image/45x45.png"
               },
               "summary": "",
               "brand_code": "BR01",
               "is_head_quarter": false,
               "location": {
                  "latitude": 25.0582138,
                  "longitude": 121.5257634
               }
            },
            {
               "brand_id": 3,
               "title": "GK Bar",
               "feature_image_small": {
                  "width": 45,
                  "height": 45,
                  "url": "http://dev.wishmobile.net/app_image/45x45.png"
               },
               "summary": "",
               "brand_code": "BR01",
               "is_head_quarter": false,
               "location": {
                  "latitude": 25.0582138,
                  "longitude": 121.5257634
               }
            }
         ]
      }
   });
});

//===取得門市列表2
router.post('/availableStore2', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "search_coupon_available_store_results": [
            {
               "coupon_id": 1,
               "all_brands_available": true,
               "store_ids": [1, 22, 43]
            },
            {
               "coupon_id": 2,
               "all_brands_available": false,
               "store_ids": [26, 43, 102]
            }
         ]
      }
   });
});

//===活動票券列表
router.post('/search_coupon_activity', (req, res) => {
   console.log(req.body);
   setTimeout(() => {
      let now = new Date();
      let date = now.toLocaleDateString();
      let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      res.json({
         "next": 1,
         "results": {
            "system_datetime": `${date} ${time}`,
            "coupon_activity_ids": [1, 2, 3]
         }
      });
   }, 2000);
});

//===活動票券列表詳情
router.post('/coupon_activity_information', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "coupon_activity_information": [
            {
               "coupon_activity_id": 1,
               "brand_id": 1,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "https://mmrm-file-uat.wisho2o.com/images/pickup_activity20200821103845_5f3f33b5358c8_960_600.jpeg"
               },
               "title": "票券活動標題",
               "status": "opening",
               "redeem_type": "point",
               "point_condition": [
                  {
                     "point_id": 1,
                     "amount": "50"
                  },
                  {
                     "point_id": 2,
                     "amount": "150"
                  },
               ],
               "meta": [
                  {
                     "key": "兌換期間",
                     "value": "2019/07/10 ~ 2019/07/20"
                  }
               ],
               "end_datetime": "2020/10/15 23:59:59",
               "start_datetime": "2020/08/28 00:00:00"
            },
            {
               "coupon_activity_id": 123,
               "brand_id": 1,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "https://mmrm-file-uat.wisho2o.com/images/pickup_activity20200821103845_5f3f33b5358c8_960_600.jpeg"
               },
               "title": "票券活動標題",
               "status": "opening",
               "redeem_type": "point",
               "point_condition": [
                  {
                     "point_id": 1,
                     "amount": "1"
                  },
                  {
                     "point_id": 2,
                     "amount": "1"
                  },
               ],
               "meta": [
                  {
                     "key": "兌換期間",
                     "value": "2019/07/10 ~ 2019/07/20"
                  }
               ],
               "end_datetime": "2020/09/30 23:59:59",
               "start_datetime": "2020/08/28 00:00:00"
            },
            {
               "coupon_activity_id": 3,
               "brand_id": 3,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "https://mmrm-file-uat.wisho2o.com/images/pickup_activity20190826215047_5d63e3b7bcad7_960_600.png"
               },
               "title": "票券活動標題3",
               "status": "closed",
               "redeem_type": "redeem_code",
               "meta": [
                  {
                     "key": "兌換期間",
                     "value": "2019/01/01 ~ 2019/12/31"
                  }
               ],
               "end_datetime": "2020/08/30 23:59:59",
               "start_datetime": "2020/08/28 00:00:00"
            },
            {
               "coupon_activity_id": 2,
               "brand_id": 2,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "https://mmrm-file-uat.wisho2o.com/images/pickup_activity20200821103845_5f3f33b5358c8_960_600.jpeg"
               },
               "title": "票券活動標題2",
               "status": "unopened",
               "redeem_type": "free",
               "meta": [
                  {
                     "key": "兌換期間",
                     "value": "2019/06/24 ~ 2019/07/23"
                  }
               ],
               "end_datetime": "2020/08/30 23:59:59",
               "start_datetime": "2020/08/28 00:00:00"
            }
         ]
      }
   });
});

//===取得所有品牌
router.post('/search_brand', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "brand_ids": [1, 2, 3]
      }
   });
});

//===活動兌換方式
router.post('/brief_coupon_activity_type', (req, res) => {
   res.json({
      "results": {
         "redeem_types": [
            {
               "redeem_type": "free"
            },
            {
               "redeem_type": "redeem_code"
            },
            {
               "redeem_type": "point",
               "point_ids": [1, 2]
            }
         ]
      }
   });
});

//===活動兌換方
router.post('/activityInfo2', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "coupon_activity_information": [
            {
               "coupon_activity_id": 1,
               "brand_id": 1,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "http://dev.wishmobile.net/app_image/960x600.png"
               },
               "title": "票券活動標題",
               "status": "opening",
               "redeem_type": "point",
               "point_condition": [
                  {
                     "point_id": 1,
                     "amount": "50"
                  },
                  {
                     "point_id": 2,
                     "amount": "150"
                  }
               ],
               "meta": [
                  {
                     "key": "適用等級",
                     "value": "一般等級、VIP"
                  },
                  {
                     "key": "兌換期間",
                     "value": "2000/01/01 ~ 2001/01/01"
                  },
                  {
                     "key": "兌換方式",
                     "value": "免費"
                  },
                  {
                     "key": "兌換次數",
                     "value": "每人限定一次"
                  }
               ],
               "end_datetime": "2020/01/01 23:59:59",
               "start_datetime": "2019/07/01 00:00:00",
               "coupon_ids": [1, 2],
               "content": "<p>HTML 內容一</p>"
            }
         ]
      }
   });
});

//===票券兌換
router.post('/exchange', (req, res) => {
   console.log(req.body)
   setTimeout(() => {
      res.json({
         "rcrm": {
            "RC": "C01",
            "RM": "兌換失敗",
            "RM_detail": ""
         },
         "results": {
            "coupon_redeem_result": {
               "my_coupon_ids": [1, 2],
               "meta": [
                  {
                     "key": "交易型態",
                     "value": "兌換優惠券"
                  },
                  {
                     "key": "交易編號",
                     "value": "1234567890"
                  },
                  {
                     "key": "交易時間",
                     "value": "2019/01/01 00:00"
                  },
                  {
                     "key": "交易店家",
                     "value": "AABC"
                  },
                  {
                     "key": "交易方式",
                     "value": "免費"
                  },
                  {
                     "key": "兌換活動",
                     "value": "活動票券一"
                  },
                  {
                     "key": "兌換品項",
                     "value": "票券一、票券二、票券三"
                  }
               ]
            }
         }
      });
   }, 2000);
});

//===cms search item(問與答)
router.post('/faqList', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "search_cms_list_item_results": [
            // {
            //    "release_starts_at": "2020/12/01 00:00:00",
            //    "release_ends_at": "2021/01/01 23:59:59",
            //    "brand_id": 2,
            //    "title": "FAQ",
            //    "sub_title": null,
            //    "feature_image": {
            //       "width": 1366,
            //       "height": 768,
            //       "url": "https://yjs-file-uat.wisho2o.com/images/cms20201201161235_5fc5faf306d9f_1366_768.jpeg"
            //    },
            //    "link_block": {
            //       "title": "請選擇欲前往的連結",
            //       "links": [
            //          {
            //             "link_id": 6,
            //             "title": "Google",
            //             "sub_title": "",
            //             "type": "hyperlink",
            //             "book_id": null,
            //             "hyperlink_open_type": "webview",
            //             "hyperlink_url": "https://www.google.com.tw",
            //             "hyperlink_alert": null,
            //             "hyperlink_open_with_password": false,
            //             "feature_image": {
            //                "width": null,
            //                "height": null,
            //                "url": null
            //             },
            //             "hyperlink_with_parameters": false
            //          }
            //       ]
            //    }
            // },
            {
               "release_starts_at": "2020/12/02 00:00:00",
               "release_ends_at": "2099/01/02 23:59:59",
               "brand_id": 2,
               "title": "FAQ_2",
               "sub_title": null,
               "feature_image": {
                  "width": 283,
                  "height": 237,
                  "url": "https://yjs-file-uat.wisho2o.com/images/cms20201202161531_5fc74d23eb276_283_237.png"
               },
               "link_block": {
                  "title": "",
                  "links": [
                     {
                        "link_id": 4,
                        "title": "FAQ_2",
                        "sub_title": "",
                        "type": "book",
                        "book_id": 92,
                        "hyperlink_open_type": null,
                        "hyperlink_url": null,
                        "hyperlink_alert": null,
                        "hyperlink_open_with_password": false,
                        "feature_image": {
                           "width": null,
                           "height": null,
                           "url": null
                        },
                        "hyperlink_with_parameters": false
                     }
                  ]
               }
            }
         ]
      }
   });
});

//===書本詳情(問與答)
router.post('/faqBook', (req, res) => {
   console.log(req.body);
   res.json({
      "results": {
         "book": {
            "title": "書本標題",
            "chapters": [
               {
                  "title": "集點活動",
                  "pages": [
                     {
                        "page_id": 10,
                        "title": "GK Cafe 周年慶",
                        "feature_image": {
                           "width": 960,
                           "height": 600,
                           "url": "http://dev.wishmobile.net/app_image/960x600.png"
                        },
                        "page_has_detail": true
                     }
                  ]
               },
               {
                  "title": "單日限定活動",
                  "pages": [
                     {
                        "page_id": 18,
                        "title": "GK Cafe 周年慶，上班族專屬",
                        "feature_image": {
                           "width": 960,
                           "height": 600,
                           "url": "http://dev.wishmobile.net/app_image/960x600.png"
                        },
                        "page_has_detail": true
                     },
                     {
                        "page_id": 25,
                        "title": "GK Cafe 周年慶，好友相聚",
                        "feature_image": {
                           "width": 960,
                           "height": 600,
                           "url": "http://dev.wishmobile.net/app_image/960x600.png"
                        },
                        "page_has_detail": false
                     }
                  ]
               }
            ]
         }
      }
   });
});

//===問與答頁面詳情
router.post('/faqPage', (req, res) => {
   console.log(req.body);
   setTimeout(() => {
      res.json({
         "results": {
            "page": {
               "page_id": 2,
               "title": "GK Cafe 周年慶，上班族專屬",
               "content": "<p>hello world</p>",
            }
         }
      });
   }, 2000);
});

//===書本api
router.post('/cms_book', (req, res) => {
   res.json({
      "results": {
         "book": {
            "title": "測試書本",
            "chapters": [
               {
                  "title": "測試章節",
                  "pages": [
                     {
                        "page_id": 134,
                        "title": "測試頁面",
                        "feature_image": {
                           "width": 915,
                           "height": 600,
                           "url": "https://mmrm-file-uat.wisho2o.com/images/book_media20200506145428_5eb25f249ffe0_915_600.jpeg"
                        },
                        "page_has_detail": true
                     }
                  ]
               },
               {
                  "title": "第二章",
                  "pages": [
                     {
                        "page_id": 135,
                        "title": "第二章第一頁",
                        "feature_image": {
                           "width": null,
                           "height": null,
                           "url": null
                        },
                        "page_has_detail": true
                     },
                     {
                        "page_id": 136,
                        "title": "2-2",
                        "feature_image": {
                           "width": null,
                           "height": null,
                           "url": null
                        },
                        "page_has_detail": true
                     }
                  ]
               }
            ]
         }
      }
   })
});

//===書本頁面測試api(含youtube)
router.post('/cms_book_page', (req, res) => {
   res.json({
      "results": {
         "page": {
            "page_id": 134,
            "title": "測試頁面",
            "content": "",
            "brand_id": 14,
            "feature_image": {
               "width": 915,
               "height": 600,
               "url": "https://mmrm-file-uat.wisho2o.com/images/book_media20200506145428_5eb25f249ffe0_915_600.jpeg"
            },
            "meta": [
               {
                  "key": "活動時間",
                  "value": "2020/3/1-2020/5/31"
               },
               {
                  "key": "活動門市",
                  "value": "全門市適用"
               }
            ],
            "images": [
               {
                  "type": "image",
                  "width": 915,
                  "height": 600,
                  "url": "https://mmrm-file-uat.wisho2o.com/images/book_media20200506145428_5eb25f249ffe0_915_600.jpeg"
               },
               {
                  "type": "youtube",
                  "width": 915,
                  "height": 600,
                  "url": "https://www.youtube.com/embed/qHiM6MWrbKM"
               },
               {
                  "type": "image",
                  "width": 915,
                  "height": 600,
                  "url": "https://mmrm-file-uat.wisho2o.com/images/pickup_activity20200821103845_5f3f33b5358c8_960_600.jpeg"
               },
               {
                  "type": "youtube",
                  "width": 915,
                  "height": 600,
                  "url": "https://www.youtube.com/embed/ljsioLig7jE"
               },
            ],
            "link_blocks": [
               {
                  "title": "相關測試",
                  "links": [
                     {
                        "link_id": 314,
                        "title": "前往官網",
                        "sub_title": "今天天氣好",
                        "type": "hyperlink",
                        "book_id": null,
                        "hyperlink_open_type": "browser",
                        "hyperlink_url": "https://www.tasty.com.tw/",
                        "hyperlink_alert": null,
                        "hyperlink_open_with_password": false,
                        "feature_image": {
                           "width": null,
                           "height": null,
                           "url": null
                        },
                        "hyperlink_with_parameters": false
                     },
                     {
                        "link_id": 315,
                        "title": "我的券匣",
                        "sub_title": "hello world",
                        "type": "app",
                        "book_id": null,
                        "hyperlink_open_type": null,
                        "hyperlink_url": "mmrm://my_coupon",
                        "hyperlink_alert": null,
                        "hyperlink_open_with_password": false,
                        "feature_image": {
                           "width": null,
                           "height": null,
                           "url": null
                        },
                        "hyperlink_with_parameters": false
                     },
                     {
                        "link_id": 315,
                        "title": "我的書本",
                        "sub_title": "book",
                        "type": "book",
                        "book_id": 77,
                        "hyperlink_open_type": null,
                        "hyperlink_url": "mmrm://my_coupon",
                        "hyperlink_alert": null,
                        "hyperlink_open_with_password": false,
                        "feature_image": {
                           "width": null,
                           "height": null,
                           "url": null
                        },
                        "hyperlink_with_parameters": false
                     }
                  ]
               },
            ],
            "bottom_link_block": {
               "title": "菜單資訊",
               "links": [
                  {
                     "link_id": 316,
                     "title": "a菜單",
                     "sub_title": "",
                     "type": "app",
                     "book_id": null,
                     "hyperlink_open_type": null,
                     "hyperlink_url": "mmrm://edm",
                     "hyperlink_alert": null,
                     "hyperlink_open_with_password": false,
                     "feature_image": {
                        "width": null,
                        "height": null,
                        "url": null
                     },
                     "hyperlink_with_parameters": false
                  },
                  {
                     "link_id": 316,
                     "title": "b菜單",
                     "sub_title": "",
                     "type": "hyperlink",
                     "book_id": null,
                     "hyperlink_open_type": null,
                     "hyperlink_url": "mmrm://edm",
                     "hyperlink_alert": null,
                     "hyperlink_open_with_password": false,
                     "feature_image": {
                        "width": null,
                        "height": null,
                        "url": null
                     },
                     "hyperlink_with_parameters": false
                  }
               ]
            },
            // bottom_link_block: null
         }
      },
   })
});

//===cms會員訊息
router.post('/public_message_inbox', async (req, res) => {
   let message = [];
   for (let i = 1; i <= 10; i++) {
      message.push({
         "datetime": "2019/01/01 20:30:00",
         "brand_id": 1,
         "title": "public message",
         "sub_title": "hello world",
         "feature_image": {
            "width": 960,
            "height": 600,
            "url": "http://dev.wishmobile.net/app_image/960x600.png"
         },
         "link_block": {
            "title": "",
            "links": [
               {
                  "link_id": 13,
                  "title": "歡慶資訊",
                  "sub_title": "",
                  "type": "book",
                  "book_id": 77,
                  "hyperlink_open_type": null,
                  "hyperlink_url": null,
                  "hyperlink_alert": null,
                  "hyperlink_open_with_password": false,
                  "feature_image": {
                     "width": 300,
                     "height": 285,
                     "url": "http://dev.wishmobile.net/app_image/300x285.png"
                  },
                  "hyperlink_with_parameters": false
               }
            ]
         }
      })
   };
   setTimeout(() => {
      res.json({
         next: 1,
         results: {
            message
         }
      });
   }, 1000)
});

router.post('/member_message_inbox', async (req, res) => {
   let message = [];
   for (let i = 1; i <= 10; i++) {
      message.push({
         "datetime": "2019/01/01 20:30:00",
         "brand_id": 1,
         "title": "member message",
         "summary": "member summary",
         "sub_title": "hello world",
         "feature_image": {
            "width": 960,
            "height": 600,
            "url": "http://dev.wishmobile.net/app_image/960x600.png"
         },
         "link_block": {
            "title": "",
            "links": [
               {
                  "link_id": 13,
                  "title": "歡慶資訊",
                  "sub_title": "",
                  "type": "book",
                  "book_id": 77,
                  "hyperlink_open_type": null,
                  "hyperlink_url": null,
                  "hyperlink_alert": null,
                  "hyperlink_open_with_password": false,
                  "feature_image": {
                     "width": 300,
                     "height": 285,
                     "url": "http://dev.wishmobile.net/app_image/300x285.png"
                  },
                  "hyperlink_with_parameters": false
               }
            ]
         }
      })
   };
   setTimeout(() => {
      res.json({
         next: null,
         results: {
            message
         }
      });
   }, 1000)
});

//===通知訊息
router.post('/member_notification_inbox', async (req, res) => {
   let message = [];
   for (let i = 1; i <= 10; i++) {
      message.push({
         "datetime": "2019/01/01 20:30:00",
         "brand_id": 1,
         "title": "notify message",
         "sub_title": "hello world",
         "feature_image": {
            "width": 960,
            "height": 600,
            "url": "http://dev.wishmobile.net/app_image/960x600.png"
         },
         "link_block": {
            "title": "",
            "links": [
               {
                  "link_id": 13,
                  "title": "歡慶資訊",
                  "sub_title": "",
                  "type": "book",
                  "book_id": 77,
                  "hyperlink_open_type": null,
                  "hyperlink_url": null,
                  "hyperlink_alert": null,
                  "hyperlink_open_with_password": false,
                  "feature_image": {
                     "width": 300,
                     "height": 285,
                     "url": "http://dev.wishmobile.net/app_image/300x285.png"
                  },
                  "hyperlink_with_parameters": false
               }
            ]
         }
      })
   };
   setTimeout(() => {
      res.json({
         next: null,
         results: {
            notification: []
         }
      });
   }, 1000)
});

//===mission
router.post('/search_mission', async (req, res) => {
   let result = {
      "rcrm": {
         "RC": "C01",
         "RM": "成功",
         "RM_detail": ""
      },
      "next": 1,
      "results": {
         "system_datetime": "2019/07/17 23:59:50",
         "mission_ids": [1, 2, 3]
      }
   };
   setTimeout(() => {
      res.json(result);
   }, 1000)
});

//任務列表用
router.post('/mission_information', async (req, res) => {
   let result = {
      "rcrm": {
         "RC": "C01",
         "RM": "成功",
         "RM_detail": ""
      },
      "results": {
         "mission_information": [
            {
               "mission_id": 1,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "http://dev.wishmobile.net/app_image/960x600.png"
               },
               "title": "2019 周年任務",
               "description": "GK 周年慶！達成指定消費任務請你免費喝咖啡、吃蛋糕。",
               "status": "opening",
               "end_datetime": "2019/07/21 23:59:59",
               "start_datetime": "2019/07/01 00:00:00"
            },
            {
               "mission_id": 2,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "http://dev.wishmobile.net/app_image/960x600.png"
               },
               "title": "App 大改版，會員專屬新功能上線",
               "status": "unopened",
               "end_datetime": "2019/07/24 23:59:59",
               "start_datetime": "2019/07/01 00:00:00"
            },
            {
               "mission_id": 3,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "http://dev.wishmobile.net/app_image/960x600.png"
               },
               "title": "中秋賞月任務",
               "status": "closed",
               "end_datetime": "2020/01/01 23:59:59",
               "start_datetime": "2019/07/01 00:00:00"
            }
         ]
      }
   };

   setTimeout(() => {
      res.json(result);
   }, 1000);

});

//任務詳情頁面用
router.post('/mission_information_page', async (req, res) => {
   let result = {
      "rcrm": {
         "RC": "C01",
         "RM": "成功",
         "RM_detail": ""
      },
      "results": {
         "mission_information": [
            {
               "mission_id": 1,
               "feature_image": {
                  "width": 960,
                  "height": 600,
                  "url": "http://dev.wishmobile.net/app_image/960x600.png"
               },
               "title": "2019 周年任務",
               "description": "GK 周年慶！達成指定消費任務請你免費喝咖啡、吃蛋糕。",
               "status": "opening",
               "content": "<p>HTML 內容</p>",
               "meta": [
                  {
                     "key": "適用對象",
                     "value": "全部會員、非會員"
                  },
                  {
                     "key": "適用門市",
                     "value": "全門市適用"
                  }
               ],
               "end_datetime": "2019/07/21 23:59:59",
               "start_datetime": "2019/07/01 00:00:00",
               "milestone_summary_info": [
                  {
                     "milestone_id": 1,
                     "title": "關卡 1",
                     "task_amount": 3
                  },
                  {
                     "milestone_id": 2,
                     "title": "關卡 2",
                     "task_amount": 9
                  },
                  {
                     "milestone_id": 3,
                     "title": "關卡 3",
                     "task_amount": 5
                  }
               ]
            }
         ]
      }
   }

   res.json(result);
});

//我的任務
router.post('/my_mission_information', async (req, res) => {
   let result = {
      "rcrm": {
         "RC": "C01",
         "RM": "成功",
         "RM_detail": ""
      },
      "results": {
         "my_mission_information": {
            "mission_id": 1,
            "milestones": [
               {
                  "milestone_id": 1,
                  "title": "關卡 1",
                  "task": {
                     "complete_count": 3,
                     "amount": 3,
                     "progress": [
                        {
                           "task_id": 1,
                           "complete_count": "1",
                           "max_complete_amount": "1"
                        },
                        {
                           "task_id": 2,
                           "complete_count": "3",
                           "max_complete_amount": "3"
                        },
                        {
                           "task_id": 3,
                           "complete_count": "5",
                           "max_complete_amount": "5"
                        }
                     ]
                  }
               },
               {
                  "milestone_id": 2,
                  "title": "關卡 2",
                  "task": {
                     "complete_count": 2,
                     "amount": 5,
                     "progress": [
                        {
                           "task_id": 4,
                           "complete_count": "1",
                           "max_complete_amount": "1"
                        },
                        {
                           "task_id": 5,
                           "complete_count": "3",
                           "max_complete_amount": "3"
                        }
                     ]
                  }
               },
               {
                  "milestone_id": 3,
                  "title": "關卡 3",
                  "task": {
                     "complete_count": "6",
                     "amount": "0",
                     "progress": []
                  }
               }
            ]
         }
      }
   }
   res.json(result);
});



module.exports = router;