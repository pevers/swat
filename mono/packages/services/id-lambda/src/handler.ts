import { PrismaClient } from "@prisma/client";
import {
  Context,
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from 'aws-lambda'
import { generateRandomId } from '@pevers/libs';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false; // For prisma shutdown hook

  const db = new PrismaClient();
  const users = await db.user.findMany({});
  console.log(`Generating ID, users in the DB: ${users}, from event: ${JSON.stringify(event)}, context: ${JSON.stringify(context)}`);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: generateRandomId(),
        input: event,
      },
      null,
      2
    ),
  };  
}