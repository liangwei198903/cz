CREATE TABLE `cz_pics` (
  `pic_id` int(8) NOT NULL,
  `pid` int(11) ,
  `sm` varchar(128) ,
  `md` varchar(128) ,
  `lg` varchar(128) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `cz_pics` (`pic_id`,`pid`, `sm`, `md`, `lg`) VALUES
(1,9, 'imgs/detail-1.png', 'imgs/detail-1-big.png', 'imgs/detail-1-lg.png'),
(2,9, 'imgs/detail-2.png', 'imgs/detail-2-big.png', 'imgs/detail-2-lg.png'),
(3,9, 'imgs/detail-3.png', 'imgs/detail-3-big.png', 'imgs/detail-3-lg.png'),
(4,9, 'imgs/detail-4.png', 'imgs/detail-4-big.png', 'imgs/detail-4-lg.png'),
(5,10, 'imgs/pj_01_1.png', 'imgs/pj_01_big_1.png', 'imgs/pj_01_lg_1 .png'),
(6,10, 'imgs/pj_01_2.png', 'imgs/pj_01_big_2.png', 'imgs/pj_01_lg_2 .png'),
(7,10, 'imgs/pj_01_3.png', 'imgs/pj_01_big_3.png', 'imgs/pj_01_lg_3 .png'),
(8,10, 'imgs/pj_01_4.png', 'imgs/pj_01_big_4.png', 'imgs/pj_01_lg_4 .png'),
(9,11, 'imgs/pj_02_1.png', 'imgs/pj_02_big_1.png', 'imgs/pj_02_lg_1.png'),
(10,11, 'imgs/pj_02_2.png', 'imgs/pj_02_big_2.png', 'imgs/pj_02_lg_2.png'),
(11,12, 'imgs/pj_03_1.png', 'imgs/pj_03_big_1.png', 'imgs/pj_03_lg_1 .png'),
(12,12, 'imgs/pj_03_2.png', 'imgs/pj_03_big_2.png', 'imgs/pj_03_lg_2 .png'),
(13,13, 'imgs/pj_04_1.png', 'imgs/pj_04_big_1.png', 'imgs/pj_04_lg_1.png'),
(14,13, 'imgs/pj_04_2.png', 'imgs/pj_04_big_2.png', 'imgs/pj_04_lg_2.png'),
(15,13, 'imgs/pj_04_3.png', 'imgs/pj_04_big_3.png', 'imgs/pj_04_lg_3.png'),
(16,14, 'imgs/pj_05_1.png', 'imgs/pj_05_big_1.png', 'imgs/pj_05_lg_1 .png'),
(17,14, 'imgs/pj_05_2.png', 'imgs/pj_05_big_2.png', 'imgs/pj_05_lg_2 .png'),
(18,14, 'imgs/pj_05_3.png', 'imgs/pj_05_big_3.png', 'imgs/pj_05_lg_3 .png'),
(19,15, 'imgs/pj_06_1.png', 'imgs/pj_06_big_1.png', 'imgs/pj_06_lg_1.png'),
(20,15, 'imgs/pj_06_2.png', 'imgs/pj_06_big_2.png', 'imgs/pj_06_lg_2.png'),
(21,15, 'imgs/pj_06_3.png', 'imgs/pj_06_big_3.png', 'imgs/pj_06_lg_3.png')