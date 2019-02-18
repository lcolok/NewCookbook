var dataNutritions = [
    /*{ediblePart: '可食用部分'},*/
    {energy: '能量'},
    {protein: '蛋白质'},
    {fat: '脂肪'},
    {carbohydrate: '碳水化合物'},
    {dietaryFiber: '膳食纤维'},
    {cholesterol: '胆固醇'},
    {vitaminA: '维生素A'},
    {carotene: '胡萝卜素'},
    {vitaminB1: '维生素B1'},
    {vitaminB2: '维生素B2'},
    {vitaminB3: '维生素B3'},
    {vitaminB5: '维生素B5'},
    {vitaminB6: '维生素B6'},
    {vitaminB12: '维生素B12'},
    {vitaminC: '维生素C'},
    {vitaminD: '维生素D'},
    {vitaminE: '维生素E'},
    {vitaminK: '维生素K'},
    {vitaminH: '维生素H'},
    {folicAcid: '叶酸'},
    {ca: '钙'},
    {p: '磷'},
    {k: '磷'},
    {na: '钠'},
    {mg: '镁'},
    {fe: '铁'},
    {zn: '锌'},
    {se: '硒'},
    {cu: '铜'},
    {mn: '锰'},
    {i: '碘'},
    {purine: '嘌呤'}
];

var dataNutritionsUnit = [
    {energy: 'kcal'},
    {protein:  'g'},
    {fat: 'g'},
    {carbohydrate: 'g'},
    {dietaryFiber: 'g'},
    {cholesterol: 'mg'},
    {vitaminA: 'μg'},
    {carotene: 'μg'},
    {vitaminB1: 'mg'},
    {vitaminB2: 'mg'},
    {vitaminB3: 'mg'},
    {vitaminB5: 'mg'},
    {vitaminB6: 'mg'},
    {vitaminB12: 'μg'},
    {vitaminC: 'mg'},
    {vitaminD: 'μg'},
    {vitaminE: 'mg'},
    {vitaminK: 'μg'},
    {vitaminH: 'μg'},
    {folicAcid: 'μg'},
    {ca: 'mg'},
    {p: 'mg'},
    {k: 'mg'},
    {na: 'mg'},
    {mg: 'mg'},
    {fe: 'mg'},
    {zn: 'mg'},
    {se: 'μg'},
    {cu: 'mg'},
    {mn: 'mg'},
    {i: 'μg'},
    {purine: 'mol'}
];

/*{1:'电饭煲',2:'烹饪机',3:'电压力锅',4:'豆浆机',5:'面包机',6:'电炖锅',7:'IH炒灶',8:'果汁机',9:'料理机',10:'电饼铛',11:'空气炸锅',12:'酸奶机',13:'烤箱',14:'微波炉',15:'微波饭煲',16:'蒸汽炉',17:'砂锅',18:'炒锅',19:'电磁炉',20:'电水壶',21:'破壁机'}*/
var applianceList=['','电饭煲','烹饪机','电压力锅','豆浆机','面包机','电炖锅','IH炒灶','果汁机','料理机','电饼铛','空气炸锅','酸奶机','烤箱','微波炉','微波饭煲','蒸汽炉','砂锅','炒锅','电磁炉','电水壶','破壁机'];

var applianceList_1=['电饭煲','烹饪机','电压力锅','豆浆机','面包机','电炖锅','IH炒灶','果汁机','料理机','电饼铛','空气炸锅','酸奶机','烤箱','微波炉','微波饭煲','蒸汽炉','砂锅','炒锅','电磁炉','电水壶','破壁机'];

var dataStepMode = { 1001: '加热', 1002: '保温', 1003: '烧水', 1004: '爆料', 1005: '烧汤', 1006: '涮', 1007: '烫', 1008: '蒸（鱼虾）', 1009: '蒸（肉片）', 1010: '蒸（其他）', 1011: '煎炸', 1012: '炒菜', 1013: '爆炒', 1014: '火锅', 1015: '蒸煮', 1016: '煲汤', 1017: '煮粥', 1018: '文火' };

var dataAreaList = { 1: '东北', 2: '华北华东', 3: '西北', 4: '华南', 5: '长江流域', 6: '云贵', 7: '非主产区' };

