# About
Kibana plugin to provide the language or location given an ISO_3166-1 code.

For example the value **de** will return `Germany` with the `Countries labels` format and `German` with the `Languages labes` format.

# Install
```
./bin/kibana-plugin install https://github.com/dobladov/kibana-fieldFormats-locale/releases/download/1.0.1/kibana-fieldFormats-locale-1.0.1.zip
 ```

## Set up
On `Index Patterns`, select `Countries labels` or `Languages labes` as the format for the field

![Format Image](https://user-images.githubusercontent.com/1938043/49150077-173f9480-f30c-11e8-8f69-e7e72286b5f7.png)

 ## Development
```
cd kibana/plugins
git clone https://github.com/dobladov/kibana-fieldFormats-locale.git
cd kibana-fieldFormats-locale
npm install
```

## Unistall
```
./bin/kibana-plugin remove kibana-fieldformats-locale
```
