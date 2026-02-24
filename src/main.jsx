import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react"
import { MantineProvider } from '@mantine/core'
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"

createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain='dev-4lcksteedynsr66p.us.auth0.com'
        clientId='tpC2F29CjwU1TN5C9qGHDOZdKmhb9jhR'
        authorizationParams={{
            redirect_uri: "https://speedlixhomes.vercel.app/"
        }}
        audience="https://speedlixhomes-backend.vercel.app"
        scope="openid profile email"
    >
        <MantineProvider>
            <App />
        </MantineProvider>
    </Auth0Provider>
)

