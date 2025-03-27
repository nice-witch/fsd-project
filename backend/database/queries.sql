/* запрос, выбирающий из первой таблицы все данные по контейнерам в формате JSON */
SELECT '{' + STRING_AGG(
	'{' +
		'"id":' + CAST(id AS NVARCHAR) + ',' +
		'"number":' + CAST(number AS NVARCHAR) + ',' +
		'"type":' + type + ',' +
		'"width":' + CAST(width AS NVARCHAR) + ',' +
		'"height":' + CAST(height AS NVARCHAR) + ',' +
		'"weight":' + CAST(weight AS NVARCHAR) + ',' +
		'"empty":' + CAST(empty AS NVARCHAR) + ',' +
		'"dateOfReceipt":' + CAST(date_of_receipt AS NVARCHAR) + ',' +
	'}',',')
+ '}' AS JsonResult
FROM Container

/* запрос, выбирающий из второй таблицы все данные по операциям для не пустых контейнеров в формате JSON */
SELECT '{' + STRING_AGG(
	'{' +
		'"id":' + CAST(Operations.id AS NVARCHAR) + ',' +
		'"containerId":' + CAST(Operations.container_id AS NVARCHAR) + ',' +
		'"startDate":' + CAST(Operations.start_date AS NVARCHAR) + ',' +
		'"finishDate":' + CAST(Operations.finish_date AS NVARCHAR) + ',' +
		'"type":' + Operations.type + ',' +
		'"FIO":' + Operations.FIO + ',' +
		'"inspector":' + Operations.inspection_place + ',' +
	'}',',')
+ '}' AS JsonResult
FROM Operations
JOIN Container ON  Operations.container_id = Container.id
WHERE Container.empty = 1