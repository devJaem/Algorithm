-- 코드를 입력하세요
SELECT ANIMAL_TYPE, COUNT(*) AS count
FROM ANIMAL_INS
WHERE ANIMAL_TYPE IN('Cat', 'Dog')
GROUP BY ANIMAL_TYPE
order by animal_type asc