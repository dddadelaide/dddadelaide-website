import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
  // Gold
  {
    imageUrl: '/static/images/sponsors/octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Gold,
    url: 'https://www.octopus.com/',
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
    imageUrl: '/static/images/sponsors/yow.png',
    name: 'YOW! Conferences and Workshops',
    serviceProvided: '',
    type: SponsorType.Community,
    url: 'https://yowconference.com/',
  },
  // Prize
  {
    imageUrl: '/static/images/sponsors/makerx.png',
    name: 'Maker X',
    type: SponsorType.Prize,
    url: 'https://www.makerx.com.au/',
  },
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
