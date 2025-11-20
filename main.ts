import { serve } from "https://deno.land/std@0.208.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.208.0/http/file_server.ts";

const PORT = 8000;
const MESSAGES_FILE = "./data/messages.json";

// Ensure messages file exists
async function ensureMessagesFile() {
  try {
    await Deno.stat(MESSAGES_FILE);
  } catch {
    await Deno.writeTextFile(MESSAGES_FILE, JSON.stringify([], null, 2));
  }
}

// Read messages from file
async function readMessages(): Promise<any[]> {
  try {
    const data = await Deno.readTextFile(MESSAGES_FILE);
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write messages to file
async function writeMessages(messages: any[]): Promise<void> {
  await Deno.writeTextFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Handle contact form submission
async function handleContactSubmission(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Validate field types and lengths
    if (typeof name !== 'string' || name.trim().length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Name must be a non-empty string"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    if (typeof email !== 'string' || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide a valid email address"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    if (typeof subject !== 'string' || subject.trim().length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Subject must be a non-empty string"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    if (typeof message !== 'string' || message.trim().length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Message must be a non-empty string"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Create message object with timestamp
    const newMessage = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    // Read existing messages
    const messages = await readMessages();
    
    // Append new message
    messages.push(newMessage);
    
    // Write back to file
    await writeMessages(messages);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while processing your request"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

// Main request handler
async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  
  // Handle contact API endpoint
  if (url.pathname === "/api/contact" && request.method === "POST") {
    return await handleContactSubmission(request);
  }

  // Handle OPTIONS request for CORS
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }

  // Serve static files from public directory
  return serveDir(request, {
    fsRoot: "public",
    urlRoot: "",
    showDirListing: false,
    enableCors: true
  });
}

// Initialize and start server
async function main() {
  await ensureMessagesFile();
  
  console.log(`🚀 Portfolio server running at http://localhost:${PORT}/`);
  console.log(`📁 Serving static files from ./public`);
  console.log(`💾 Storing messages in ${MESSAGES_FILE}`);
  console.log(`\n✨ Press Ctrl+C to stop the server\n`);

  await serve(handler, { port: PORT });
}

main();
