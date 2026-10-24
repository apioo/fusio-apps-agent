
# Fusio Agent

This repository contains the Fusio Agent app, a chat interface which allows your users to talk to the public
agents of your [Fusio](https://www.fusio-project.org) instance. Fusio is an open source API management platform
which allows you to build AI agents on top of your API, the agents can use your API operations as tools.

With this app you can provide such an agent to your customers without building a frontend, i.e. a support assistant
which can look up the orders of a customer or a domain specific assistant which uses your data.

## Features

* Lists all public agents of your Fusio instance
* Chat with an agent, including the history of previous conversations
* Renders Markdown and math formulas in the responses of the agent
* Login, registration and password reset for your users
* Account area where users can manage their account

## Prerequisites

The app shows only agents which are configured at your Fusio instance. Before you use the app you need to:

1. Create an [agent connection](https://docs.fusio-project.org/docs/ai/connection) to an LLM provider like OpenAI,
   Anthropic, Gemini or Ollama
2. Create an [agent](https://docs.fusio-project.org/docs/ai/agent) and enable the **Public** setting, only public agents
   are visible in the app
3. Make sure your users have an account at your Fusio instance, since every conversation is stored for a specific
   user. Users can also register directly through the app

Take a look at the [Publish an agent](https://docs.fusio-project.org/docs/ai/publish) page of the documentation for
more details.

## Installation

### Marketplace

The easiest way is to install the app through the marketplace of your Fusio backend, or through the CLI:

```
php bin/fusio marketplace:install app agent
```

The app is then available under the `/apps/agent/` path of your Fusio instance, i.e. `https://api.acme.com/apps/agent/`.

### Docker

You can also run the app as standalone container, i.e. on a different domain than your Fusio instance:

```yaml
services:
  agent:
    image: fusio/apps-agent
    environment:
      API_URL: "https://api.acme.com"
    ports:
      - "8080:80"
```

| Variable  | Description                                                              |
|-----------|--------------------------------------------------------------------------|
| `API_URL` | The base URL of your Fusio instance                                      |
| `APP_KEY` | Optional the app key of a Fusio app, which is needed for social login    |

## Development

To run the app locally, you need [Node.js](https://nodejs.org/) 22 or higher:

```
npm install
npm start
```

The app reads the URL of your Fusio instance from the `FUSIO_URL` variable at `src/index.html`. For local development,
replace the `${API_URL}` placeholder with the URL of your Fusio instance, i.e. `http://localhost:8080`.

To create a production build, run:

```
npm run build
```

The build is written to `dist/agent/browser` and expects to be served under the `/apps/agent/` path.

## Customizing

The app is built with Angular and the [Fusio Angular SDK](https://github.com/apioo/fusio-sdk-javascript-angular). You
can fork this repository to adjust the design to your corporate identity or to integrate the agent chat into your
existing Angular app. If you use a different framework, you can use the
[Consumer API](https://www.fusio-project.org/api/consumer) of Fusio to build your own chat interface.

## License

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) file.
