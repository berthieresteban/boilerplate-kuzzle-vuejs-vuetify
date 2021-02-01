## Development

# Install Backend
```bash
cd apps/backend
npm install
npm run install:docker
```

# Install Frontend
```bash
cd apps/frontend
npm install
```

# Run Backend

```bash
cd apps/backend
npm run dev:docker
```


# Init Backend

```bash
kourou admin:loadMappings < ./fixtures/mappings.json
kourou admin:loadFixtures < ./fixtures/fixtures.json
kourou admin:loadSecurities < ./fixtures/securities.json
```

# Run frontend
```bash
cd apps/frontend 
npm run serve
```