# Project Structure

When working with this style of development the project is broken down into the following structure:

- **/src**
  - **/js**
    - **/browser**
    - **/common**
    - **/server**

The project source code is placed in `/src`. It then contains a sub folder of `/js` to indicate where the `javascript` for the project will go. This is important because if a project uses multiple programming languages they can all be account for. Let's say for example we had a project that used the `C`, `C#`, `Java`, `Javascript` and `Python` programming languages. Our project would look like:

- **/src**
  - **/c**
  - **/c-sharp**
  - **/java**
  - **/js**
    - **/browser**
    - **/common**
    - **/server**
  - **/py**

Notice that the `/js` is also further broken down into `browser`, `common`, and `server`. This is because even though Javascript can work on a browser or server, there are devices on each environment that are unique to that environment (ex: DOM / Document is only in browser). So care must be take to know what environent Javascript is being written for. If writing code that can exist and work in both environments, then place that in the `common` folder.

Each folder in this project has a `README.md` to remind you of where to place what type of file. If you ever have a doubt where to place a file, default to putting it in the `common` folder and run it insider the `browser` side since the browser has nicer debug tools. If you have written code that can only exist in a `server` environement you will immediatly know once the code breaks (ex: running file reading code in a browser will break). As a dev gets more experience writing code it will become more clear what kind of code goes where.


### Barrel Files
The project makes heavy use of what are called barrel files. This allows for keeping a file and it's related sibling files all in one folder (aka: module). If in the future modules need to be move or re-done, then it should be easier to manage the change.

Example of a barrel file.

- **/player**
  - `index.js` - exports the content of `/player.js` and `/mario/index.js` and `/luigi/index.js`
  - `index.spec.js`  - imports the specs of `/mario/index.spec.js` and `/luigi/index.spec.js`
  - `player.js` - contains the functions for the player
  - `player.spec.js` - contains the functions for the player
  - **/mario**
    - `index.js` - exports the content of `/mario/index.js`
    - `index.spec.js`  - imports the specs of `/mario/index.spec.js`
    - `mario.js` - contains the functions for mario
    - `mario.spec.js` - contains the functions for mario
  - **/luigi**
    - `index.js` - exports the content of `/luigi/index.js`
    - `index.spec.js`  - imports the specs of `/lugi/index.spec.js`
    - `luigi.js` - contains the functions for lugi
    - `luigi.spec.js` - contains the functions for luigi

The `index.js` files act as entry points into a folder similar to how a `index.html` acts as entry point to a server. From the `index` file we specify all the other files that are dependencies in that `index` file. For example:

- `/player/index.js`
```
// Export functions from sub folders "modules" for use in other files
export * from './player.js';
export * from './mario/index.js`;
export * from './luigi/index.js`;
```

- `/player/index.spec.js`
```
// Import test specs from sub folders "modules" for use in mocha js test scenarios
import * from './player.spec.js`;
import * from './mario/index.spec.js`;
import * from './luigi/index.spec.js`;
```

#### Benefits during a module move or re-factor

If we for some reason needed to move the `luigi` folder to its own sub folder we could then make the following updates:

- **/player**
  - `index.js` - exports the content of `/player.js` and `/mario/index.js` and `/luigi/index.js`
  - `index.spec.js`  - imports the specs of `/mario/index.spec.js` and `/luigi/index.spec.js`
  - `player.js` - contains the functions for the player
  - `player.spec.js` - contains the functions for the player
  - **/mario**
    - `index.js` - exports the content of `/mario/index.js`
    - `index.spec.js`  - imports the specs of `/mario/index.spec.js`
    - `mario.js` - contains the functions for mario
    - `mario.spec.js` - contains the functions for mario
  - **/extra**
    - **/luigi**
      - `index.js` - exports the content of `/luigi/index.js` and `/abilities.js`
      - `index.spec.js`  - imports the specs of `/lugi/index.spec.js` and `/abilities.spec.js`
      - `luigi.js` - contains the functions for lugi
      - `luigi.spec.js` - contains the functions for luigi
      - `abilities.js`
      - `abilities.spec.js`

Now we just need to update the imports in one location, the `/player/index.js` and `/player/index.spec.js` files, instead of in multiple locations.

- `/player/index.js`
```
// Export functions from sub folders "modules" for use in other files
export * from './player.js';
export * from './mario/index.js`;
export * from './extra/luigi/index.js`;       // <<-- update here
```

- `/player/index.spec.js`
```
// Import test specs from sub folders "modules" for use in mocha js test scenarios
import * from './player.spec.js`;
import * from './mario/index.spec.js`;
import * from './extra/luigi/index.spec.js`;  // <<-- update here
```

Taking this approach may not be so obvious when first starting on a project. However, it's benefits will start to show as project files are moved around and major changes are made.
