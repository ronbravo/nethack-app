import restana from 'restana';

export async function start () {
  let app;

  // Create an instance of the restana app.
  app = restana ();

  app.get ('/hi', (req, res) => {
    res.send ('Hello World!');
  });

  app.start (9001);

  console.log (`- server has started...and its over 9000...`);
}
