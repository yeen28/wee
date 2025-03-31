# 베이스 이미지로 Node.js 사용
FROM node:18 AS build

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build

# Nginx를 사용하여 정적 파일 제공
FROM nginx:alpine

# Nginx 설정 파일 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 포트 노출
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]