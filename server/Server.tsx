import fs from 'fs';
import express from 'express';
import path from "path";
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from '../src/store/store';
import { StaticRouterContext } from 'react-router-dom';
import serialize from 'serialize-javascript'
import bodyParser from 'body-parser';

import App from '../src/components/App';
import { MovieApiService } from '../src/services/api/movieApiService';

import { setFiltersAction } from '../src/store/filters/filters.actions';


const port = 3055
const server = express()

server.use( express.static('./dist/client'))
server.use(bodyParser.urlencoded({ extended: false }))

server.get('*', async (req, res) => { {}
  try {
    const context: StaticRouterContext = {}
    const store = configureStore(true);

    const search = decodeURI(req.query.search as string);

    if (search) {
      store.dispatch(setFiltersAction({search}));
    }
    
    Promise.all(MovieApiService.pendingRequests).then(() => {
      const app = ReactDOMServer.renderToString(   
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App lazyLoaded={false}/>
          </StaticRouter>
        </Provider>     
      );

      const state = store.getState();
      switch (context.status) {
          case 301:
          case 302:
            res.status(context.status)
            res.location(context.url)
            res.end()
            break
          // case 404:
          //   res.status(context.status)
          //   res.type('html')
          //   res.write('<!doctype html>')
          //   html.pipe(res)
          //   break
          default: {
            const indexFile = path.resolve('./dist/client/index.html');

            fs.readFile(indexFile, 'utf8', (err, data) => {
              if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Oops, better luck next time!');
              }
        
              const site = data.replace('<div id="app"></div>', 
                `<div id="app">${app}</div>
                <script type="text/javascript">
                  window.INITIAL_STATE_REDUX = ${serialize(state)};
                </script>`
                )

              return res.send(
                site
              );
            });
        }
      }

    });
    

  } catch (error) {
    console.log(error);
  }
})

server.listen(port, () => console.log(`Listening on port ${port}`))