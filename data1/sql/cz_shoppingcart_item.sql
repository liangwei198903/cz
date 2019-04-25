-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-06-05 13:17:57
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
-- 表的结构 `cz_shoppingcart_item`
--

CREATE TABLE `cz_shoppingcart_item` (
  `iid` int(11) primary key AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `is_checked` TINYINT(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cz_shoppingcart_item`
--

INSERT INTO `cz_shoppingcart_item` (`iid`, `uid`, `pid`, `count`) VALUES
(1, 1, 11, 4,1),
(2, 2, 12, 1,1),
(3, 1, 13, 1,0),
(4, 1, 14, 1,1),
(5, 2, 15, 1,1),
(9, 1, 23, 5,0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cz_shoppingcart_item`
--
ALTER TABLE `cz_shoppingcart_item`
  ADD PRIMARY KEY (`iid`),
  ADD UNIQUE KEY `iid` (`iid`),
  ADD KEY `iid_2` (`iid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
