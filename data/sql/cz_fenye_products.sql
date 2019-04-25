-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-31 13:03:01
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cz`
--

-- --------------------------------------------------------

--
-- 表的结构 `cz_fenye_products`
--

CREATE TABLE `cz_fenye_products` (
  `pid` int(8) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `subtitle` varchar(128) DEFAULT NULL,
  `price` varchar(12) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cz_fenye_products`
--


INSERT INTO `cz_fenye_products` (`pid`, `title`, `subtitle`, `price`, `pic`, `href`) VALUES
(16, 'Smartisan 半入耳式耳机 心动版', '哑光表面、专业级调音 适用于坚果 Pro 系列', '299.00',
'imgs/fenye/gov_1.png', 'detail.html?pid=16'),
(17, 'Smartisan 二合一数据线 0.2m / 1.5m', 'Type-C & Micro-USB 双接口、夜间微光灯', '599.00',
'imgs/fenye/gov_2.png', 'detail.html?pid=17'),
(18, '锤子坚果 Pro 2', '次世代旗舰手机，内藏来自未来的“电脑”', '3599.00',
'imgs/fenye/gov_3.png', 'detail.html?pid=18'),
(19, 'Smartisan 半入耳式耳机', '经典配色、专业调音、高品质麦克风', '599.00',
'imgs/fenye/gov_4.png', 'detail.html?pid=19'),
(20, '锤子坚果 Pro 2 特别版', 'Qualcomm 骁龙 636 八核处理器 · 1200 万 + 500 万像素双摄像头 · 3500mAh 大电池 · 18W 快速充电 · 人脸解锁 + 指纹解锁', '2599.00',
'imgs/fenye/gov_5.png', 'detail.html?pid=20'),
(21, '锤子移动电源', '10000MAH大容量 原厂原装 安全可靠', '99.00',
'imgs/fenye/gov_6.png', 'detail.html?pid=21'),
(22, 'ACIL E1 颈挂式蓝牙耳机', '支持blueteeth4.0 可与各种设备匹配 方便快捷', '799.00',
'imgs/fenye/gov_7.png', 'detail.html?pid=22'),
(23, '锤子蓝牙鼠标', '支持blueteeth4.0 可与各种设备匹配 方便快捷', '599.00',
'imgs/fenye/gov_8.png', 'detail.html?pid=23'),
(24, '锤子挂耳式蓝牙耳机', '外观时尚 商务人士必备产品', '199.00',
'imgs/fenye/gov_9.png', 'detail.html?pid=24'),
(25, '坚果2手机后壳', 'pc软质材质 手感更好 颜色丰富 时尚前沿', '69.00',
'imgs/fenye/gov_10.png', 'detail.html?pid=25'),
(26, '锤子项圈式蓝牙耳机', '2000MAH 超长续航 支持blueteeth4.0 立体环绕应', '699.00',
'imgs/fenye/gov_11.png', 'detail.html?pid=26'),
(27, '畅呼吸汽车滤芯器', '净化空气 绿色出行 保卫全家健康', '1299.00',
'imgs/fenye/gov_12.png', 'detail.html?pid=27'),
(28, '锤子吉米无屏电视', '1080高清分辨率 JBL音效 20000毫安电量', '6999.00',
'imgs/fenye/gov_13.png', 'detail.html?pid=28'),
(29, 'FILL IDVA2降噪耳机', '智能穿戴感应 自带HI-FI音效 调控噪音', '999.00',
'imgs/fenye/gov_14.png', 'detail.html?pid=29'),
(30, '锤子智能蓝牙车载支架', '超强吸力 坚固牢靠 操作方便', '39.00',
'imgs/fenye/gov_15.png', 'detail.html?pid=30'),
(31, '智能蓝牙无线降噪耳机', '手势触控 智能启停 ', '999.00',
'imgs/fenye/gov_16.png', 'detail.html?pid=31'),
(32, '坚果黑方键盘', '黑骑士般的外观 机械手感', '599.00',
'imgs/fenye/gov_17.png', 'detail.html?pid=32'),
(33, '锤子手机R1', 'MTK8562处理器 5.5吋绚丽屏', '1699.00',
'imgs/fenye/gov_18.png', 'detail.html?pid=33'),
(34, '锤子手机R1S', 'MTK8552处理器 6+128G超大内存', '2199.00',
'imgs/fenye/gov_19.png', 'detail.html?pid=34'),
(35, '锤子手机PRO3', '2018领世旗舰 骁龙835CPU 超强劲', '3599.00',
'imgs/fenye/gov_20.png', 'detail.html?pid=35')
(36, 'Type—C转换接头', '即插即用 全面兼容', '599.00',
'imgs/fenye/gov_21.png', 'detail.html?pid=36'),
(37, '坚果快速充电器', '全面兼容的18w快速充电器', '299.00',
'imgs/fenye/gov_22.png', 'detail.html?pid=37'),
(38, '坚果饼式无线充电器', '放下手机就能享受无线充电', '599.00',
'imgs/fenye/gov_23.png', 'detail.html?pid=38'),
(39, '坚果耳机转换接口', '即插即用 全面兼容', '799.00',
'imgs/fenye/gov_24.png', 'detail.html?pid=39'),
(40, '坚果闹钟式无线充电器', '外观精美 办公桌充电必备', '899.00',
'imgs/fenye/gov_25.png', 'detail.html?pid=40');
(41, 'FIIL CARAT LITE 蓝牙运动耳机', '线控带麦、IP65 防水、磁吸项链式', '699.00',
'imgs/fenye/pj_01.png', 'detail.html?pid=41'),
(42, '畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）', '五层防护，畅快呼吸 畅呼吸口罩盒装 买一盒随机赠一盒', '899.00',
'imgs/fenye/pj_02.png', 'detail.html?pid=42'),
(43, '畅呼吸除甲醛防护口罩', '400CADR超强除甲醛能力，app远程操控，多种专业滤芯可供选择', '899.00',
'imgs/fenye/pj_03.png', 'detail.html?pid=43'),
(44, '除甲醛超级活性炭滤芯', '打造专业除甲醛超级活性炭滤芯', '199.00',
'imgs/fenye/pj_04.png', 'detail.html?pid=44'),
(45, '除霾除甲醛高效复合滤芯', '精选双层防护材质、过滤更精细、去味更有效', '899.00',
'imgs/fenye/pj_05.png', 'detail.html?pid=45'),
(46, '畅呼吸汽车空调滤清器', '外观精美 一路洁净、安心出行 保驾护航', '899.00',
'imgs/fenye/pj_06.png', 'detail.html?pid=46')



--
-- Indexes for dumped tables
--

--
-- Indexes for table `cz_fenye_products`
--
ALTER TABLE `cz_fenye_products`
  ADD PRIMARY KEY (`pid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
