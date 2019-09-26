import path from 'path';
import next from 'next';
import express from 'express';
import helmet from 'helmet';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.join(__dirname, '..') });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const srv = express();

  srv.use(helmet());
  srv.all('*', (req, res) => {
    handle(req, res);
  });

  const port = +`${process.env.PORT || 3000}`;
  srv.listen(port, () => {
    console.info(`> Ready on http://localhost:${port}`);
  });
});
