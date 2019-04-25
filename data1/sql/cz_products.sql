CREATE TABLE `cz_products` (
  `pid` int(8) NOT NULL,
  `title` varchar(32) ,
  `price` int(8),
  `pic` varchar(128) ,
  `href` varchar(128) ,
  `subtitle` varchar(128) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `cz_products` (`pid`, `title`, `price`, `pic`, `href`,`subtitle`) VALUES
(9, null, null,'imgs/pj_big_01.png', 'detail.html?pid=9', null),
(10, '挂耳式蓝牙耳机', '299.00', 'imgs/pj_01.png','detail.html?pid=10','外观时尚 商务人士必备产品'),
(11, '畅呼吸超级除甲醛口罩', '99.00', 'imgs/pj_02.png','detail.html?pid=11','三层碳纤维防护 除去空气有害气体'),
(12, '畅呼吸智能口罩', '99.00', 'imgs/pj_03.png','detail.html?pid=12','两层过滤层 PM2.5 粉尘超强过滤'),
(13, '除甲醛超级活性炭滤芯', '1299.00', 'imgs/pj_04.png','detail.html?pid=13','打造专业除甲醛超级活性炭滤芯'),
(14, '除霾除甲醛高效复合滤芯', '1699.00', 'imgs/pj_05.png','detail.html?pid=14','精选双层防护材质、过滤更精细、去味更有效'),
(15, '畅呼吸汽车滤芯器', '899.00', 'imgs/pj_06.png','detail.html?pid=15','净化空气 绿色出行 保卫全家健康')

