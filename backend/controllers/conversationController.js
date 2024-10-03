import prisma from '../../prisma/index.js';

// Controller to create or find a conversation between two users
export const findOrCreateConversation = async (senderID, receiverID) => {
    try {
        // Check if a conversation already exists between the users
        let conversation = await prisma.conversation.findFirst({
            where: {
                participants: {
                    hasEvery: [senderID, receiverID], // Check if both sender and receiver are participants
                },
            },
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participants: [senderID, receiverID], // Initialize with sender and receiver IDs
                },
            });
        }

        return conversation;
    } catch (error) {
        throw new Error("Could not find or create conversation");
    }
};

// Controller to add a message to the conversation's messages
export const addMessageToConversation = async (conversationId, messageId) => {
    try {
        // Fetch the existing conversation to get the current messageArray
        const existingConversation = await prisma.conversation.findUnique({
            where: { id: conversationId },
            select: { message: true }, // Only fetch messageArray
        });

        // Update the conversation's messageArray with the new message ID
        await prisma.conversation.update({
            where: { id: conversationId },
            data: {
                message: {
                    set: [...existingConversation.message, messageId], // Append the new message ID
                },
                updatedAt: new Date(), // Update the updatedAt timestamp
            },
        });
    } catch (error) {
        throw new Error("Could not add message to conversation");
    }  
};
