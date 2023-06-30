import { render, screen, waitFor } from '@redwoodjs/testing'

import Post from './Post'

const POST = {
  id: 1,
  title: 'First post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  createdAt: new Date().toISOString(),
  user: {
    name: 'jon doe',
  },
}

describe('Post', () => {
  it('renders a blog post with edit and delete buttons', () => {
    render(<Post post={POST} />)
    const dtcstring = new Date(POST.createdAt).toUTCString()

    expect(screen.getByText(POST.title)).toBeInTheDocument()
    expect(screen.getByText(POST.body)).toBeInTheDocument()
    expect(screen.getByText(dtcstring)).toBeInTheDocument()
    expect(screen.getByText(POST.id)).toBeInTheDocument()
    // the buttons
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })
})
