SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION != 'Aged'
ORDER BY ANIMAL_ID;

-- where 절에서 특정값이 아닌 값을 찾을때 != 활용
-- 아이디를 오름차순 정령