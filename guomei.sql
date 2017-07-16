SET NAMES UTF8;
DROP DATABASE IF EXISTS gm;
CREATE DATABASE gm CHARSET=UTF8;
USE gm;
CREATE TABLE gm_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(8),
	upwd VARCHAR(32)
);
INSERT INTO gm_user VALUES
(10,"hufeng","123456"),
(20,"mayun","456789");

CREATE TABLE gm_car(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	userId INT
);
INSERT INTO gm_car VALUES
(100,10);

CREATE TABLE gm_car_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	carId INT,
	productId INT,
	count INT 
);
INSERT INTO gm_car_detail VALUES
(NULL,100,3,2),
(NULL,100,4,3),
(NULL,100,7,1),
(NULL,100,9,6);

CREATE TABLE gm_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(50),
	price FLOAT(6,2),
	pic VARCHAR(16),
	conduct VARCHAR(50),
	num INT,
	place VARCHAR(16)
);
INSERT INTO gm_product VALUES
(NULL,'戴尔（DELL）Vostro 14VR-1528B 成','3199.00','img/1.jpg','【轻薄易用商务范】摔了碰了不发愁 ','510','赣州市'),
(NULL,'【自营】联想（Lenovo）IdeaPad110 ','3299.00','img/2.jpg','英特尔第六代I5处理器 大屏观影 接口 ','35','深圳市'),
(NULL,'神舟(HASEE)战神K610D-i7D2 15.6英','3699.00','img/3.jpg',' 【12月9号-13号双12年终钜惠！战神','52','武汉市'),
(NULL,'华硕飞行堡垒FX50VX6300 15.6英寸游','5299.00','img/4.jpg','更多活动请点击跳转：华硕2016年终 ','510','黄冈市'),
(NULL,'Apple MacBook Air 13.3英寸笔记本电','7199.00','img/5.jpg',' 【国美自营】[国美在线官方旗舰店]','51','韶关'),
(NULL,'【国美自营】联想Ideapad100 15.6英','4399.00','img/6.jpg','实惠价格，时尚外观，4G内存+500G ','56','东莞市'),
(NULL,'联想（ThinkPad ）轻薄系列E450(20D','5299.00','img/7.jpg',' ThinkPad官方旗舰店！点这里进入！','52','广州市'),
(NULL,'华硕（ASUS）F456UV6200 14英寸笔','3699.00','img/8.jpg','更多活动请点击跳转：华硕2016年终 ','10','佛山市'),
(NULL,'华硕FX-PRO6300 15.6英寸笔记本电','5199.00','img/9.jpg',' 更多活动请点击跳转：华硕2016年终','80','江门市'),
(NULL,'戴尔（DELL）灵越 飞匣15ER-1528B ','5199.00','img/10.jpg','【热销！】大屏更劲爽！轻薄独显影 ','69','襄樊市'),
(NULL,'【自营】联想（Lenovo）Ideapad700-','3699.00','img/11.jpg',' 【升级4G独显+8G固态 启动更迅速，','51','荆州市'),
(NULL,'华硕（ASUS）FX50VX6700 15.6英寸','4199.00','img/12.jpg',' 更多活动请点击跳转：华硕2016年终','510','荆门市'),
(NULL,'神舟(HASEE)战神K550D-i7D1 14英寸','3999.00','img/13.jpg','12月9号-13号双12年终钜惠战神全线降价 ','420','上海市'),
(NULL,'华硕（ASUS）新升级顽石四代15.6英','4299.00','img/14.jpg','  更多活动请点击跳转：华硕2016年终采购趴 ','560','苏州市'),
(NULL,'联想（lenovo）S41-75 14英寸笔记本电脑 ','5499.00','img/15.jpg',' 四核A10 2G独显 办公娱乐轻轻松松','519','常州市'),
(NULL,'三星（SAMSUNG）500R5H-K03C','3699.00','img/16.jpg','三星电脑官方旗舰店！请点这里！！ ','42','北京市'),
(NULL,'宏碁（acer）E5-571G-57D9 15.6英寸','3199.00','img/17.jpg',' 【爆款】15.6英寸高清大屏！第五代i','52','黄冈市'),
(NULL,'【自营】联想（Lenovo）G50-75 15.6','2999.00','img/18.jpg','四核处理器，8G大内存+2G独显，轻 ','56','天津市'),
(NULL,'戴尔（DELL）Vostro 14VR-1528B 成','4599.00','img/19.jpg','【轻薄易用商务范】摔了碰了不发愁 ','522','重庆市'),
(NULL,'【自营】联想（Lenovo）IdeaPad110 ','5699.00','img/20.jpg','英特尔第六代I5处理器 大屏观影 接口 ','510','石家庄市'),
(NULL,'神舟(HASEE)战神K610D-i7D2 15.6英','4599.00','img/21.jpg',' 【12月9号-13号双12年终钜惠！战神','50','呼和浩特市'),
(NULL,'华硕飞行堡垒FX50VX6300 15.6英寸游','4799.00','img/22.jpg','更多活动请点击跳转：华硕2016年终 ','610','沈阳市'),
(NULL,'Apple MacBook Air 13.3英寸笔记本电','3599.00','img/23.jpg',' 【国美自营】[国美在线官方旗舰店]','519','长春市'),
(NULL,'【国美自营】联想Ideapad100 15.6英','3699.00','img/24.jpg','实惠价格，时尚外观，4G内存+500G ','96','哈尔滨市'),
(NULL,'联想（ThinkPad ）轻薄系列E450(20D','3199.00','img/25.jpg',' ThinkPad官方旗舰店！点这里进入！','51','南京市'),
(NULL,'华硕（ASUS）F456UV6200 14英寸笔','3399.00','img/26.jpg','更多活动请点击跳转：华硕2016年终 ','50','杭州市'),
(NULL,'华硕FX-PRO6300 15.6英寸笔记本电','4699.00','img/27.jpg',' 更多活动请点击跳转：华硕2016年终','10','合肥市'),
(NULL,'戴尔（DELL）灵越 飞匣15ER-1528B ','5799.00','img/28.jpg','【热销！】大屏更劲爽！轻薄独显影 ','810','福州市'),
(NULL,'【自营】联想（Lenovo）Ideapad700-','5699.00','img/29.jpg',' 【升级4G独显+8G固态 启动更迅速，','542','南昌市'),
(NULL,'华硕（ASUS）FX50VX6700 15.6英寸','7499.00','img/30.jpg','更多活动请点击跳转：2016年终 ','510','赣州市'),
(NULL,'神舟(HASEE)战神K550D-i7D1 14英寸','5899.00','img/31.jpg','【12月9号-13号双12年终钜惠！战神全线降价 ','542','济南市'),
(NULL,'华硕（ASUS）新升级顽石四代15.6英','3899.00','img/32.jpg','  更多活动请点击跳转：华硕2016年终采购趴 ','536','郑州市'),
(NULL,'联想（lenovo）S41-75 14英寸笔记本电脑 ','3199.00','img/33.jpg',' 四核A10 2G独显 办公娱乐轻轻松松','962','长沙市'),
(NULL,'三星（SAMSUNG）500R5H-K03C','4199.00','img/34.jpg','三星电脑官方旗舰店！请点这里！！ ','420','南宁市'),
(NULL,'宏碁（acer）E5-571G-57D9 15.6英寸','4099.00','img/35.jpg',' 【爆款】15.6英寸高清大屏！第五代i','630','广州市'),
(NULL,'【自营】联想（Lenovo）G50-75 15.6','5299.00','img/36.jpg','四核处理器，8G大内存+2G独显，轻 ','896','武汉市');

