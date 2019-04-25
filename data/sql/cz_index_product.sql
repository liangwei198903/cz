-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-24 12:59:11
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
-- 表的结构 `cz_index_product1`
--

CREATE TABLE `cz_index_product1` (
  `pid` int(11) PRIMARY KEY,
  `title` varchar(64) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `price` varchar(128) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL,
  `src` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cz_index_product1`
--

INSERT INTO `cz_index_product1` (`pid`, `title`, `details`, `price`, `href`, `src`) VALUES
(5, '畅呼吸智能空气净化器超级除甲醛版', '购新品空气净化器 送防护口罩两套', '3199.00', NULL, 'imgs/hot_1.png'),
(6, '坚果2 PRO', '漂亮的不像实力派', '5999.00', '', 'imgs/hot_2.png'),
(7, '畅呼吸智能空气净化器·标准版', '购空气净化器送699活碳滤芯', '1799.00', NULL, 'imgs/hot_3.png'),
(8, '畅呼吸防护口罩', '畅呼吸防护口罩买一盒随机送一盒', '599.00', NULL, 'imgs/hot_4.png');


CREATE TABLE `cz_index_product` (
  `pid` int(11) PRIMARY KEY,
  `src` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `subtitle` varchar(64) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `cz_index_product` (`pid`, `src`,`title`, `subtitle`, `details`) VALUES
(1, 'imgs/banner_1.jpg', '畅呼吸智能空气净化器', '超级除甲醛版','花呗六期免息 赠2副口罩'),
(2, 'imgs/banner_2.jpg', 'smartison & 畅呼吸','官方配件','功夫出色 一应俱全'),
(3, 'imgs/banner_3.jpg', 'smartison & 秋季卫衣', '百搭百配','风格简洁 舒适'),
(4, 'imgs/banner_4.jpg', '畅呼吸防护口罩','套装包邮','颜色丰富 总有一款你喜欢');