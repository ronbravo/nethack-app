# Public

Place anything here that will be accessable to the public.

# Reserved Directories

This project uses the `@tamedjs/tm-server` and so this means there are a few directories that are reserved for use with the server. These reserved directories are not made public unless a matching directory exists for them in the `/public` directory.

For example, if a project needs to make the `https://myproject.com/api` route available for the public to access, then create a directory in the project of `/public/api`. This will tell the `tm-server` to handle any `https://myproject.com/api` requests through it's pre-defined reserved routes on `/api`. This only works for the following directories:

#### Common reserved paths

- `/api` - allow for api routes managed through `tm-server`
- `/content` - deliever of static content (ex: images, text files, audio, styes, etc)
- `/module` - access to modules package through a bundler (ex: tm-server, npm, webpack, rollup, vitejs, etc)
- `/status` - get information about the `tm-server` that is running

#### Development reserved path

**NOTE:** these are only available if `tm-server` is run in `dev` mode.

- `/dev` - Path to the project
- `/ide` - Path to the frontend code editor built with brackets
- `/storage` - access a storage system (ex: mysql, mongo, or arrangodb server)

With this configuration a project can define which reserved directories should be visible to the public or not.

This feature also allows for a project to have other server systems handle reserved routes. If the project does **NOT** need `tm-server` to handle a route like `/api` then simply remove the `/api` directory from the `/public` directory. Then allow for that specific route to be handled by other server systems.