CREATE TABLE sj(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64)
);
INSERT INTO sj VALUES
(NULL,'image/shouji1.jpeg'),
(NULL,'image/shouji2.jpeg'),
(NULL,'image/shouji3.jpeg'),
(NULL,'image/shouji4.jpeg'),
(NULL,'image/shouji5.jpeg');

CREATE TABLE shihui_sub1(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64)
);
INSERT INTO shihui_sub1 VALUES
(NULL,"image/sub.png"),
(NULL,'image/sj1.jpeg'),
(NULL,'image/sj1.jpeg');

CREATE TABLE shihui_sub2(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64)
);
INSERT INTO shihui_sub2 VALUES
(NULL,"image/sb1.jpeg"),
(NULL,'image/sb2.jpeg'),
(NULL,'image/sb3.jpeg');

CREATE TABLE shihui_sub3_1(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64)
);
INSERT INTO shihui_sub3_1 VALUES
(NULL,"image/yf1.jpeg"),
(NULL,'image/yf1.jpeg');

CREATE TABLE shihui_sub3_2(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64)
);
INSERT INTO shihui_sub3_2 VALUES
(NULL,"image/1.jpg"),
(NULL,"image/2.jpg"),
(NULL,"image/3.jpg"),
(NULL,"image/4.jpg"),
(NULL,"image/5.jpg"),
(NULL,"image/6.jpg"),
(NULL,'image/7.jpg');

