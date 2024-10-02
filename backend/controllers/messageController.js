import prisma from "../../prisma/index.js";
import { findOrCreateConversation } from "./conversationController.js";

// Controller to handle sending a message
export const msgSent = async (req, res, next) => {
    try {
        const { message } = req.body;
        const senderID = req.user.id;
        const { id: receiverID } = req.params;

        // Validate input
        if (!senderID || !receiverID || !message) {
            return res.status(400).json({ error: `Missing required fields ${senderID}, ${receiverID}, ${message}` });
        }

        // Find or create a conversation between the users
        const conversation = await findOrCreateConversation(senderID, receiverID);

        // Create the message
        const newMessage = await prisma.message.create({
            data: {
                conversation: { connect: { id: conversation.id } },
                sender: { connect: { id: senderID } },
                receiver: { connect: { id: receiverID } },
                message, // The actual message content
            },
        });

        return res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage,
        });
    } catch (error) {
        console.error("Error sending message:", error);
        return res.status(500).json({ error: "An error occurred while sending the message" });
    }
};

// Controller to retrieve messages between two users
export const getMsg = async (req, res, next) => {
    try {
        const { id: chatWith } = req.params;
        const senderID = req.user.id; 

        const conversation = await prisma.conversation.findFirst({
            where: {
                participants: {
                    hasEvery: [senderID, chatWith], // Check if both sender and receiver are participants
                },
            },
            include: {
                messages: true, // Include the messages in the conversation
            }
        });

        if (!conversation) {
            return res.status(404).json({ error: "No conversation found between the users" });
        }

        return res.status(200).json(conversation.messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        return res.status(500).json({ error: "An error occurred while fetching the messages" });
    }
};
