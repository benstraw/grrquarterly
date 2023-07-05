import { db } from 'api/src/lib/db'

const USERS = [
  {
    id: 1,
    email: 'ben+rwadmin@benstrawbridge.com',
    name: 'John Doe',
    hashedPassword:
      'ad9563042fe9f154419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
    salt: '1c99de412b219e9abf4665293211adce',
    roles: ['admin', 'moderator'],
  },
  {
    id: 2,
    email: 'ben+rwmod@benstrawbridge.com',
    name: 'Jane Doe',
    hashedPassword:
      '9d597752672c7c7046201988a485e965114165524749a61cb81bcbe473f7a803',
    salt: 'c565672ee32939ec25a95116d933fffb',
    roles: 'moderator',
  },
  {
    id: 2,
    email: 'ben+rwuser@benstrawbridge.com',
    name: 'Jackie Doe',
    hashedPassword:
      'e39bb42f8f0e632c8bb7e7398f610077c6de15ac0fb47cf66d9a26c723345a33',
    salt: '7815c67b186610e8b962ad7354eaf648',
    roles: 'moderator',
  },
]

const POSTS = [
  {
    id: 1,
    title: 'Journey to the Whimsical World of Flufftopia',
    body: "In a world filled with seriousness and routine, imagine a place where laughter floats in the air and happiness bounces off every corner. Welcome to Flufftopia, a whimsical wonderland where joy knows no bounds! As you step into this magical realm, you'll be greeted by towering candy cane trees and cotton candy clouds, while mischievous unicorns prance around, leaving trails of glitter in their wake. The inhabitants of Flufftopia, affectionately called Fluffians, are a delightful mix of talking animals and enchanting creatures, each with their unique quirks and endearing personalities.\n\nEmbark on a captivating journey through Flufftopia, where you'll befriend delightful characters like Sprinkle the mischievous squirrel, who loves to pull pranks with flying acorns, and Marshmallow, the ever-smiling bunny with an uncanny ability to grant wishes. Join the Fluffians in their daily adventures, whether it's organizing a tickle contest, attending a marshmallow-eating competition, or learning the secret dance moves of the Fluffian Fiesta. In this whimsical world, imagination reigns supreme, and every day is filled with laughter, love, and the simple joy of being surrounded by fluffy wonders. So pack your imagination and get ready for a wild ride as you dive headfirst into the enchanting world of Flufftopia, where dreams come true and happiness is served on a fluffy cloud platter!",
    userId: 1,
  },
  {
    id: 2,
    title: 'A little more about me',
    body: 'As an AI language model developed by OpenAI, I am known as ChatGPT. My primary purpose is to assist users in generating human-like text based on the prompts and questions provided to me. I have been trained on a diverse range of data sources, including books, articles, websites, and much more, to acquire knowledge and language patterns.',
    userId: 1,
  },
  {
    id: 3,
    title: 'What is the meaning of life?',
    body: 'The meaning of life is a profound and subjective question that has intrigued philosophers and thinkers for centuries.',
    userId: 2,
  },
]

export default async () => {
  // create users
  console.log('Seeding users and posts...')
  console.log('')
  for (const user of USERS) {
    await db.user.upsert({
      where: { id: user.id },
      create: { ...user },
      update: {},
    })

    console.log(`  ${user.roles} user ${user.name} with email ${user.email}`)
  }

  // create posts
  console.log('')
  console.log('seeding posts...')
  console.log('')
  for (const post of POSTS) {
    await db.post.upsert({
      where: { id: post.id },
      create: { ...post },
      update: {},
    })

    console.log(`  ${post.title}`)
  }
}
