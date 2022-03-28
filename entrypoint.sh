./node_modules/.bin/typeorm migration:run && \
npx ./node_modules/typeorm-seeding/dist/cli.js config && \
pm2-runtime dist/src/server.js
