import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const chatWithPortfolioAgent = async (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct a prompt that includes context and history
    // Since we are using a single-turn generateContent for simplicity in this stateless service wrapper,
    // we format the history into the prompt or use the chat API. 
    // Here we will use the Chat API for better context management if we were persisting the object,
    // but for this stateless function, we'll re-create the chat with history.

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are an AI assistant living in the portfolio website of Chit Lwin (ချစ်လွင်). 
        Your goal is to answer visitor questions about Chit Lwin based strictly on the following resume context.
        
        RESUME CONTEXT:
        ${RESUME_CONTEXT}
        
        Tone: Professional, enthusiastic, and concise. 
        If asked about something not in the context, politely mention you only know about Chit Lwin's professional background.
        Do not make up facts.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: userMessage
    });

    return result.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to my brain. Please try again later!";
  }
};