import { PrismaClient } from "@prisma/client";

export type IsTypescript = true;

export const hello = (event) => {
  const db = new PrismaClient();
  db.$disconnect();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };  
}