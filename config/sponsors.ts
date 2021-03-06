import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
  // Gold
  {
    imageUrl: '/static/images/sponsors/purple.png',
    name: 'Telstra Purple',
    type: SponsorType.Gold,
    url: 'https://www.telstra.com.au/business-enterprise/services/telstra-purple/',
  },
  {
    imageUrl: '/static/images/sponsors/unisa.png',
    name: 'University of South Australia',
    type: SponsorType.Gold,
    url: 'https://www.unisa.edu.au/',
  },
  {
    imageUrl: '/static/images/sponsors/aws.png',
    name: 'AWS',
    type: SponsorType.Gold,
    url: 'https://aws.amazon.com/',
  },
  {
    imageUrl: '/static/images/sponsors/comunet.png',
    name: 'Comunet',
    type: SponsorType.Gold,
    url: 'https://comunet.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/encode.png',
    name: 'Encode Talent',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.encodetalent.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/octopus-deploy.png',
    name: 'Octopus Deploy',
    serviceProvided: 'Major Prize',
    type: SponsorType.Service,
    url: 'https://www.octopus.com/',
  },
  // Services
  // {
  //   imageUrl: '/static/images/sponsors/vgw.png',
  //   name: 'Virtual Gaming Worlds',
  //   serviceProvided: 'Coffee Cart',
  //   type: SponsorType.Service,
  //   url: 'https://www.vgw.co/',
  // },
  // {
  //   imageUrl: '/static/images/sponsors/planit.png',
  //   name: 'Planit',
  //   serviceProvided: 'Coffee Cart',
  //   type: SponsorType.Service,
  //   url: 'https://www.planittesting.com/',
  // },
  // {
  //   imageUrl: '/static/images/sponsors/bhp.png',
  //   name: 'BHP',
  //   serviceProvided: 'Keynote and Quiet Zone',
  //   type: SponsorType.Service,
  //   url: 'https://www.bhp.com/',
  // },
  {
    imageUrl: '/static/images/sponsors/yow.png',
    name: 'YOW! Conferences and Workshops',
    serviceProvided: '',
    type: SponsorType.Community,
    url: 'https://yowconference.com/',
  },
  // {
  //   imageUrl: '/static/images/sponsors/livehire.png',
  //   name: 'LiveHire',
  //   serviceProvided: 'Childcare',
  //   type: SponsorType.Service,
  //   url: 'https://www.livehire.com/',
  // },
  // Standard
  // {
  //   imageUrl: '/static/images/sponsors/jetbrains.png',
  //   name: 'JetBrains',
  //   type: SponsorType.Standard,
  //   url: 'https://www.jetbrains.com/',
  // },
  // {
  //   imageUrl: '/static/images/sponsors/ozcode.png',
  //   name: 'OzCode',
  //   type: SponsorType.Standard,
  //   url: 'https://oz-code.com/',
  // },
  // {
  //   imageUrl: '/static/images/sponsors/codemaster-institute.png',
  //   name: 'Codemaster Institute',
  //   type: SponsorType.Standard,
  //   url: 'https://www.codemasterinstitute.com/',
  // },
]

export default Sponsors
