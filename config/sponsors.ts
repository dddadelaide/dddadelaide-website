import { Sponsor, SponsorType } from './types'

const platinumSponsors: Sponsor[] = []

const goldSponsors: Sponsor[] = [
  {
    id: 'raa',
    imageUrl: '/static/images/sponsors/raa.png',
    name: 'RAA',
    type: SponsorType.Gold,
    url: 'https://raa.com.au/',
  },
  {
    id: 'octopus',
    imageUrl: '/static/images/sponsors/octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Gold,
    url: 'https://www.octopus.com/',
  },
  {
    id: 'adelaideUniversity',
    imageUrl: '/static/images/sponsors/university-of-adelaide.png',
    name: 'The University of Adelaide',
    type: SponsorType.Gold,
    url: 'https://www.adelaide.edu.au/',
  },
]

const silverSponsors: Sponsor[] = [
  {
    id: 'encode',
    imageUrl: '/static/images/sponsors/encode.png',
    name: 'Encode Talent',
    type: SponsorType.Silver,
    url: 'https://www.encodetalent.com.au/',
  },
  {
    id: 'sixpivot',
    imageUrl: '/static/images/sponsors/sixpivot.png',
    name: 'SixPivot',
    type: SponsorType.Silver,
    url: 'https://www.sixpivot.com/',
  },
  {
    id: 'taptu',
    imageUrl: '/static/images/sponsors/taptu.png',
    name: 'Taptu',
    type: SponsorType.Silver,
    url: 'https://www.taptu.com.au/',
  },
  {
    id: 'intopia',
    imageUrl: '/static/images/sponsors/intopia.png',
    name: 'Intopia',
    type: SponsorType.Silver,
    url: 'https://intopia.digital/',
  },
]

const coffeeCartSponsors: Sponsor[] = [
  {
    id: 'mantel',
    imageUrl: '/static/images/sponsors/mantel.png',
    name: 'Mantel Group',
    type: SponsorType.CoffeeCart,
    url: 'https://mantelgroup.com.au/',
  },
]

const serviceSponsors: Sponsor[] = []

const communityPartners: Sponsor[] = [
  {
    id: 'rds',
    imageUrl: '/static/images/sponsors/rds.png',
    name: 'Relational Data Services',
    type: SponsorType.Community,
    url: 'https://relational.com.au/',
  },
  {
    id: 'maxmine',
    imageUrl: '/static/images/sponsors/maxmine.png',
    name: 'MaxMine',
    type: SponsorType.Community,
    url: 'https://maxmine.com.au/',
  },
  {
    id: 'ozrunways',
    imageUrl: '/static/images/sponsors/ozrunways.png',
    name: 'OzRunways',
    type: SponsorType.Community,
    url: 'https://www.ozrunways.com/au/',
  },
  {
    id: 'quoterite',
    imageUrl: '/static/images/sponsors/quoterite.png',
    name: 'Quoterite',
    type: SponsorType.Community,
    url: 'https://www.quoterite.com.au/',
  },
  {
    id: 'aligent',
    imageUrl: '/static/images/sponsors/aligent.png',
    name: 'Aligent',
    type: SponsorType.Community,
    url: 'https://aligent.com.au/',
  },
  {
    id: 'tiimely',
    imageUrl: '/static/images/sponsors/tiimely.png',
    name: 'Tiimely',
    type: SponsorType.Community,
    url: 'http://tiimely.com/',
  },
]

const Sponsors: Sponsor[] = [
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...coffeeCartSponsors,
  ...serviceSponsors,
  ...communityPartners,
]

export default Sponsors
