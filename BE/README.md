# Back-end 트러블 슈팅 & 기록

## Liquibase
DB 스키마 형상관리하는 도구 중 하나인 Liquibase를 추가했습니다.
- Liquibase + SpringBoot => [참고링크](https://contribute.liquibase.com/extensions-integrations/directory/integration-docs/springboot/#__tabbed_1_2)

### 설치 방법
1. ```build.gradle```에 Liquibase dependency 추가
	```gradle
	dependencies {
		implementation 'org.liquibase:liquibase-core'
	}
	```
2. Changelog 파일 추가
- 기본적으로, Spring Boot Liquibase 통합은 `src/main/resources/db/changelog` 디렉토리에서 `db.changelog-master.xml`이라는 파일을 찾습니다.
	```xml
	<?xml version="1.0" encoding="UTF-8"?>
	<databaseChangeLog
		xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-latest.xsd">

		<changeSet id="1" author="my_name">
			<createTable tableName="test_table">
				<column name="test_id" type="int">
					<constraints primaryKey="true"/>
				</column>
				<column name="test_column" type="INT"/>
			</createTable>
		</changeSet>
	</databaseChangeLog>
	```
3. 애플리케이션 실행
- 2번에서 만든 changelog를 보고 DB table이 생성됩니다.