CREATE TABLE finance(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64)
);
INSERT INTO finance VALUES
(NULL,"image/jr1.jpeg"),
(NULL,"image/jr2.jpeg"),
(NULL,"image/jr3.jpeg"),
(NULL,"image/jr4.jpeg"),
(NULL,"image/jr5.jpeg");

CREATE TABLE jiadian(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64),
	name VARCHAR(128),
	price FLOAT(8,2)

);
INSERT INTO jiadian VALUES
(NULL,"image/jd1.jpg",'西门子洗衣机XQG70-WM10N0600W  7公斤 变频 滚筒 新一代变频科技 洗衣从此净、静、劲','2588.00'),
(NULL,"image/jd2.jpg",'紫茉莉 沙发 布艺沙发 小户型沙发 简约现代客厅三人转角布艺沙发(浅色天蓝 六件套送茶几电视柜)','3723.20'),
(NULL,"image/jd3.jpg",'海尔(Haier) BCD-216SDN 216升L 三门冰箱(银色) 电脑控温 三温三控','1599.00'),
(NULL,"image/jd4.jpg",'西门子(SIEMENS)BCD-610W(KA92NV02TI)冰箱 610升L变频 对开门冰箱白色无霜独立双循环','5788.00'),
(NULL,"image/jd5.jpg",'强漢 2016秋冬户外登山鞋日常系带男鞋徒步鞋旅游鞋子 PK-001(棕色1307 44)','79.00'),
(NULL,"image/jd6.jpg",'苏泊尔（SUPOR）CFXB40HC807-120电饭煲（4L 聚能球釜内胆 IH电磁加热 7段聪明火','488.00');

CREATE TABLE phone_right(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64)
);
INSERT INTO phone_right VALUES
(NULL,"image/M1.jpeg"),
(NULL,"image/M2.jpeg"),
(NULL,"image/M3.jpeg"),
(NULL,"image/M4.jpeg"),
(NULL,"image/M5.jpeg"),
(NULL,"image/M6.jpeg");

CREATE TABLE hot_product(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64),
	pname VARCHAR(64),
	price FLOAT(8,2)
);
INSERT INTO hot_product VALUES
(NULL,"image/rx2.jpg","罗马仕（ROMOSS）","106.00"),
(NULL,"image/rx3.jpg","Apple iPad Air2平板电脑（32G金色）","2788.00"),
(NULL,"image/rx4.jpg","【领券购再优惠】美的（Midea）T1","100.00"),
(NULL,"image/rx5.jpg","海尔洗衣机XQB75-Z12699T 7.5公斤智","999.00");

CREATE TABLE shaidan(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64),
	tel VARCHAR(32),
	content VARCHAR(64)
);
INSERT INTO shaidan VALUES
(NULL,"image/sd1.jpeg","18923445672","首次在国美在线购物，昨天凌晨抡购了这台电旅煲，看訂..."),
(NULL,"image/sd2.jpeg","13980024192","欧蒂薇莱初榨橄榄油500ML原瓶原装进口，价格优惠...");

CREATE TABLE binner(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64)
);
INSERT INTO binner VALUES
(NULL,"image/lunbo1.jpeg"),
(NULL,"image/lunbo2.jpeg"),
(NULL,"image/lunbo3.jpeg"),
(NULL,"image/lunbo4.jpeg"),
(NULL,"image/lunbo5.jpeg"),
(NULL,"image/lunbo6.jpeg");

CREATE TABLE consignee_message(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	consigneeId INT,
	cname VARCHAR(8),
	phone VARCHAR(16),
	addr VARCHAR(128),
	email VARCHAR(16)
); 
INSERT INTO consignee_message VALUES
(NULL,10,"张三","13469905934","黄浦江34号","15171@qq.com");

CREATE TABLE pay_style(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	payId INT,
	pay INT
); 
INSERT INTO pay_style VALUES
(NULL,1,1);

