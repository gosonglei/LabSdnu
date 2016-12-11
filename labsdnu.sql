/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : labsdnu

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2016-12-11 18:26:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for order_info
-- ----------------------------
DROP TABLE IF EXISTS `order_info`;
CREATE TABLE `order_info` (
  `user_id` varchar(64) NOT NULL,
  `user_name` varchar(15) DEFAULT NULL,
  `user_No` varchar(12) DEFAULT NULL,
  `user_phone` varchar(11) DEFAULT NULL,
  `order_date` varchar(24) DEFAULT NULL,
  `seats` int(6) DEFAULT '0' COMMENT '座位数',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_info
-- ----------------------------

-- ----------------------------
-- Table structure for seat
-- ----------------------------
DROP TABLE IF EXISTS `seat`;
CREATE TABLE `seat` (
  `seats` int(6) NOT NULL DEFAULT '150' COMMENT '座位数'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of seat
-- ----------------------------
INSERT INTO `seat` VALUES ('150');
