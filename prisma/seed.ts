import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const roundsOfHashing = 10;

async function main() {
  const role = await prisma.role.upsert({
    where: { role: 'ADMIN' },
    update: {},
    create: {
      role: 'ADMIN',
      status: 'active',
    },
  });
  

  const passwordSabin = await bcrypt.hash('password-sabin', roundsOfHashing);
  const passwordAlex = await bcrypt.hash('password-alex', roundsOfHashing);

  // Create user1
  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {},
    create: {
      email: 'sabin@adams.com',
      username: 'Sabin Adams',
      password: passwordSabin,
      fname: 'Sabin',
      lname: 'Adams',
      nidPassport: 'NID12345',
      address: '123 Main St',
      role: { connect: { id: role.id } },
      createdBy: 1,
      status: 1,
      userToken: ""
    },
  });

  // Create user2
  const user2 = await prisma.user.upsert({
    where: { email: 'alex@ruheni.com' },
    update: {},
    create: {
      email: 'alex@ruheni.com',
      username: 'Alex Ruheni',
      password: passwordAlex,
      fname: 'Alex',
      lname: 'Ruheni',
      nidPassport: 'NID67890',
      address: '456 Main St',
      role: { connect: { id: role.id } },
      createdBy: 1,
      status: 1,
      userToken: ""
    },
  });

  console.log({ user1, user2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
