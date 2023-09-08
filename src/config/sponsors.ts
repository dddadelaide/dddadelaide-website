import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
  // Gold
  {
    imageUrl: '/static/images/sponsors/comunet.png',
    name: 'Comunet',
    type: SponsorType.Gold,
    url: 'https://comunet.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Gold,
    url: 'https://www.octopus.com/',
  },
  {
    imageUrl: '/static/images/sponsors/encode.png',
    name: 'Encode Talent',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.encodetalent.com.au/',
  },
  // Silver
  {
    imageUrl: '/static/images/sponsors/sixpivot.png',
    name: 'SixPivot',
    type: SponsorType.Silver,
    url: 'https://www.sixpivot.com.au/',
  },
  // SA
  {
    imageUrl: '/static/images/sponsors/daitum.png',
    name: 'Daitum',
    type: SponsorType.SA,
    url: 'https://daitum.com/',
  },
  {
    imageUrl: '/static/images/sponsors/fleet.png',
    name: 'FleetSpace',
    type: SponsorType.SA,
    url: 'https://fleetspace.com/',
  },
  {
    imageUrl: '/static/images/sponsors/maxmine.png',
    name: 'MaxMine',
    type: SponsorType.SA,
    url: 'https://maxmine.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/ozrunways.png',
    name: 'OzRunways',
    type: SponsorType.SA,
    url: 'https://www.ozrunways.com/au/',
  },
  {
    imageUrl: '/static/images/sponsors/quoterite.png',
    name: 'Quoterite',
    type: SponsorType.SA,
    url: 'https://www.quoterite.com.au/',
  },
  // Community
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
]

export default Sponsors
