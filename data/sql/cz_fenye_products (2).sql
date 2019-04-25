-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-31 13:46:36
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
  `pid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `subtitle` varchar(128) DEFAULT NULL,
  `price` varchar(128) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cz_fenye_products`
--

INSERT INTO `cz_fenye_products` (`pid`, `title`, `subtitle`, `price`, `pic`, `href`) VALUES
(10, '锤子原装IC读卡器', '读取卡片数据快速 准确无误', '199.00', 'imgs/fenye/pj_01.png', 'detail.html?pid=10'),
(11, '畅呼吸防护口罩', '花粉 粉尘 PM2.5 五层防护', '99.00', 'imgs/fenye/pj_02.png', 'detail.html?pid=11'),
(12, '畅呼吸口罩(防甲醛版)', '五层活性炭滤芯放空气污染', '399.00', 'imgs/fenye/pj_03.png', 'detail.html?pid=12'),
(13, '除甲醛超级活性炭滤芯', '家装等场景使用的专业滤芯', '1199.00', 'imgs/fenye/pj_04.png', 'detail.html?pid=13'),
(14, '除霾除甲醛高效符合滤芯', '精选双层防护材质，过滤更精细，去味更有效', '999.00', 'imgs/fenye/pj_05.png', 'detail.html?pid=14'),
(15, '畅呼吸汽车空调滤清器', '一路洁净 安心出行 保驾护航', '1199.00', 'imgs/fenye/pj_06.png', 'detail.html?pid=15'),
(16, '锤子二代原装耳机', '双声道 可降噪 配四种规格耳塞', '499.00', 'imgs/fenye/gov_01.png', 'detail.html?pid=16'),
(17, '锤子原装数据线', '1.2m 最新TYPE-C接口，传输速度快', '99.00', 'imgs/fenye/gov_02.png', 'detail.html?pid=17'),
(18, '锤子手机坚果PRO', '骁龙625 4+128G 前后1600万像素', '3399.00', 'imgs/fenye/gov_03.png', 'detail.html?pid=18'),
(19, '锤子三代原装耳机', '色彩更丰富 可支持立体环绕音效', '699.00', 'imgs/fenye/gov_04.png', 'detail.html?pid=19'),
(20, '锤子坚果手机PRO2', '骁龙810 处理更强劲 高清绚丽屏 色彩更丰富', '3999.00', 'imgs/fenye/gov_05.png', 'detail.html?pid=20'),
(21, '锤子原装移动电源', '6000MAH 超长续航 原厂原装 安全可靠', '1199.00', 'imgs/fenye/gov_06.png', 'detail.html?pid=21'),
(22, '锤子线控耳机', '音质清晰 立体环绕声 自带HI-FI音效', '199.00', 'imgs/fenye/gov_7.png', 'detail.html?pid=22');

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
