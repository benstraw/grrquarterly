import Post from './Post'

const POST = {
  id: 1,
  title: 'First Post',
  body: 'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.',
  createdAt: '2023-06-30T12:34:56Z',
  user: {
    name: 'jonny doe',
  },
}

export const detail = () => {
  return <Post post={POST} />
}

export default { title: 'Components/Admin/Post' }
