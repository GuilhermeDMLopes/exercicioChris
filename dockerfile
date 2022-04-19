FROM nginx

RUN npm install

COPY .. /aluno/Desktop/c214lab

EXPOSE 80

CMD ["npm start"]