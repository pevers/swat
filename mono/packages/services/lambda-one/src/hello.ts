import { PrismaClient } from "@prisma/client";
//import { generateRandomId } from '@pevers/libs';

export const hello = (event: any) => {
  const db = new PrismaClient();
  db.$disconnect();
  //console.log('Generate an ID from a seperate module', generateRandomId());
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