var dataClassificationsEnArr = ['applianceCategory','unWifi','user_menu', 'cooking_style', 'meat_type', 'effect_type', 'dish_type', 'taste_type', 'people_type', 'difficulty_type', 'suitable_season' /*oil_level:'含油程度', taboo_crowd:'禁忌人群', cook_type:'烹饪方式', platform:'来源平台',*/ ];
var dataClassifications = { applianceCategory:'智能食谱',unWifi:'非智能食谱',user_menu:'达人食谱', cooking_style:'菜系', meat_type:'食材分类', effect_type:'功效类别', dish_type:'菜式分类', taste_type:'口味类别', people_type:'人群类别', difficulty_type:'难易程度', suitable_season:'食用季节' /*oil_level:'含油程度', taboo_crowd:'禁忌人群', cook_type:'烹饪方式', platform:'来源平台',*/ };
var dataClassificationsArr = ['智能食谱','非智能食谱','达人食谱','菜系','食材分类','功效类别','菜式分类','口味类别','人群类别','难易程度','食用季节'];

var dataMaterialUnit = ['克', '毫升', '个', '根', '片', '块', '颗', '瓣', '朵', '只', '条', '包', '张', '粒', '杯', '茶匙', '汤匙', '盒', '节', '奶粉勺', '串', '大勺', '小勺', '小块', '易拉罐'];
var dataMaterialUnitUser = ['适量','克', '毫升', '个', '根', '片', '块', '颗', '瓣', '朵', '只', '条', '包', '张', '粒', '杯', '茶匙', '汤匙', '盒', '节', '奶粉勺', '串', '大勺', '小勺' ];

var weekends = [{weekday:"周日"},{weekday:"周一"},{weekday:"周二"},{weekday:"周三"},{weekday:"周四"},{weekday:"周五"},{weekday:"周六"}];

var menuStyle = {wifi:0,unwifi:1,diy:2};

var specialsort=[{classifications:5,start:50,end:69}];

var peopleTypeList = {0:'全体人群',1:'儿童',2:'上班族',3:'老年人',4:'孕妇',5:'婴幼儿',6:'幼儿',7:'青少年',8:'备孕期',9:'孕早期',10:'孕中期',11:'孕晚期',12:'产妇',13:'乳母',14:'更年期',15:'电脑工作者',16:'肥胖人群',17:'高血压患者',18:'糖尿病患者',19:'高血脂患者',20:'冠心病患者',21:'高胆固醇患者',22:'肠胃炎患者',23:'痛风患者',24:'骨质疏松患者',25:'肾病患者',26:'贫血患者',27:'结石患者',28:'哮喘患者',29:'消化不良患者',30:'中风患者',31:'女性',32:'男性'};
var effectTypeList = {0:'无',1:'瘦身',2:'补肾',3:'祛寒',4:'丰胸',5:'美容',6:'排毒',7:'补钙',8:'减肥',9:'增重',10:'补血',11:'延缓衰老',12:'降血压',13:'降血脂',14:'降血糖',15:'降胆固醇',16:'预防心血管疾病',17:'孕期调理',18:'产后调理',19:'催乳',20:'增强免疫力',21:'预防老年痴呆',22:'预防骨质疏松',23:'防癌抗癌',24:'促生长发育',25:'缓解痛风',26:'养胃健脾',27:'护肝',28:'明目',29:'健脑益智',30:'祛湿',31:'乌发',32:'滋阴',33:'润肺止咳',34:'清热解暑',35:'清心去火',36:'利尿消肿',37:'安神助眠'};

