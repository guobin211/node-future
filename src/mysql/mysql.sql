--  分页查询
-- SELECT * FROM tbl_company LIMIT 0, 100

-- table行数
# SELECT COUNT(*) FROM tbl_company

-- 查看database
-- SHOW DATABASES

--  查询数据库esg中所有的table名
--  SELECT TABLE_NAME from information_schema.TABLES where TABLE_SCHEMA='esg' and TABLE_TYPE='base table'

-- 查询表中的所有字段
-- SELECT COLUMN_NAME from information_schema.COLUMNS where TABLE_SCHEMA='esg' and TABLE_NAME='t_base_log'

