-- 코드를 입력하세요
SELECT COUNT(USER_ID) AS USERS
FROM USER_INFO
WHERE (AGE >= 20 AND AGE <= 29)
AND (DATE_FORMAT(JOINED, '%Y') LIKE '2021')

-- WHERE 절이 여러개로 중첩되어있다 
-- 문제중 (DATE_FORMAT(JOINED, '%Y') LIKE '2021') 구절을 좀 해맸다.
-- 일단 포멧을 연도만 나오게 바꾼후, 2021을 LIKE 조건으로 적용해서 찾아냄