/*美勺精讯的链接*/
var bannerLink=[
    'http://mp.weixin.qq.com/s/3vFIRdZR2K3h4gk7e3_7Rw',
    'http://mp.weixin.qq.com/s?__biz=MzA5OTkyNTE0Nw==&mid=2650906987&idx=1&sn=71c204729e00858cc32da1caf340bce2&chksm=8b0fec9fbc786589b9434756ebc8d71185b36e4426fb93655dd1648fe50ef25f62a9a6b01406&scene=4#wechat_redirect',
    'http://mp.weixin.qq.com/s/vPeqQdF0uVLCQZY-Qoa8Sw',
    'http://mp.weixin.qq.com/s/NUQU97y3FFrPXLExUf9X_A',
    'http://mp.weixin.qq.com/s/h7xwsM2NQXN6YK5_sWjIkg',
    'https://mp.weixin.qq.com/s?__biz=MzA5OTkyNTE0Nw==&mid=2650907217&idx=1&sn=fcceb80f9c145735cf008f9b812ca119&chksm=8b0fefa5bc7866b39bc1ee0335b03f15dc60db4283bc5a90561d949294869172f6914b395f75&scene=0&key=3262865f4711174824c05c3401fde9a8a78ea0c1d7836bf71f6d78a7cfe295303a023ce5c2e737b2f39c3d1c8b22648e5a07f7707a1fdf298027cf7a05da3cf2146f683b68103e178190d05e84ce24fd&ascene=7&uin=MjMwNDM3MzA2MQ%3D%3D&devicetype=android-23&version=26050332&nettype=WIFI&pass_ticket=Wmi2xgON8jZM5fZmqRZ%2F2FtBguUtdNZclUkcRbOz%2FS%2BIfHQNI2OTIrnXl35xpBFG&wx_header=1',
    'http://mp.weixin.qq.com/s/QOTLaskyG5vevtyCkShHpg',
    'http://mp.weixin.qq.com/s/MfvYdU0x5FWQi4sp8RWs-g'];

var peopleType = {0:'全体人群',1:'儿童',2:'上班族',3:'老年人',4:'孕妇',5:'婴幼儿',6:'幼儿',7:'青少年',8:'备孕期',9:'孕早期',10:'孕中期',11:'孕晚期',12:'产妇',13:'乳母',14:'更年期',15:'电脑工作者',16:'肥胖人群',17:'高血压患者',18:'糖尿病患者',19:'高血脂患者',20:'冠心病患者',21:'高胆固醇患者',22:'肠胃炎患者',23:'痛风患者',24:'骨质疏松患者',25:'肾病患者',26:'贫血患者',27:'结石患者',28:'哮喘患者',29:'消化不良患者',30:'中风患者',31:'女性',32:'男性',33:'一般人群'};

var diaglog = {
    'show': {
        maskElmcssText: 'position:fixed;top:0;left:0;background: #000;width:100%;height:100%;z-index:9998;opacity: 0.7;filter:alpha(opacity=70)',
        targetcssText: 'position:fixed;display:block;left:50%;top:50%;z-index:9999'
    },
    'attention': {
        maskElmcssText:'position:fixed;top:0;left:0;background: #000;width:100%;height:100%;z-index:9998;opacity: 0.7;filter:alpha(opacity=70)',
        targetcssText: 'position:fixed;display:block;left:50%;top:25%;z-index:9999'
     },
    'tips': {
        maskElmcssText:'position:fixed;top:0;left:0;width:100%;height:100%;z-index:9998;opacity: 0.7;filter:alpha(opacity=70)',
        targetcssText: 'position:fixed;display:block;left:50%;top:25%;z-index:9999'
    }
};


/*用户自荐食谱*/
var UserMenu ={
    id:0,
    menuName:'',
    applianceCategory:'',
    applianceModel:0,
    mainPicture:'',
    videoUrl:'',
    description:'' ,
    tips:'',
    cookTime:'',
    menuState:1,
    nutrition:'',
    commandId:0,
    collectCounts:0,
    likeCounts:0,
    menuType:0,
    creatUserId:'',
    createTime:'',
    modifyTime:'',
    status:1
};
var UserMenuIngrediens={
    'id':0,
    'mid':0,
    'ingrediensName':'',
    'ingrediensType':'',
    'weight':'',
    'unit':'',
    'accountFlag':'',
    'foodId':0,
    'accountWeight':'',
    'sortId':''
};
var UserStepDisciption={
    'id':0,
    'mid':0,
    'picUrl':'',
    'discription':'',
    'sortId':''
};
var UserMenuClassification = {
    'id':0,
    'mid':0,
    'cookingStyle':'',
    'meatType':'',
    'effectType':'',
    'dishType':'',
    'tasteType':'',
    'peopleType':'',
    'difficultyType':'',
    'suitableSeason':'',
    'oilLevel':'',
    'tabooCrowd':'',
    'cookType':'',
    'platform':'',
    'tag':''
}