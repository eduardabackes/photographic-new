const express = require('express');
const cors = require('cors');
const path = require('path');
const imagesData = require('./json/images.json');
const client = require("./js/twilio");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.html at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// GET all images
app.get('/api/images', (req, res) => {
    res.json(imagesData);
});

// SEND mensage
app.get('/api/mensage', (req, res) => {

    async function sendWhatsApp(to, message) {
        try {
            const response = await client.messages.create({
            from: "whatsapp:+14155238886", // Número do Twilio Sandbox
            to: `whatsapp:${to}`, // Número do destinatário no formato internacional
            body: message,
            });

            console.log("Mensagem enviada com sucesso:", response.sid);
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
        }
    }

    sendWhatsApp("+5511999999999", "Olá! Esta é uma mensagem do Twilio via WhatsApp.");

    res.json(imagesData);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 