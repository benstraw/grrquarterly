import { db } from 'api/src/lib/db'

const USERS = [
  {
    id: 1,
    email: 'ben+rwadmin@benstrawbridge.com',
    name: 'John Doe',
    hashedPassword:
      'ad9563042fe9f154419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
    salt: '1c99de412b219e9abf4665293211adce',
    roles: ['admin', 'moderator', 'user'],
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
]

const POSTS = [
  {
    id: 1,
    title: 'Welcome to the blog!',
    body: "I'm baby single- origin coffee kickstarter lo - fi paleo skateboard.Tumblr hashtag austin whatever DIY plaid knausgaard fanny pack messenger bag blog next level woke.Ethical bitters fixie freegan,helvetica pitchfork 90's tbh chillwave mustache godard subway tile ramps art party. Hammock sustainable twee yr bushwick disrupt unicorn, before they sold out direct trade chicharrones etsy polaroid hoodie. Gentrify offal hoodie fingerstache.",
    userId: 1,
  },
  {
    id: 2,
    title: 'A little more about me',
    body: "Raclette shoreditch before they sold out lyft. Ethical bicycle rights meh prism twee. Tote bag ennui vice, slow-carb taiyaki crucifix whatever you probably haven't heard of them jianbing raw denim DIY hot chicken. Chillwave blog succulents freegan synth af ramps poutine wayfarers yr seitan roof party squid. Jianbing flexitarian gentrify hexagon portland single-origin coffee raclette gluten-free. Coloring book cloud bread street art kitsch lumbersexual af distillery ethical ugh thundercats roof party poke chillwave. 90's palo santo green juice subway tile, prism viral butcher selvage etsy pitchfork sriracha tumeric bushwick.",
    userId: 1,
  },
  {
    id: 3,
    title: 'What is the meaning of life?',
    body: 'Meh waistcoat succulents umami asymmetrical, hoodie post-ironic paleo chillwave tote bag. Trust fund kitsch waistcoat vape, cray offal gochujang food truck cloud bread enamel pin forage. Roof party chambray ugh occupy fam stumptown. Dreamcatcher tousled snackwave, typewriter lyft unicorn pabst portland blue bottle locavore squid PBR&B tattooed.',
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

    console.log(`  ${user.roles} USER ${user.name} with email ${user.email}`)
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
