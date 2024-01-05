# TypeScript GraphQL Vercel Serverless Function Example

The goal of this repository is to have a simple working example of a Vercel serverless function that uses GraphQL that is written in TypeScript that others can follow when setting up similar solutions in their own work. I don't necessarily think this repository is representative of what the "best practice" might be for setting up vercel graphql serverless functions and I basically just stitched this together from the vercel docs and a bunch of tutorials that weren't quite working for me.

This example
- is functional and will work when deployed to Vercel at the time of writing this README
- makes use of the `@graphql-codegen` to autogenerate types from your GraphQL schema
- doesn't make use of `vercel.json` fields that Vercel recommends against using at the time of writing this README
- supports TypeScript (with the exception of /api/graphql.js. I would advise not adding more files to the /api folder)

Once this code has hopefully given you something that you can at least run successfully, you can make modifications to this code to suit your own tastes like setting up eslint/prettier, using some other apollo client library you prefer, connecting to SQL/Mongo, or something like that.

If you are encountering any problems following the instructions below, please open an issue on this repository and I'll see if I can either help, make amendments to the repository, or make the instructions clearer. Please feel free to open an issue or a pull request if there's an improvement you'd like to see here that still preserves the simplicity of the repository.

## Hitting the deployed version of this API

You can hit the deployed version of this API at TODO using Insomnia, Postman, curl, etc.

## Running the API

1. Clone this repository
2. Run `npm i`
3. Run `vercel dev` and follow the instructions there to create the project in Vercel.
4. Hitting `http://localhost:3000/api/graphql` with a graphql request should work after your build is finished

## Code generation

1. If you've changed the port from the default 3000, go into `codegen.ts` and also change the port there if you haven't done so already.
2. Leave a local version of the API running (Please see "Running the API" instructions above)
3. Run `npm run codegen`
4. If you've changed `stub-typedefs.ts` at all, your changes should be reflected in `src/api/graphql-types/__generated__` and `graphql.schema.json`. If you haven't changed the typedefs at all, those files should have stayed the same.

## Vercel automatic deploys from master

You'll want to do this on Vercel's website. After running `vercel dev` for the first time the project should be created and it should just be a matter of linking the github repository and following the instructions there.

## Questions and Answers

### Is CORS enabled in this example?

Yes. If you want to disable CORS you'll want to remove the following lines in `vercel.json` and make the following modifications to `api/graphql.js`

Lines in `vercel.json` to be deleted:
```
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Credentials", "value": "true" },
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
      ]
    }
  ]
```
Lines in `/api/graphql.js` to remove
```
const corsHandler = cors({allowMethods: ['POST']})((req, res) => req.method === 'OPTIONS' ? send(res, 200, 'ok') : handler(req, res))

export default corsHandler;
```
To be replaced with the following:
```
export default handler;
```

### I'm actually interested in seeing an example that's a little bit more complicated. Do you have something that's actually connected to a database?

There's a bit more going on but the following repo follows the same structure as this one and is connected to a mongodb database. https://github.com/SeanKennyNF/iit-backend-v2