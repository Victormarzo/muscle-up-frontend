FROM node:20.1.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
ENV PORT=4000
EXPOSE 4000
CMD ["npm", "start"]