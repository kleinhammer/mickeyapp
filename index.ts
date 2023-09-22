import express, { Request, Response } from 'express';

const app = express();

// Use built-in middleware for parsing JSON
app.use(express.json());

app.post('/graphql', (req: Request, res: Response) => {
    console.log(req.body);

    const data = JSON.stringify(req.body);

    const schemaRegex = /\W*__schema\W*/;

    // respond with message if "__schema" was found
    if (schemaRegex.test(data)) {
        res.send('Introspection is not enabled');
    } else {
        res.send('No "__schema" found in the request');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});